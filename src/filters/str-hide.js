export default function (str, frontLen, endLen) {
  if (str === null || str.length === 0) {
    return str
  }
  str = str.toString()
  let len = str.length - frontLen - endLen
  let xing = ''
  for (let i = 0; i < len; i++) {
    xing += '*'
  }
  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen)
}
