export default function (value) {
  let str = ''
  switch (value) {
    case 'prepare':
      str = '准备中'
      break
    case 'full':
      str = '满标'
      break
    case 'payment':
      str = '正在还款'
      break
    case 'rush':
      str = '立即购买'
      break
    case 'finish':
      str = '还款完成'
      break
    default:
      str = value
  }
  return str
}
