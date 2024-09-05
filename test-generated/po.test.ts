import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '# pan93412 <pan93412@gmail.com>, 2019.\n',
    39,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        39,
        39,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    'msgid ""\n',
    9,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        9,
        9,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    'msgstr ""\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        10,
        10,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"Project-Id-Version: pan 93412\\n"\n',
    34,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        34,
        34,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"POT-Creation-Date: 2023-11-05 12:30+0000\\n"\n',
    45,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        45,
        45,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"PO-Revision-Date: 2019-10-09 20:54+0800\\n"\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        44,
        44,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 6', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"Last-Translator: pan93412 <pan93412@gmail.com>\\n"\n',
    51,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        51,
        51,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 7', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"Language-Team: Chinese <zh-l10n@lists.linux.org.tw>\\n"\n',
    56,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        56,
        56,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 8', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"Language: zh_TW\\n"\n',
    20,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        20,
        20,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 9', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"MIME-Version: 1.0\\n"\n',
    22,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        22,
        22,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 10', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"Content-Type: text/plain; charset=UTF-8\\n"\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        44,
        44,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 11', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"Content-Transfer-Encoding: 8bit\\n"\n',
    36,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        36,
        36,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 12', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"Plural-Forms: nplurals=1; plural=0;\\n"\n',
    40,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        40,
        40,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 13', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '"X-Generator: Lokalize 19.08.1\\n"\n',
    34,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        34,
        34,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 14', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '#. (itstool) path: component/name\n',
    34,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        34,
        34,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 15', () => {
  const { match, indices, regex } = execute(
    '^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$',
    '#: org.kde.ffmpegthumbs.metainfo.xml:9\n',
    39,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        39,
        39,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 16', () => {
  const { match, indices, regex } = execute(
    '^(?!")',
    'msgid "FFmpeg Thumbnailer"\n',
    26,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!")"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        27,
        27,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 17', () => {
  const { match, indices, regex } = execute(
    '^(?!")',
    'msgstr "FFmpeg 縮圖產生工具"\n',
    22,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!")"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        23,
        23,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 18', () => {
  const { match, indices, regex } = execute(
    '^(?!")',
    'msgid "Video thumbnail generator using FFmpeg"\n',
    46,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!")"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        47,
        47,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 19', () => {
  const { match, indices, regex } = execute(
    '^(?!")',
    'msgstr "使用 FFmpeg 的影片縮圖產生工具"\n',
    28,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!")"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        29,
        29,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 20', () => {
  const { match, indices, regex } = execute(
    '^(?!")',
    'msgid ""\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!")"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        9,
        9,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 21', () => {
  const { match, indices, regex } = execute(
    '^(?!")',
    '"FFmpeg Thumbnailer is a video thumbnail generator for KDE file managers."\n',
    74,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!")"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        75,
        75,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 22', () => {
  const { match, indices, regex } = execute(
    '^(?!")',
    'msgstr "FFmpeg 縮圖產生工具是用於 KDE 檔案管理器的影片縮圖產生器。"\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!")"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        45,
        45,
      ],
    ]
  `)
  expect(match).toBe(null)
})
