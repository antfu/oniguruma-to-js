import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])',
    'worker_processes  5;  ## Default: 1\n',
    17,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[18, 19], [18, 19]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])',
    '  worker_connections  4096;  ## Default: 1024\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[22, 26], [22, 26]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])',
    '  log_format   main \'$remote_addr - $remote_user [$time_local]  $status \'\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[15, 19], [15, 19]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])',
    '  access_log   logs/access.log  main;\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[32, 36], [32, 36]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(on|off|true|false)(?=[\\t ;])',
    '  sendfile     on;\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(on|off|true|false)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[15, 17], [15, 17]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(on|off|true|false)(?=[\\t ;])',
    '  tcp_nopush   on;\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(on|off|true|false)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[15, 17], [15, 17]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])',
    '    listen       80;\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[17, 19], [17, 19]])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])',
    '    access_log   logs/domain1.access.log  main;\n',
    15,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[42, 46], [42, 46]])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])',
    '    listen       80;\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[17, 19], [17, 19]])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])',
    '    access_log   logs/domain2.access.log  main;\n',
    15,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[42, 46], [42, 46]])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])',
    '    listen          80;\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[20, 22], [20, 22]])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '(?<=\\G|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])',
    '    access_log      logs/big.server.access.log main;\n',
    15,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[47, 51], [47, 51]])
})
