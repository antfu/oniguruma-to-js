import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?<=\\.)(?:s(?:t(?:artIndex|ri(?:ngValue|de))|i(?:ze|gn(?:BitIndex|ificand(?:Bit(?:Count|Pattern)|Width)?|alingNaN)?)|u(?:perclassMirror|mmary|bscriptBaseAddress))|h(?:eader|as(?:hValue|PointerRepresentation))|n(?:ulTerminatedUTF8|ext(?:Down|Up)|a(?:n|tiveOwner))|c(?:haracters|ount(?:TrailingZeros)?|ustom(?:Mirror|PlaygroundQuickLook)|apacity)|i(?:s(?:S(?:ign(?:Minus|aling(?:NaN)?)|ubnormal)|N(?:ormal|aN)|Canonical|Infinite|Zero|Empty|Finite|ASCII)|n(?:dices|finity)|dentity)|owner|de(?:scription|bugDescription)|u(?:n(?:safelyUnwrapped|icodeScalar(?:s)?|derestimatedCount)|tf(?:16|8(?:Start|C(?:String|odeUnitCount))?)|intValue|ppercaseString|lp(?:OfOne)?)|p(?:i|ointee)|e(?:ndIndex|lements|xponent(?:Bit(?:Count|Pattern))?)|value(?:s)?|keys|quietNaN|f(?:irst(?:ElementAddress(?:IfContiguous)?)?|loatingPointClass)|l(?:ittleEndian|owercaseString|eastNo(?:nzeroMagnitude|rmalMagnitude)|a(?:st|zy))|a(?:l(?:ignment|l(?:ocatedElementCount|Zeros))|rray(?:PropertyIsNativeTypeChecked)?)|ra(?:dix|wValue)|greatestFiniteMagnitude|m(?:in|emory|ax)|b(?:yteS(?:ize|wapped)|i(?:nade|tPattern|gEndian)|uffer|ase(?:Address)?))\\b',
    '        return rooms.count\n',
    14,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=\\.)(?:s(?:t(?:artIndex|ri(?:ngValue|de))|i(?:ze|gn(?:BitIndex|ificand(?:Bit(?:Count|Pattern)|Width)?|alingNaN)?)|u(?:perclassMirror|mmary|bscriptBaseAddress))|h(?:eader|as(?:hValue|PointerRepresentation))|n(?:ulTerminatedUTF8|ext(?:Down|Up)|a(?:n|tiveOwner))|c(?:haracters|ount(?:TrailingZeros)?|ustom(?:Mirror|PlaygroundQuickLook)|apacity)|i(?:s(?:S(?:ign(?:Minus|aling(?:NaN)?)|ubnormal)|N(?:ormal|aN)|Canonical|Infinite|Zero|Empty|Finite|ASCII)|n(?:dices|finity)|dentity)|owner|de(?:scription|bugDescription)|u(?:n(?:safelyUnwrapped|icodeScalar(?:s)?|derestimatedCount)|tf(?:16|8(?:Start|C(?:String|odeUnitCount))?)|intValue|ppercaseString|lp(?:OfOne)?)|p(?:i|ointee)|e(?:ndIndex|lements|xponent(?:Bit(?:Count|Pattern))?)|value(?:s)?|keys|quietNaN|f(?:irst(?:ElementAddress(?:IfContiguous)?)?|loatingPointClass)|l(?:ittleEndian|owercaseString|eastNo(?:nzeroMagnitude|rmalMagnitude)|a(?:st|zy))|a(?:l(?:ignment|l(?:ocatedElementCount|Zeros))|rray(?:PropertyIsNativeTypeChecked)?)|ra(?:dix|wValue)|greatestFiniteMagnitude|m(?:in|emory|ax)|b(?:yteS(?:ize|wapped)|i(?:nade|tPattern|gEndian)|uffer|ase(?:Address)?))\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        21,
        26,
      ],
    ]
  `)
  expect(indices).toMatchObject([[21, 26]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?!\\G)(?=\\{|\\bwhere\\b|;|=)|$',
    '    subscript(i: Int) -> Room {\n',
    25,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?!)(?=\\{|\\bwhere\\b|;|=)|$"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[30, 30]])
})
