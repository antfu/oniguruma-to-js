import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'fun main(@NonNull args: Array<String>) {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 8], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4, 8]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'fun main(@NonNull args: Array<String>) {\n',
    17,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[22, 37], [29, 37], [29, 37], [35, 36]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '    println("Hello Kotlin! ${/*test*/}")\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 11], [4, 11], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '    val map = mutableMapOf("A" to "B")\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 8], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '    val map = mutableMapOf("A" to "B")\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 26], [14, 26], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '    thing.apply("random string here \\n\\t\\r")\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[9, 15], [10, 15], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '    thing.let { test: ->    }\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[9, 14], [10, 13], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '    thing.let { test: ->    }\n',
    14,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[20, 28], [27, 28], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '    val string = "${getThing()}"\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 8], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '    val string = "${getThing()}"\n',
    20,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[20, 28], [20, 28], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val items = listOf("apple", "banana", "kiwifruit")\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'val items = listOf("apple", "banana", "kiwifruit")\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 18], [12, 18], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 12', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'var x = 9\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 13', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'const val CONSTANT = 99\n',
    5,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[6, 10], [6, 9], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 14', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val activityRule = ActivityTestRule(SplashActivity::class.java)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 15', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'val activityRule = ActivityTestRule(SplashActivity::class.java)\n',
    18,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[19, 35], [19, 35], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 16', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val oneMillion = 1_000_000\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 17', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val creditCardNumber = 1234_5678_9012_3456L\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 18', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val socialSecurityNumber = 999_99_9999L\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 19', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val hexBytes = 0xFF_EC_DE_5E\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 20', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val float = 0.043_331F\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 21', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val bytes = 0b11010010_01101001_10010100_10010010\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 22', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'fun <T> foo() {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 11], [0, 3], [4, 7], [5, 6], [4294967295, 4294967295], [8, 11]])
})

it('expected match: 23', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '    val x  = Bar::class\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 8], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 24', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '    val y = hello?.test\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 8], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 25', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'suspend fun <T, U> SequenceBuilder<Int>.yieldIfOdd(x: Int) {\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 34], [8, 11], [12, 18], [16, 17], [4294967295, 4294967295], [19, 34]])
})

it('expected match: 26', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'suspend fun <T, U> SequenceBuilder<Int>.yieldIfOdd(x: Int) {\n',
    39,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[39, 50], [40, 50], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 27', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'suspend fun <T, U> SequenceBuilder<Int>.yieldIfOdd(x: Int) {\n',
    50,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[52, 57], [56, 57], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 28', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '    if (x % 2 != 0) yield(x)\n',
    18,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[20, 25], [20, 25], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 29', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val function = fun(@Inject x: Int, y: Int, lamda: (A, B) -> Unit): Int {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 30', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'val function = fun(@Inject x: Int, y: Int, lamda: (A, B) -> Unit): Int {\n',
    14,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[15, 18], [15, 18], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 31', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'val function = fun(@Inject x: Int, y: Int, lamda: (A, B) -> Unit): Int {\n',
    26,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[28, 33], [32, 33], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 32', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'val function = fun(@Inject x: Int, y: Int, lamda: (A, B) -> Unit): Int {\n',
    33,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[36, 41], [40, 41], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 33', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'val function = fun(@Inject x: Int, y: Int, lamda: (A, B) -> Unit): Int {\n',
    41,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[48, 64], [63, 64], [50, 56], [54, 55]])
})

it('expected match: 34', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'val function = fun(@Inject x: Int, y: Int, lamda: (A, B) -> Unit): Int {\n',
    64,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[65, 71], [70, 71], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 35', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '    test.test()\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 13], [9, 13], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 36', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'abstract fun onCreate(savedInstanceState: Bundle?)\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[9, 21], [9, 12], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [13, 21]])
})

it('expected match: 37', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'abstract fun onCreate(savedInstanceState: Bundle?)\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[40, 49], [48, 49], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 38', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'fun isOdd(x: Int) = x % 2 != 0\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 9], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4, 9]])
})

it('expected match: 39', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'fun isOdd(x: Int) = x % 2 != 0\n',
    9,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[11, 16], [15, 16], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 40', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'fun isOdd(s: String) = s == "brillig" || s == "slithy" || s == "tove"\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 9], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4, 9]])
})

