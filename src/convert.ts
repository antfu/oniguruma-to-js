import type { ConstructOptions } from './construct'
import { construct } from './construct'
import { syntaxLowering } from './lowering'

export interface OnigurumaToRegexpOptions extends Omit<ConstructOptions, 'original'> {

}

export function onigurumaToRegexp(
  pattern: string,
  options: OnigurumaToRegexpOptions = {},
): RegExp {
  const lowered = syntaxLowering(pattern)
  return construct(lowered, {
    original: pattern,
    ...options,
  })
}
