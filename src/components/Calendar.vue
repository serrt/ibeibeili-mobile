<template>
  <div id="calendar">
    <div class="month">
      <ul>
        <li class="arrow" @click="pickPre(currentYear,currentMonth)">&lt;&lt;</li>
        <li class="year-month" @click="pickYear(currentYear,currentMonth)">
          <span class="choose-year">{{ currentYear }}</span>
          <span class="choose-month">{{ currentMonth }}月</span>
        </li>
        <li class="arrow" @click="pickNext(currentYear,currentMonth)">&gt;&gt;</li>
      </ul>
    </div>
    <ul class="weekdays">
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
      <li>日</li>
    </ul>
    <ul class="days">
      <li @click="pick(day)" v-for="day in days" v-bind:class="day.class">
        {{ day.getDate() }}
      </li>
    </ul>
  </div>
</template>

<script>
import {Indicator} from 'mint-ui'

export default {
  components: {Indicator},
  data: function () {
    return {
      currentDay: 1,
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      currentWeek: new Date().getDay(),
      days: []
    }
  },
  props: ['list'],
  mounted () {
    // let self = this
    // let timer = setInterval(function () {
    //   if (self.list) {
    //     clearInterval(timer)
    //     self.initData(self.formatDate(self.currentYear, self.currentMonth, self.currentDay))
    //     Indicator.close()
    //   }
    // }, 50)
  },
  computed: {
  },
  methods: {
    getClass: function (day) {
      let now = new Date()
      let classes = {
        'other-month': day.getMonth() + 1 !== this.currentMonth,
        'active': now.toDateString() === day.toDateString(),
        'sign': false,
        'bu': false
      }
      if (day.getMonth() === now.getMonth() && now.getFullYear() === day.getFullYear()) {
        for (let i in this.list) {
          if (this.list[i] === day.getDate()) {
            classes.sign = true
            break
          } else if (day.getDate() < this.list[i] && !classes.sign) {
            classes.bu = true
          }
        }
      }
      return classes
    },
    initData: function (cur) {
      let date
      if (cur) {
        date = new Date(cur)
      } else {
        date = new Date()
      }
      this.currentDay = date.getDate()
      this.currentYear = date.getFullYear()
      this.currentMonth = date.getMonth() + 1
      this.currentWeek = date.getDay()
      if (this.currentWeek === 0) {
        this.currentWeek = 7
      }
      let str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay)
      this.days.length = 0
      for (let i = this.currentWeek - 1; i >= 0; i--) {
        let d = new Date(str)
        d.setDate(d.getDate() - i)
        d.class = this.getClass(d)
        this.days.push(d)
      }
      for (let i = 1; i <= 42 - this.currentWeek; i++) {
        let d = new Date(str)
        d.setDate(d.getDate() + i)
        d.class = this.getClass(d)
        this.days.push(d)
      }
    },
    pick: function (day) {
      this.$emit('pick', day)
    },
    pickPre: function (year, month) {
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(0)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    pickNext: function (year, month) {
      let d = new Date(this.formatDate(year, month, 1))
      d.setDate(35)
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    pickYear: function (year, month) {
    },
    formatDate: function (year, month, day) {
      let y = year
      let m = month
      if (m < 10) m = '0' + m
      let d = day
      if (d < 10) d = '0' + d
      return y + '-' + m + '-' + d
    }
  },
  watch: {
    list: function (value) {
      let now = new Date()
      this.initData(this.formatDate(now.getFullYear(), now.getMonth() + 1, 1))
      Indicator.close()
    }
  }
}
</script>
<style scoped>
  #calendar{
    margin: 10px auto;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
  }
  #calendar li:active {
    background-color: rgb(192,192,192);
  }
  .month {
    width: 100%;
  }

  .month ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  .year-month {
    text-align: center;
    line-height: 27px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .year-month {
  }

  .choose-year {
  }

  .choose-month {
  }

  .arrow {
    padding: 0 15px;
  }


  .month ul li {
    color: #000;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .weekdays {
    margin: 0;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    color: #000;
    justify-content: space-around;
  }

  .weekdays li {
    display: inline-block;
    width: 13.6%;
    text-align: center;
  }

  .days {
    padding: 0;
    background: #FFFFFF;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .days li {
    list-style-type: none;
    display: inline-block;
    width: 13%;
    text-align: center;
    padding: 10px 0;
    margin: 1px;
    font-size: 1rem;
    color: #000;
  }

  .days li.active {
    color: red;
  }
  .days li.sign {
    background-color: rgb(251, 189, 80);
    background-image: url(../../static/images/sign/sign-ok.png);
    background-size: 20px 20px;
    background-position: right bottom;
    background-repeat: no-repeat;
  }
  .days li.bu {
    background-color: rgb(255, 255, 255);
    background-image: url(../../static/images/sign/sign-retroactive.png);
    background-size: 20px 20px;
    background-position: right bottom;
    background-repeat: no-repeat;
  }

  .days li.other-month {
    color: gainsboro;
  }

</style>