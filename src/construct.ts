import { RegExpConversionError } from './error'

export interface ConstructOptions {
  /**
   * Original pattern, for error reporting.
   */
  original?: string

  /**
   * Default flags to use. (default: `dg`)
   *
   * Note that some Oniguruma patterns might alter the flags.
   */
  flags?: string | string[]

  /**
   * Ignore contiguous anchors (\G) in the pattern.
   *
   * There is no equivalent in JavaScript
   *
   * @default false
   */
  ignoreContiguousAnchors?: boolean
}

/**
 * Construct a RegExp object from a already-lowered pattern.
 */
export function construct(
  pattern: string,
  options: ConstructOptions = {},
): RegExp {
  const {
    original = pattern,
    flags = ['g'],
  } = options

  // `(?x)` stands for free-spacing mode
  // https://www.regular-expressions.info/freespacing.html
  // We remove comments and whitespaces
  if (pattern.startsWith('(?x)') || pattern.includes('(?x:')) {
    throw new RegExpConversionError(
      'RegExp Free-spacing mode `(?x)` is not supported, you might want to run syntaxLowering() first',
      { pattern: original, converted: pattern },
    )
  }

  if (pattern.match(/\[:\w+:\]/)) {
    throw new RegExpConversionError(
      'POSIX character classes are not supported, you might want to run syntaxLowering() first',
      { pattern: original, converted: pattern },
    )
  }

  const flagSet = new Set<string>(Array.isArray(flags) ? flags : flags.split(''))

  if (options.ignoreContiguousAnchors) {
    pattern = pattern
      .replace(/\\G/g, '')
  }

  pattern = pattern
    // `\A` is `^` in JavaScript
    .replace(/\\A/g, '^')
    // `\x{00}` is `\u0000` in JavaScript
    .replace(/\\x\{([^}]*)\}/g, (m, hex) => `\\u${hex.padStart(4, '0')}`)
    // Extract flags
    .replace(/\(\?(-)?(\w+):/g, (_, neg, flagStr) => {
      if (neg) {
        for (const flag of flagStr)
          flagSet.delete(flag)
      }
      else {
        for (const flag of flagStr)
          flagSet.add(flag)
      }
      return '(?:'
    })
    .replace(/\(\?(-)?(\w+)\)/g, (_, neg, flags) => {
      if (neg) {
        for (const flag of flags)
          flagSet.delete(flag)
      }
      else {
        for (const flag of flags)
          flagSet.add(flag)
      }
      return ''
    })

  if (flagSet.has('x')) {
    throw new RegExpConversionError(
      'JavaScript does not support extended mode (x flag), you might want to run syntaxLowering() first',
      { pattern: original, converted: pattern },
    )
  }

  try {
    return new RegExp(pattern, [...flagSet].join(''))
  }
  catch (e) {
    throw new RegExpConversionError(
      `Failed to construct RegExp`,
      {
        pattern: original,
        converted: pattern,
        cause: e,
      },
    )
  }
}
