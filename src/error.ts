export class RegExpConversionError extends SyntaxError {
  patternOriginal: string
  patternConverted?: string
  cursorPosition?: number

  constructor(
    message: string,
    options: {
      pattern: string
      converted?: string
      cursor?: number
      cause?: unknown
    },
  ) {
    super(message, { cause: options.cause })
    this.patternOriginal = options.pattern
    this.patternConverted = options.converted
    this.cursorPosition = options.cursor
  }
}
