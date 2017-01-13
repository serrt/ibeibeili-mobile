<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="full-container wallet">
      <div class="chart full-container">
        <canvas id="chart"></canvas>
        <div class="chart-intro">
          <div class="intro">
            <div>持有总资产(元)</div>
            <span class="all-money">{{account.sum}}</span>
          </div>
        </div>
      </div>
      <div class="item-list">
        <ul class="container">
          <li>
            <div class="chart-item last"> 
              账户余额
              <span class="fr">
                <i class="iconfont icon-renminbi"></i>{{account.balance}}
              </span>
            </div>
          </li>
          <li>
            <div class="chart-item capital" > 
               待收本金
              <span class="fr">
                <i class="iconfont icon-renminbi"></i>{{account.money}}
              </span>
            </div>
          </li>
          <li>
            <div class="chart-item interest"> 
               待收收益
              <span class="fr">
                <i class="iconfont icon-renminbi"></i>{{account.profit}}
              </span>
            </div>
          </li>
          <li>
            <div class="chart-item invest-money"> 
               冻结金额
              <span class="fr">
                <i class="iconfont icon-renminbi"></i>{{account.investMoney}}
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="sum full-container flex">
        <div class="nums">
          <div>累计投资额（元）</div>
          <span>{{account.totalInvest}}</span>
        </div>
        <div class="nums">
          <div>累计收益（元）</div>
          <span>{{account.totalProfit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import { Indicator } from 'mint-ui'

export default {
  components: {HeaderTop},
  data: function () {
    return {
      title: '我的钱包',
      user_id: this.$store.getters.userId,
      account: {
        balance: 0.00,
        money: 0.00,
        profit: 0.00,
        investMoney: 0.00,
        totalInvest: 0.00,
        totalProfit: 0.00,
        sum: 0
      }
    }
  },
  mounted () {
    Indicator.open()
    this.$http.get('user/wallet').then((response) => {
      this.account = response.data.data
      for (let i in this.account) {
        this.sum += parseFloat(this.account[i])
      }
      this.drop()
      Indicator.close()
    })
  },
  computed: {
  },
  methods: {
    drop: function () {
      let canvas = document.getElementsByTagName('canvas')[0]
      canvas.width = 200
      canvas.height = 200
      let ctx = canvas.getContext('2d')
      let colors = ['#e72418', '#f18101', '#fcc800', '#dbb866']
      let moneys = [parseFloat(this.account.balance), parseFloat(this.account.money), parseFloat(this.account.profit), parseFloat(this.account.investMoney)]
      let sums = 0
      for (let i = 0; i < moneys.length; i++) {
        sums += moneys[i]
      }
      // canvas对象
      let canvasObj = {
        // canvas宽高
        width: canvas.width,
        height: canvas.height,
        // canvas圆心
        x: 100,
        y: 100,
        // 半径
        r: 99,
        // 颜色、角度
        color: [],
        angle: [],
        // 整个圆分成100份，每一份占比
        per: 2 * Math.PI,
        startAngle: -1 / 2 * Math.PI,
        endAngle: 0
      }

      canvasObj.color = colors
      if (sums === 0) {
        canvasObj.color = ['#ccc']
        canvasObj.angle = [100]
      } else {
        for (let i = 0; i < colors.length; i++) {
          canvasObj.angle[i] = (moneys[i] / sums) * canvasObj.per
        }
      }
      for (let i = 0; i < canvasObj.angle.length; i++) {
        ctx.beginPath()
        ctx.moveTo(canvasObj.x, canvasObj.y)
        ctx.arc(canvasObj.x, canvasObj.y, canvasObj.r, canvasObj.startAngle, canvasObj.startAngle + canvasObj.angle[i], false)
        ctx.strokeStyle = canvasObj.color[i]
        ctx.stroke()
        ctx.moveTo(canvasObj.x, canvasObj.y)
        ctx.fillStyle = canvasObj.color[i]
        ctx.fill()
        ctx.closePath()
        canvasObj.startAngle = canvasObj.startAngle + canvasObj.angle[i]
      }
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>