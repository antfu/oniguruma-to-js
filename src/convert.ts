import type { ConstructOptions } from './construct'
import { construct } from './construct'
import type { SyntaxLoweringOptions } from './lowering'
import { syntaxLowering } from './lowering'

export interface OnigurumaToRegexpOptions extends Omit<ConstructOptions, 'original'>, SyntaxLoweringOptions {

}

export function onigurumaToRegexp(
  pattern: string,
  options: OnigurumaToRegexpOptions = {},
): RegExp {
  const {
    pattern: converted,
    flags,
  } = syntaxLowering(pattern, {
    removePossessiveQuantifier: true,
    removeAtomicGroup: true,
    ...options,
  })

  return construct(converted, {
    original: pattern,
    ...options,
    flags: [...new Set([...flags, ...(options.flags || [])])].join(''),
  })
}
