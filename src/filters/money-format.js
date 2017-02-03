export default function (value) {
  if (!value) {
    return 0
  }
  let str = parseFloat(value / 10000).toFixed(2)
  if (str >= 1) {
    str = str + '万'
  } else {
    str = value
  }
  return str
}
