import { rewrite } from 'regex'
import { RegExpConversionError } from './error'

const UNNECESSARY_ESCAPE_CHAR_CLASS = new Set('!?:=+$(){}_><# ')
const UNNECESSARY_ESCAPE = new Set('-!:=_>< ')

const TABLE_POSIX = {
  alnum: '0-9A-Za-z',
  alpha: 'A-Za-z',
  ascii: '\x00-\x7F',
  blank: ' \\t',
  cntrl: '\x00-\x1F\x7F',
  digit: '\\d',
  graph: '!-~',
  lower: 'a-z',
  print: ' -~',
  punct: '!-/:-@[-`{-~',
  space: '\\s',
  upper: 'A-Z',
  xdigit: '0-9A-Fa-f',
  word: '\\w',
} as Record<string, string>

// @keep-sorted
const TABLE_SLASH_P = {
  alnum: '0-9A-Za-z',
  alpha: 'A-Za-z',
  alphabetic: 'A-Za-z',
  blank: '\\s',
  greek: '\\p{Script=Greek}',
  print: '\\p{L}\\p{N}\\p{P}\\p{S}\\p{Zs}',
  word: '\\w',
} as Record<string, string>

const KNOWN_FLAGS = /* @__PURE__ */ new Set('gimsuyx')

export interface SyntaxLoweringOptions {
  /**
   * Use the `regex` package lower the syntaxes, like Atomic Group, Possessive Quantifiers, etc.
   *
   * @default false
   */
  useRegex?: boolean

  /**
   * Preserve flags like `x` in `(?i)` or `(?i:...)`.
   *
   * When set to `true`, meaning the result might not be directly usable in JavaScript.
   *
   * @default false
   */
  preserveFlags?: boolean

  /**
   * Remove possessive quantifiers like `*+`, `?+`, `++`, `{1,2}+`.
   *
   * This might alter the meaning of the regex.
   *
   * You might not need this when `useRegex` is enabled.
   *
   * @default false
   */
  removePossessiveQuantifier?: boolean

  /**
   * Remove atomic group like `(?>...)` to non-capturing group `(?:...)`.
   *
   * This might alter the meaning of the regex.
   *
   * You might not need this when `useRegex` is enabled.
   *
   * @default false
   */
  removeAtomicGroup?: boolean

  /**
   * Convert `\h` and `\H` to `[0-9A-Fa-f]` and `[^0-9A-Fa-f]` respectively.
   *
   * @default false
   */
  convertHexDigitsShorthand?: boolean

  /**
   * Convert `\p{...}` to `[...]` that are not supported in JavaScript.
   *
   * @default false
   */
  convertUnicodeCategory?: boolean

  /**
   * Expand nested character class like `[a-z[0-9]]` to `[a-z0-9]`.
   *
   * @default false
   */
  expandNestedCharacterClass?: boolean
}

export interface SyntaxLoweringResult {
  pattern: string
  flags: string
}

/**
 * Read the Oniguruma regex, lower syntaxes and return a more JavaScript-friendly regex.
 */
