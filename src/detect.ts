const KNOWN_FLAGS = /* @__PURE__ */ new Set('gimsuyx')

// @keep-sorted
export const FEATURES_SUPPORTED_BY_JS = [
  '(?:',
  '(?!',
  '(?<!',
  '(?<',
  '(?<=',
  '(?=',

  '\\1',
  '\\2',
  '\\3',
  '\\4',
  '\\5',

  '\\b',
  '\\B',
  '\\d',
  '\\D',
  '\\n',
  '\\r',
  '\\s',
  '\\S',
  '\\t',
  '\\w',
  '\\W',

  'g',
  'i',
  'm',
]

export const FEATURES_POLYFILLABLE = [
  'x',
  '\\x',
  '\\h',
  '\\H',
  '\\A',
  '(?#',

  // Atomic Group
  '(?>',

  // Possessive quantifiers
  '*+',
  '++',
  '?+',
  '}+',

  // POSIX
  '[:alnum:]',
  '[:alpha:]',
  '[:ascii:]',
  '[:blank:]',
  '[:cntrl:]',
  '[:digit:]',
  '[:graph:]',
  '[:lower:]',
  '[:print:]',
  '[:punct:]',
  '[:space:]',
  '[:upper:]',
  '[:xdigit:]',
  '[:word:]',
]

// References: https://macromates.com/manual/en/regular_expressions#syntax_oniguruma
const KNOWN_GROUP_MODIFIDERS = [
  '<=',
  '<!',
  '!=',
  ':',
  '<',
  '>',
  '=',
  '^',
  '#',
  '!',
  '@',
]

export interface RegExpFeaturesStructured {
  backslashes?: Set<string>
  posixBrackets?: Set<string>
  groupModifiers?: Set<string>
  possessiveQuantifiers?: Set<string>
  flagModifiers?: Set<string>
}

/**
 * Groups are specified as `(?` `(?<=` etc without closing bracket.
 * Flags are specified as `x` `i` etc
 * POSIX classes are specified as `[:alnum:]` etc
 * Possessive quantifiers are specified as `*+` etc
 */
export type RegExpFeaturesFlat = Set<string>

export interface DetectRegexFeaturesOptions<S extends boolean = false> {
  /**
   * Should the function return structural result, or a flag list of strings
   *
   * @default false
   */
  structural?: S
  /**
   * Features set to reuse, useful if you want to pass previous features set result.
   *
   * Only work with `structural: false`
   */
  featuresSet?: RegExpFeaturesFlat
}

/**
 * Detect features used from regex patterns.
 * Useful to check if a regex is supported for a specific engine.
 */
export function detectRegexFeatures<S extends true>(
  input: string | string[],
  options: DetectRegexFeaturesOptions<S>,
): RegExpFeaturesStructured
export function detectRegexFeatures<S extends boolean = false>(
  input: string | string[],
  options?: DetectRegexFeaturesOptions<S>,
): RegExpFeaturesFlat
export function detectRegexFeatures<S extends boolean>(
  input: string | string[],
  options: DetectRegexFeaturesOptions<S> = {},
): RegExpFeaturesFlat | RegExpFeaturesStructured {
  const structural = detectRegexFeaturesStrcutural(input)
  if (options.structural)
    return structural
  return structuralFeaturesToFlat(structural, options.featuresSet)
}