it('expected match: 41', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'fun isOdd(s: String) = s == "brillig" || s == "slithy" || s == "tove"\n',
    9,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[11, 19], [18, 19], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 42', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val numbers = listOf(1, 2, 3)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 43', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'val numbers = listOf(1, 2, 3)\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 20], [14, 20], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 44', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'println(numbers.filter(::isOdd))\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 7], [0, 7], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 45', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'println(numbers.filter(::isOdd))\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[15, 22], [16, 22], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 46', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'fun foo(node: Node?): String? {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 7], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4, 7]])
})

it('expected match: 47', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'fun foo(node: Node?): String? {\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 19], [18, 19], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 48', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'fun foo(node: Node?): String? {\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[20, 30], [29, 30], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 49', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '    val parent = node.getParent() ?: return null\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 8], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 50', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '    val parent = node.getParent() ?: return null\n',
    16,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[21, 31], [22, 31], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 51', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'interface Greetable {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 20], [0, 9], [10, 19], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 52', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    '    fun greet()\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 13], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [8, 13]])
})

it('expected match: 53', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'open class Greeter: Greetable {\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[5, 18], [5, 10], [11, 18], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 54', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'open class Greeter: Greetable {\n',
    18,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[18, 30], [29, 30], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 55', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '        private const val GREETING = "Hello, World!"\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[22, 26], [22, 25], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 56', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    '    override fun greet() {\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[13, 22], [13, 16], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [17, 22]])
})

it('expected match: 57', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '        println(GREETING)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 15], [8, 15], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 58', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'expect class Foo(bar: String) {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[7, 16], [7, 12], [13, 16], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 59', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'expect class Foo(bar: String) {\n',
    16,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[20, 28], [27, 28], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 60', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    '    fun frob() \n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 12], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [8, 12]])
})

it('expected match: 61', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'actual class Foo actual constructor(val bar: String) {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[7, 17], [7, 12], [13, 16], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 62', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'actual class Foo actual constructor(val bar: String) {\n',
    17,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[24, 35], [24, 35], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 63', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'actual class Foo actual constructor(val bar: String) {\n',
    35,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[36, 40], [36, 39], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 64', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'actual class Foo actual constructor(val bar: String) {\n',
    40,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[43, 51], [50, 51], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 65', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    '    actual fun frob() {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[11, 19], [11, 14], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [15, 19]])
})

it('expected match: 66', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '        println("Frobbing the $bar")\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 15], [8, 15], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 67', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'expect fun formatString(source: String, vararg args: Any): String\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[7, 23], [7, 10], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [11, 23]])
})

it('expected match: 68', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'expect fun formatString(source: String, vararg args: Any): String\n',
    23,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[30, 38], [37, 38], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 69', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'expect fun formatString(source: String, vararg args: Any): String\n',
    46,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[51, 56], [55, 56], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 70', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'expect fun formatString(source: String, vararg args: Any): String\n',
    56,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[57, 66], [65, 66], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 71', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'expect annotation class Test\n',
    17,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[18, 29], [18, 23], [24, 28], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 72', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    'actual fun formatString(source: String, vararg args: Any) = String.format(source, args)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[7, 23], [7, 10], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [11, 23]])
})

it('expected match: 73', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'actual fun formatString(source: String, vararg args: Any) = String.format(source, args)\n',
    23,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[30, 38], [37, 38], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 74', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'actual fun formatString(source: String, vararg args: Any) = String.format(source, args)\n',
    46,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[51, 56], [55, 56], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 75', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'actual fun formatString(source: String, vararg args: Any) = String.format(source, args)\n',
    59,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[66, 73], [67, 73], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 76', () => {
  const { indices, regex } = execute(
    '\\b(typealias)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'actual typealias Test = org.junit.Test\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[7, 22], [7, 16], [17, 21], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 77', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'sealed class Expr\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[7, 18], [7, 12], [13, 17], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 78', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'data class Const(val number: Double) : Expr()\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[5, 16], [5, 10], [11, 16], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 79', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'data class Const(val number: Double) : Expr()\n',
    16,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[17, 21], [17, 20], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 80', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'data class Const(val number: Double) : Expr()\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[27, 35], [34, 35], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 81', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'data class Const(val number: Double) : Expr()\n',
    35,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[37, 43], [42, 43], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 82', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'data class Sum(val e1: Expr, val e2: Expr) : Expr()\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[5, 14], [5, 10], [11, 14], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 83', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'data class Sum(val e1: Expr, val e2: Expr) : Expr()\n',
    14,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[15, 19], [15, 18], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 84', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'data class Sum(val e1: Expr, val e2: Expr) : Expr()\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[21, 27], [26, 27], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 85', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'data class Sum(val e1: Expr, val e2: Expr) : Expr()\n',
    27,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[29, 33], [29, 32], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 86', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'data class Sum(val e1: Expr, val e2: Expr) : Expr()\n',
    33,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[35, 41], [40, 41], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 87', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'data class Sum(val e1: Expr, val e2: Expr) : Expr()\n',
    41,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[43, 49], [48, 49], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 88', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'object NotANumber : Expr()\n',
    17,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[18, 24], [23, 24], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 89', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'private sealed class InjectedClass<T, U> @Inject constructor(\n',
    14,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[15, 40], [15, 20], [21, 34], [34, 40], [38, 39]])
})

