<template>
  <div>
  <div class="index-datas full-container">
      <div class="datas full-container">
        <ul>
          <li>
            <h5>累积交易额</h5>
            <p>{{money.financedMoney}} 元</p>
            <div class="underline"></div>
          </li>
          <li>
            <h5>累积赚取收益</h5>
            <p>{{money.profitMoney}} 元</p>
            <div class="underline"></div>
          </li>
          <li>
            <h5>风险备付金</h5>
            <p>{{money.planMoney}} 元</p>
            <div class="underline"></div>
          </li>
        </ul>
        <button type="button" class="close-datas" v-on:click="back"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  components: {Indicator},
  data: function () {
    return {
      title: '平台交易详细',
      money: {financedMoney: 0, profitMoney: 0, planMoney: 0}
    }
  },
  filter: {
    moneyFormat: function (number, options) {
      console.log(number)
      if (typeof options === 'undefined') {
        options = {}
      }
      let precision = options.precision || 2
      let unit = options.unit || ''
      let separator = options.separator || '.'
      let delimiter = options.delimiter || ','
      let format = options.format || '%u%n'
      let negativeFormat = options.negativeFormat || '-%u%n'
      if (typeof number === 'string') {
        number = number.replace(/\$/g, '')
      }
      number = isNaN(number) || number === '' || number === null ? 0.0 : number
      if (number < 0) {
        format = negativeFormat
        number = Math.abs(number)
      }
      let numberStr = parseFloat(number).toFixed(precision).toString()
      let numberFormatted = new Array(numberStr.slice(-1 * precision))
      numberFormatted.unshift(separator)
      numberStr = numberStr.substring(0, numberStr.length - (precision + 1))

      while (numberStr.length > 3) {
        numberFormatted.unshift(numberStr.slice(-3))
        numberFormatted.unshift(delimiter)
        numberStr = numberStr.substring(0, numberStr.length - 3)
      }
      numberFormatted.unshift(numberStr)

      return format.replace(/%u/g, unit).replace(/%n/g, numberFormatted.join(''))
    }
  },
  mounted () {
    if (this.$store.getters.financedMoney && this.$store.getters.profitMoney && this.$store.getters.planMoney) {
      this.money = this.$store.getters.platformMoney
    } else {
      Indicator.open()
      this.$http.get('platformMoney').then((response) => {
        this.money = response.data
        this.$store.dispatch('platformMoney', response.data)
        Indicator.close()
      })
    }
  },
  computed: {
  },
  methods: {
    back: function () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.close-datas{
  background-color: transparent;
}
</style>