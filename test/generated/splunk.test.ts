import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "\\b(avg|count|distinct_count|estdc|estdc_error|eval|max|mean|median|min|mode|percentile|range|stdev|stdevp|sum|sumsq|var|varp|first|last|list|values|earliest|earliest_time|latest|latest_time|per_day|per_hour|per_minute|per_second|rate)\\b",
    "| timechart limit=0 useother=f span=30s avg(cpu_user_pct) AS avg,max(cpu_user_pct) AS max by host\n",
    56,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/\\b(avg|count|distinct_count|estdc|estdc_error|eval|max|mean|median|min|mode|percentile|range|stdev|stdevp|sum|sumsq|var|varp|first|last|list|values|earliest|earliest_time|latest|latest_time|per_day|per_hour|per_minute|per_second|rate)\\b/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "avg",
        "avg",
      ]
    `)

  expect(match).toEqual(null)
})