export default function (value, project) {
  value = parseFloat(value)
  let timeNum = project.finance_time_num
  let timeCate = project.finance_time_cate
  let rate = project.rate
  if (isNaN(value)) {
    value = 0
  }
  if (value < project.finance_rule_money) {
    return 0
  }
  let dayProfit = value * rate / 100
  let money = 0
  // 天
  if (timeCate === 'd') {
    money = dayProfit / 360 * timeNum
  }
  // 月
  if (timeCate === 'm') {
    money = dayProfit / 360 * timeNum * 30
  }
  // 自然月
  if (timeCate === 'mm') {
    money = dayProfit / 12 * timeNum
  }
  return Math.floor(money * 100) / 100
}
