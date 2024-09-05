import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '\\b(avg|count|distinct_count|estdc|estdc_error|eval|max|mean|median|min|mode|percentile|range|stdev|stdevp|sum|sumsq|var|varp|first|last|list|values|earliest|earliest_time|latest|latest_time|per_day|per_hour|per_minute|per_second|rate)\\b',
    '| timechart limit=0 useother=f span=30s avg(cpu_user_pct) AS avg,max(cpu_user_pct) AS max by host\n',
    56,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(avg|count|distinct_count|estdc|estdc_error|eval|max|mean|median|min|mode|percentile|range|stdev|stdevp|sum|sumsq|var|varp|first|last|list|values|earliest|earliest_time|latest|latest_time|per_day|per_hour|per_minute|per_second|rate)\\b"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "avg",
      "avg",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        61,
        64,
      ],
      [
        61,
        64,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '\\b(avg|count|distinct_count|estdc|estdc_error|eval|max|mean|median|min|mode|percentile|range|stdev|stdevp|sum|sumsq|var|varp|first|last|list|values|earliest|earliest_time|latest|latest_time|per_day|per_hour|per_minute|per_second|rate)\\b',
    '| timechart limit=0 useother=f span=30s avg(cpu_user_pct) AS avg,max(cpu_user_pct) AS max by host\n',
    81,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(avg|count|distinct_count|estdc|estdc_error|eval|max|mean|median|min|mode|percentile|range|stdev|stdevp|sum|sumsq|var|varp|first|last|list|values|earliest|earliest_time|latest|latest_time|per_day|per_hour|per_minute|per_second|rate)\\b"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "max",
      "max",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        86,
        89,
      ],
      [
        86,
        89,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '\\b(abs|acos|acosh|asin|asinh|atan|atan2|atanh|case|cidrmatch|ceiling|coalesce|commands|cos|cosh|exact|exp|floor|hypot|if|in|isbool|isint|isnotnull|isnull|isnum|isstr|len|like|ln|log|lower|ltrim|match|max|md5|min|mvappend|mvcount|mvdedup|mvfilter|mvfind|mvindex|mvjoin|mvrange|mvsort|mvzip|now|null|nullif|pi|pow|printf|random|relative_time|replace|round|rtrim|searchmatch|sha1|sha256|sha512|sigfig|sin|sinh|spath|split|sqrt|strftime|strptime|substr|tan|tanh|time|tonumber|tostring|trim|typeof|upper|urldecode|validate)(?=\\()\\b',
    '| timechart limit=0 useother=f span=1m max(used_pct) AS max_used,max(swap_used_pct) AS max_swap_used by host\n',
    51,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(abs|acos|acosh|asin|asinh|atan|atan2|atanh|case|cidrmatch|ceiling|coalesce|commands|cos|cosh|exact|exp|floor|hypot|if|in|isbool|isint|isnotnull|isnull|isnum|isstr|len|like|ln|log|lower|ltrim|match|max|md5|min|mvappend|mvcount|mvdedup|mvfilter|mvfind|mvindex|mvjoin|mvrange|mvsort|mvzip|now|null|nullif|pi|pow|printf|random|relative_time|replace|round|rtrim|searchmatch|sha1|sha256|sha512|sigfig|sin|sinh|spath|split|sqrt|strftime|strptime|substr|tan|tanh|time|tonumber|tostring|trim|typeof|upper|urldecode|validate)(?=\\()\\b"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "max",
      "max",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        65,
        68,
      ],
      [
        65,
        68,
      ],
    ]
  `)
  expect(match).toBe(null)
})
