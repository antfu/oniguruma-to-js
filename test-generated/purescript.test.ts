import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Data.Either (Either(..))\n',
    26,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[26, 30]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Data.List (List(..), filter, (:))\n',
    22,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[22, 26]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Data.List (List(..), filter, (:))\n',
    35,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[36, 39]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Data.Maybe (Maybe(..))\n',
    24,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[24, 28]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    46,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[47, 50]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    51,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[52, 56]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    57,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[58, 61]])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    62,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[63, 67]])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    68,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[69, 73]])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'emptyDict _ = Nothing\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 13]])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'insertDict key value dict =\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[26, 27]])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  \\key\' → if key == key\'\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[2, 3]])
})

it('expected match: 12', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  \\key\' → if key == key\'\n',
    3,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 13', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  \\key\' → if key == key\'\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[17, 19]])
})

it('expected match: 14', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'myAddFast = mkFn2 \\x y → x + y\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 15', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'myAddFast = mkFn2 \\x y → x + y\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[18, 19]])
})

it('expected match: 16', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'myAddFast = mkFn2 \\x y → x + y\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[23, 24]])
})

it('expected match: 17', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'myAddFast = mkFn2 \\x y → x + y\n',
    24,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[27, 28]])
})

it('expected match: 18', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'add10 = myAdd 10\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[6, 7]])
})

it('expected match: 19', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'modulo dvr dvd = dvd `mod` dvr\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[15, 16]])
})

it('expected match: 20', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'isOdd = modulo 2\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[6, 7]])
})

it('expected match: 21', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'getAllOdds = filter (\\x -> isOdd x /= 0)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[11, 12]])
})

it('expected match: 22', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'getAllOdds = filter (\\x -> isOdd x /= 0)\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[21, 22]])
})

it('expected match: 23', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'getAllOdds = filter (\\x -> isOdd x /= 0)\n',
    26,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[35, 37]])
})

it('expected match: 24', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'regexString =\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 13]])
})

it('expected match: 25', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'censor = replace regexString "*"\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[7, 8]])
})

it('expected match: 26', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'censorAll = map censor\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 27', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'main = do\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[5, 6]])
})

it('expected match: 28', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  log     $ "myAdd: " <> (show $ myAdd 2 2)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 29', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  log     $ "myAdd: " <> (show $ myAdd 2 2)\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[22, 24]])
})

it('expected match: 30', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  log     $ "myAdd: " <> (show $ myAdd 2 2)\n',
    24,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[31, 32]])
})

it('expected match: 31', () => {
  const { indices, regex } = execute(
    '(^[ \\t]+)?(?=--+(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]))',
    '  -- notice key\' == key (\'a\' == \'a\'), so return Just 1\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 2], [0, 2]])
})

it('expected match: 32', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 33', () => {
  const { indices, regex } = execute(
    '(^[ \\t]+)?(?=--+(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]))',
    '  -- search for \'a\' in Dict and return its value\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 2], [0, 2]])
})

it('expected match: 34', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 35', () => {
  const { indices, regex } = execute(
    '(^[ \\t]+)?(?=--+(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]))',
    '  -- the \'x\' key is not in Dict, so fall back to Nothing\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 2], [0, 2]])
})

it('expected match: 36', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'x\'\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 37', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ add10 2\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 38', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ isOdd 2\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 39', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ isOdd 21\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 40', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 41', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    25,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[26, 27]])
})

it('expected match: 42', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    29,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[30, 31]])
})

it('expected match: 43', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    33,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[34, 35]])
})

it('expected match: 44', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    37,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[38, 39]])
})

it('expected match: 45', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  log $ censor "hello world"\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[6, 7]])
})

it('expected match: 46', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ censorAll ["hello", "world"]\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 47', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ runFn2 myAddFast 10 10\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 48', () => {
  const { indices, regex } = execute(
    '(^[ \\t]+)?(?=--+(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]))',
    '-- From https://github.com/adkelley/javascript-to-purescript/blob/master/tut17/src/Main.purs\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 0], [4294967295, 4294967295]])
})