export function syntaxLowering(
  input: string,
  options: SyntaxLoweringOptions = {},
): SyntaxLoweringResult {
  const {
    useRegex = false,
    preserveFlags = false,
    removePossessiveQuantifier = false,
    removeAtomicGroup = false,
    convertHexDigitsShorthand = false,
    convertUnicodeCategory = false,
    expandNestedCharacterClass = false,
  } = options

  let output = ''

  const flags = new Set<string>()
  // Stack of open brackets
  const stack: string[] = []

  const freeSpacingLocal: number[] = []
  let freeSpacingGlobal = false
  let isInNestedCharClass = false

  let i = 0
  try {
    while (i < input.length) {
      const char = input[i]

      while (freeSpacingLocal.length && freeSpacingLocal[0] > stack.length) {
        freeSpacingLocal.shift()
      }

      const head = stack[0]
      const freeSpacing = freeSpacingGlobal || freeSpacingLocal.length

      // Escape sequences
      if (char === '\\') {
        // Expand \h and \H
        if (convertHexDigitsShorthand) {
          if (input[i + 1] === 'h') {
            const body = `0-9A-Fa-f`
            if (head === '[') {
              output += body
            }
            else {
              output += `[${body}]`
            }
            i += 2
            continue
          }
          if (input[i + 1] === 'H') {
            if (head === '[') {
              throw new RegExpConversionError(
                'Expending \\H in character class is not supported',
                { pattern: input, converted: output, cursor: i },
              )
            }
            else {
              output += `[^0-9A-Fa-f]`
            }
            i += 2
            continue
          }
        }
        if (convertUnicodeCategory && input[i + 1] === 'p' && input[i + 2] === '{') {
          const end = input.indexOf('}', i + 3)
          if (end === -1) {
            throw new RegExpConversionError(
              'Unmatched \\p{...}',
              { pattern: input, converted: output, cursor: i },
            )
          }
          const name = input.slice(i + 3, end)
          const resolved = TABLE_SLASH_P[name.toLowerCase()]
          if (resolved) {
            if (head === '[') {
              output += resolved
            }
            else {
              output += `[${resolved}]`
            }
            i = end + 1
            continue
          }
        }
        if (head === '[' && UNNECESSARY_ESCAPE_CHAR_CLASS.has(input[i + 1])) {
          output += input[i + 1]
          i += 2
          continue
        }
        if (head !== '[' && UNNECESSARY_ESCAPE.has(input[i + 1])) {
          output += input[i + 1]
          i += 2
          continue
        }
        output += char + input[i + 1]
        i += 2
        continue
      }

      // Comments
      if (char === '#' && freeSpacing && input[i - 1].match(/\s/) && head !== '[') {
        for (let j = i + 1; j <= input.length; j++) {
          if (input[j] === '\n' || j === input.length) {
            i = j
            break
          }
        }
        continue
      }

      // Open bracket
      if (char === '(' && head !== '[') {
        // Group modifiers
        if (input[i + 1] === '?') {
          // (?#...) comment
          if (input[i + 2] === '#') {
            for (let j = i + 3; j < input.length; j++) {
              if (input[j] === ')' && input[j - 1] !== '\\') {
                i = j + 1
                break
              }
            }
            continue
          }

          // Atomic group
          if (removeAtomicGroup && input[i + 2] === '>') {
            output += '(?:'
            i += 3
            continue
          }

          // Extract flags
          if (KNOWN_FLAGS.has(input[i + 2])) {
            let end = i + 3
            for (; end < input.length; end++) {
              if (!KNOWN_FLAGS.has(input[end]))
                break
            }
            const flagStr = input.slice(i + 2, end)
            const hasX = flagStr.includes('x') && flagStr[0] !== '-'
            let remainFlags = [...flagStr].filter(x => x !== 'x').join('')

            if (!preserveFlags) {
              if (remainFlags[0] === '-') {
                remainFlags = remainFlags.slice(1)
                for (const flag of flagStr) {
                  flags.delete(flag)
                }
              }
              else {
                for (const flag of remainFlags) {
                  flags.add(flag)
                }
              }
              remainFlags = ''
            }

            if (input[end] === ')') {
              i = end + 1
              if (hasX) {
                freeSpacingGlobal = true
              }
              if (remainFlags.length) {
                output += `(?${remainFlags})`
              }
              continue
            }
            else if (input[end] === ':') {
              i = end + 1
              stack.unshift(char)
              if (hasX) {
                freeSpacingLocal.unshift(stack.length)
              }
              output += `(?${remainFlags}:`
              continue
            }
          }
          stack.unshift(char)
          output += char + input[i + 1] + input[i + 2]
          i += 3
        }
        else {
          stack.unshift(char)
          output += char
          i += 1
        }
        continue
      }

      // Close bracket
      if (char === ')' && head !== '[') {
        if (head === '(')
          stack.shift()
        output += char
        i += 1
        continue
      }

      // Alternation open bracket
      if (char === '[') {
        // Look for posix classes like [:alnum:]
        if (input[i + 1] === ':') {
          let name = ''
          let negated = false
          if (input[i + 2] === '^') {
            negated = true
            i += 1
          }
          for (let j = i + 2; j < input.length; j++) {
            if (input[j] === ':') {
              i = j + 2
              break
            }
            if (!input[j].match(/[a-z]/i)) {
              name = ''
              break
            }
            name += input[j]
          }
          if (name) {
            let resolved = TABLE_POSIX[name]
            if (!resolved) {
              throw new RegExpConversionError(
                `Unknown posix class "${name}"`,
                { pattern: input, converted: output, cursor: i },
              )
            }
            if (negated)
              resolved = `^${resolved}`
            if (head === '[')
              output += resolved
            else
              output += `[${resolved}]`
            continue
          }
        }

        // Prepend to the stack when not in a character class
        if (head !== '[') {
          stack.unshift(char)
        }

        // Nested character class
        if (head === '[' && expandNestedCharacterClass) {
          isInNestedCharClass = true
          i += 1
          // Nested character class starting with `-`
          if (input[i] === '-') {
            output += '\\-'
            i += 1
          }
          continue
        }

        output += char
        i += 1
        continue
      }

      // Alternation close bracket
      if (char === ']') {
        if (isInNestedCharClass) {
          isInNestedCharClass = false
          i += 1
          continue
        }
        if (head === '[')
          stack.shift()
        output += char
        i += 1
        continue
      }

      // Possessive quantifiers
      if (removePossessiveQuantifier && char === '+' && head !== '[') {
        if ('?+}*'.includes(input[i - 1])) {
          i += 1
          continue
        }
      }

      // Special handling for `(A|*|B)` where `*` is a literal should be escaped
      if (char === '*' && head !== '[' && input[i - 1] === '|' && input[i - 2] !== '\\') {
        output += '\\'
      }

      // Ignore whitespace if Free-spacing mode is enabled
      if (!(freeSpacing && head !== '[' && char.match(/\s/))) {
        // Literals
        output += char
      }
      i += 1
    }
  }
  catch (e: any) {
    if (e instanceof RegExpConversionError)
      throw e
    throw new RegExpConversionError(
      `Error lowering regex at position ${i}`,
      { pattern: input, converted: output, cursor: i, cause: e },
    )
  }

  const flagStr = [...flags].join('')

  if (useRegex) {
    output = rewrite(
      output,
      {
        flags: flagStr,
        unicodeSetsPlugin: null,
        disable: {
          n: true,
          v: true,
          x: true,
        },
      },
    ).expression
  }

  return {
    pattern: output,
    flags: flagStr,
  }
}