export function detectRegexFeaturesStrcutural(
  patterns: string | string[],
): RegExpFeaturesStructured {
  const backslashes = new Set<string>()
  const posixBrackets = new Set<string>()
  const groupModifiers = new Set<string>()
  const possessiveQuantifiers = new Set<string>()
  const flagModifiers = new Set<string>()
  const result: RegExpFeaturesStructured = {}

  for (const input of (Array.isArray(patterns) ? patterns : [patterns])) {
    const stack: string[] = []
    const freeSpacingLocal: number[] = []
    let freeSpacingGlobal = false

    let i = 0
    while (i < input.length) {
      const char = input[i]

      const head = stack[0]
      const freeSpacing = freeSpacingGlobal || freeSpacingLocal.length

      // Escape sequences
      if (char === '\\') {
        if (input[i + 1].match(/[a-z]/i)) {
          backslashes.add(input[i + 1])
        }
        else if (input[i + 1].match(/\d/)) {
          let parts = input[i + 1]
          let j = i + 2
          while (input[j] && input[j].match(/\d/)) {
            parts += input[j]
            j += 1
          }
          backslashes.add(parts)
        }
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
          const next = input.slice(i + 2, i + 5)
          for (const modifier of KNOWN_GROUP_MODIFIDERS) {
            if (next.startsWith(modifier))
              groupModifiers.add(modifier)
          }

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

          // Extract flags
          if (KNOWN_FLAGS.has(input[i + 2])) {
            let end = i + 3
            for (; end < input.length; end++) {
              if (!KNOWN_FLAGS.has(input[end]))
                break
            }
            const flagStr = input.slice(i + 2, end)
            for (const flag of flagStr)
              flagModifiers.add(flag)
            const hasX = flagStr.includes('x') && flagStr[0] !== '-'
            const remainFlags = [...flagStr].filter(x => x !== 'x').join('')

            for (const flag of remainFlags) {
              flagModifiers.add(flag)
            }

            if (input[end] === ')') {
              i = end + 1
              if (hasX) {
                freeSpacingGlobal = true
              }
              if (remainFlags.length) {
              // output += `(?${remainFlags})`
              }
              continue
            }
            else if (input[end] === ':') {
              i = end + 1
              stack.unshift(char)
              if (hasX) {
                freeSpacingLocal.unshift(stack.length)
              }
              // output += `(?${remainFlags}:`
              continue
            }
            stack.unshift(char)
            // output += char + input[i + 1] + input[i + 2]
            i += 3
          }
          else {
            stack.unshift(char)
            // output += char
            i += 1
          }
          continue
        }
      }

      // Close bracket
      if (char === ')' && head !== '[') {
        if (head === '(')
          stack.shift()
        // output += char
        i += 1
        continue
      }

      // Alternation open bracket
      if (char === '[') {
      // Look for posix classes like [:alnum:]
        if (input[i + 1] === ':') {
          let name = ''
          if (input[i + 2] === '^') {
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
            posixBrackets.add(name)
            continue
          }
        }

        // Prepend to the stack when not in a character class
        if (head !== '[') {
          stack.unshift(char)
        }

        // output += char
        i += 1
        continue
      }

      // Alternation close bracket
      if (char === ']') {
        if (head === '[')
          stack.shift()
        // output += char
        i += 1
        continue
      }

      // Possessive quantifiers
      if (char === '+' && head !== '[') {
        if ('?+}*'.includes(input[i - 1])) {
          possessiveQuantifiers.add(input[i - 1])
          i += 1
          continue
        }
      }

      // Ignore whitespace if Free-spacing mode is enabled
      if (!(freeSpacing && head !== '[' && char.match(/\s/))) {
      // Literals
      }
      i += 1
    }
  }

  if (backslashes.size)
    result.backslashes = backslashes
  if (posixBrackets.size)
    result.posixBrackets = posixBrackets
  if (groupModifiers.size)
    result.groupModifiers = groupModifiers
  if (possessiveQuantifiers.size)
    result.possessiveQuantifiers = possessiveQuantifiers
  if (flagModifiers.size)
    result.flagModifiers = flagModifiers

  return result
}

export function structuralFeaturesToFlat(
  features: RegExpFeaturesStructured,
  set = new Set<string>(),
): RegExpFeaturesFlat {
  for (const s of features.backslashes || [])
    set.add(`\\${s}`)

  for (const g of features.groupModifiers || [])
    set.add(`(?${g}`)

  for (const f of features.flagModifiers || [])
    set.add(f)

  for (const m of features.posixBrackets || [])
    set.add(`[:${m}:]`)

  for (const p of features.possessiveQuantifiers || [])
    set.add(`${p}+`)

  return set
}
