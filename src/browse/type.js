/**
  * 获取浏览器内核
  * @return Object
  */
const $body = document.body || document.documentElement
export function browse () {
  let result = {};
  ['webkit', 'khtml', 'moz', 'ms', 'o'].forEach((core) => {
    result['-' + core] = !!$body[core + 'MatchesSelector']
  })
  return result
}
