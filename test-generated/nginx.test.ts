import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    ';',
    '      fastcgi_pass   127.0.0.1:1025;\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`";"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        35,
        36,
      ],
    ]
  `)
  expect(indices).toMatchObject([[35, 36]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    ';',
    '      proxy_pass      http://127.0.0.1:8080;\n',
    17,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`";"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        43,
        44,
      ],
    ]
  `)
  expect(indices).toMatchObject([[43, 44]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?:^|\\s)(weight|max_conn|max_fails|fail_timeout|slow_start)(=)(\\d[\\d\\.]*[bBkKmMgGtTsShHdD]?)(?:\\s|;|$)',
    '    server 127.0.0.3:8000 weight=5;\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:^|\\s)(weight|max_conn|max_fails|fail_timeout|slow_start)(=)(\\d[\\d\\.]*[bBkKmMgGtTsShHdD]?)(?:\\s|;|$)"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        25,
        35,
      ],
      [
        26,
        32,
      ],
      [
        32,
        33,
      ],
      [
        33,
        34,
      ],
    ]
  `)
  expect(indices).toMatchObject([[25, 35], [26, 32], [32, 33], [33, 34]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    ';',
    '    server 192.168.0.1:8001;\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`";"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        27,
        28,
      ],
    ]
  `)
  expect(indices).toMatchObject([[27, 28]])
})