it('expected match: 90', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'private sealed class InjectedClass<T, U> @Inject constructor(\n',
    48,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[49, 60], [49, 60], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 91', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '    val test: Int = 50, \n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 8], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 92', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '    val test: Int = 50, \n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 18], [17, 18], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 93', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '    var anotherVar: String = "hello world"\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 8], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 94', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '    var anotherVar: String = "hello world"\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[18, 27], [26, 27], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 95', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    ') : SomeSuperClass(test, anotherVar) {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[2, 37], [36, 37], [18, 36], [34, 35]])
})

it('expected match: 96', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    '    constructor(param1: String, param2: Int): this(param1, param2) {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 15], [4, 15], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 97', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '    constructor(param1: String, param2: Int): this(param1, param2) {\n',
    15,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[22, 30], [29, 30], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 98', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '    constructor(param1: String, param2: Int): this(param1, param2) {\n',
    30,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[38, 43], [42, 43], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 99', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '    constructor(param1: String, param2: Int): this(param1, param2) {\n',
    43,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[44, 67], [66, 67], [50, 66], [64, 65]])
})

it('expected match: 100', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'annotation class Suspendable\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[11, 29], [11, 16], [17, 28], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 101', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'val f = @Suspendable { Fiber.sleep(10) }\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 4], [0, 3], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 102', () => {
  const { indices, regex } = execute(
    '\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])',
    'val f = @Suspendable { Fiber.sleep(10) }\n',
    20,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[28, 34], [29, 34], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 103', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'private data class Foo(\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[13, 22], [13, 18], [19, 22], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 104', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '    val variables: Map<String, String>\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 8], [4, 7], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 105', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '    val variables: Map<String, String>\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[17, 39], [38, 39], [22, 38], [36, 37]])
})

it('expected match: 106', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'data class Response(@SerializedName("param1") val param1: String,\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[5, 19], [5, 10], [11, 19], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 107', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'data class Response(@SerializedName("param1") val param1: String,\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[46, 50], [46, 49], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 108', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'data class Response(@SerializedName("param1") val param1: String,\n',
    50,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[56, 64], [63, 64], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 109', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '                    @SerializedName("param2") val param2: String,\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[46, 50], [46, 49], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 110', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '                    @SerializedName("param2") val param2: String,\n',
    50,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[56, 64], [63, 64], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 111', () => {
  const { indices, regex } = execute(
    '\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '                    @SerializedName("param3") val param3: String) {\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[46, 50], [46, 49], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 112', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '                    @SerializedName("param3") val param3: String) {\n',
    50,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[56, 64], [63, 64], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 113', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'object DefaultListener : MouseAdapter() {\n',
    22,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[23, 37], [36, 37], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 114', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    '    override fun mouseClicked(e: MouseEvent) { }\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[13, 29], [13, 16], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [17, 29]])
})

it('expected match: 115', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '    override fun mouseClicked(e: MouseEvent) { }\n',
    29,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[31, 43], [42, 43], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 116', () => {
  const { indices, regex } = execute(
    '\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?',
    '    override fun mouseEntered(e: MouseEvent) { }\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[13, 29], [13, 16], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [17, 29]])
})

it('expected match: 117', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    '    override fun mouseEntered(e: MouseEvent) { }\n',
    29,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[31, 43], [42, 43], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 118', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'class Feature : Node("Title", "Content", "Description") {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 14], [0, 5], [6, 13], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 119', () => {
  const { indices, regex } = execute(
    '(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()"\']|\\g<GROUP>)+[)>]))+',
    'class Feature : Node("Title", "Content", "Description") {\n',
    14,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 20], [19, 20], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 120', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    'class Outer {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 12], [0, 5], [6, 11], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 121', () => {
  const { indices, regex } = execute(
    '\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?',
    '    inner class Inner {}\n',
    9,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 22], [10, 15], [16, 21], [4294967295, 4294967295], [4294967295, 4294967295]])
})
