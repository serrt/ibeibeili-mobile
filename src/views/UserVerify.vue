<template>
  <div>
    <header-top :title="title"></header-top>
    <!-- 实名认证 -->
    <div class="container" v-show="page === 'name'">
      <div class="certification">
        <div class="current-steps">
          <img src="../../static/images/certification-step1.png">
        </div>
        <p class="tips">注意：请如实填写您的信息，实名认证一旦通过，此信息将不能修改!</p>
        <div class="reg-input user-inputs">
          <ul>
            <li>
              <div class="input-box">
                <label for="real-name"><i class="iconfont icon-yonghu"></i></label>
                <input type="text" name="real-name" v-model="name_verify.name" placeholder="请输入真实姓名">
              </div>
              <div class="tip-box" v-show="name_valid.error">{{name_valid.msg}}</div>
            </li>
            <li>
              <div class="input-box">
                <label for="idcard"><i class="iconfont icon-shenfen"></i></label>
                <input type="text" name="idcard" v-model="name_verify.id_card" placeholder="请输入身份证号码">
              </div>
              <div class="tip-box" v-show="idcard_valid.error">{{idcard_valid.msg}}</div>
            </li>
          </ul>
        </div>
        <button type="button" class="btn next-step" v-bind:class="{'inactive': name_verify_status}" v-on:click="nameVerify()">下一步</button>
      </div>
    </div>
    <!-- 绑定银行卡 -->
    <div class="container" v-show="page === 'card'">
      <div class="container certification-step2">
        <div class='certification '>
          <div class="current-steps">
            <img src="../../static/images/certification-step2.png">
          </div>
          <p class="tips">
            注意：银行卡开户信息必须和实名认证信息一致才能通过验证！
          </p>
        </div>
      </div>

      <!-- 提示信息 -->
      <div class="container error-box flex-middle" v-show="card_error.error">
        <div class="error-content">{{card_error.msg}}</div>
      </div>

      <div class="bind-bank full-container">
        <ul>
          <li class="container">
            <div class="user-chose chose-bank" v-on:click="toggleBank()">
              <span class="user-chose-result">{{selected_bank.name}}</span>
              <span class="more"><i class="iconfont icon-unie61f"></i></span>
            </div>
            <div class="list bank-list" v-show="open_bank">
              <dl>
                <dd class="Card-Number" v-for="item in bank_list" v-on:click="selectBank(item)">
                  <div class="bank" v-bind:class="[item.code]">{{item.code}}</div>
                  <div class="bankDetails">
                    <p class="bankname">{{item.name}}</p>
                    <p class="requirement">银行限额</p>
                  </div>    
                </dd>
              </dl>
            </div>
          </li>
          <li class="container">
            <div class="user-chose chose-province" v-on:click="toggleProvince()">
              <span class="user-chose-result">{{card_info.province}}</span>
              <span class="more"><i class="iconfont icon-unie61f"></i></span>
            </div>
            <div class="list province-list" v-show="this.open_province">
              <dl>
                <dd v-for="item in province" v-on:click="selectProvince(item)">{{item}}</dd>
              </dl>
            </div>
          </li>
          <li class="container">
            <div class="user-chose chose-city" v-on:click="toggleCity()">
              <span class="user-chose-result">{{card_info.city}}</span>
              <span class="more"><i class="iconfont icon-unie61f"></i></span>
            </div>
            <div class="list city-list" v-show="open_city">
              <dl>
                <dd v-for="item in city" v-on:click="selectCity(item)">{{item}}</dd>
              </dl>
            </div>
          </li>
          <li class="container">
            <div class="user-chose banknum">
              <input type="text" name="bank_card" v-model="card_info.bank_card" placeholder="请输入开户行卡号"/>
            </div>
          </li>
          <li class="container">
            <div class="user-chose phone">
              <input type="number" name="phone" v-model="card_info.phone" placeholder="请输入预留手机号"/>
            </div>
          </li>
          <li class="container">
            <div class="user-chose verify-code">
              <input type="text" name="bank_code" v-model="card_info.code" placeholder="请输入验证码">
              <button type="button" class="get-code" v-on:click="getCode()">{{code_btn.click?code_btn.time+code_btn.msg2:code_btn.msg1}}</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="container certification-next-step">
        <button type="button" class="btn next-step" v-bind:class="{'inactive': card_verify_status}" v-on:click="cardVerify()">下一步</button>
      </div>
    </div>
    <!-- 设置支付密码 -->
    <div class="container" v-show="page === 'pay'">
      <div class='certification '>
        <div class="current-steps">
          <img src="../../static/images/certification-step3.png">
        </div>
        <p class="tips">
          注意：为了您的账户安全，请设置支付密码！
        </p>
        <router-link class="btn set-code" :to="{name: 'user-edit-paypwd'}">设置支付密码</router-link>
        <p class="guard">倍倍利联手新浪支付全力保障您的资金安全</p>
        <div class='BBL-xinlang'></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import City from '../../static/city.js'
import { Indicator, MessageBox, Toast } from 'mint-ui'

export default {
  components: {HeaderTop, City, Indicator, MessageBox, Toast},
  data: function () {
    return {
      user_info: this.$store.getters.user,
      page: 'name',
      name_verify: {name: '', id_card: ''},
      name_valid: {error: true, msg: ''},
      idcard_valid: {error: true, msg: ''},
      bank_list: [],
      selected_bank: {code: '', name: '请选择银行'},
      open_bank: false,
      province: [],
      open_province: false,
      open_city: false,
      card_info: {bank_card: '', bank_code: '', phone: '', code: '', province: '请选择银行省份', city: '请选择银行城市'},
      code_btn: {click: false, msg1: '获取验证码', msg2: '秒后点击重新发送', time: 0, timer: null},
      card_error: {error: false, msg: ''}
    }
  },
  mounted () {
    if (this.user_info.name_verified === 0) {
      this.page = 'name'
    } else if (this.user_info.bank_card_id === null) {
      this.page = 'card'
    } else if (this.user_info.is_set_pay_password === 0) {
      this.page = 'pay'
    }
    if (this.user_info.name_verified === 1 && this.user_info.bank_card_id !== null && this.user_info.is_set_pay_password === 1) {
      MessageBox('你已经完成认证')
      this.$router.back()
    }
    for (let i in City.china) {
      this.province.push(i)
    }
    this.$http.get('codeList/bank_code').then((response) => {
      this.bank_list = response.data.data
    })
  },
  computed: {
    title: function () {
      if (this.page === 'card') {
        return '绑定银行卡'
      } else if (this.page === 'pay') {
        return '设置支付密码'
      } else {
        return '实名认证'
      }
    },
    name_verify_status: function () {
      return (this.name_valid.error || this.idcard_valid.error)
    },
    city: function () {
      return City.china[this.card_info.province]
    },
    card_verify_status: function () {
      let error = false
      for (let i in this.card_info) {
        if (this.card_info[i] === '') {
          error = true
          break
        }
      }
      return (this.selected_bank.code === '' || error)
    }
  },
  methods: {
    nameVerify: function () {
      let data = this.name_verify
      if (!this.name_verify_status) {
        Indicator.open()
        this.$http.post('user/setRealname', data).then((response) => {
          Indicator.close()
          if (response.data.status === 0) {
            this.$store.dispatch('user', response.data.user)
            this.page = 'card'
          } else {
            this.idcard_valid = {error: true, msg: response.data.msg}
          }
        })
      }
    },
    cardVerify: function () {
      let data = this.card_info
      if (!this.card_verify_status) {
        Indicator.open()
        this.$http.post('user/bankCard', data).then((response) => {
          Indicator.close()
          if (response.data.status === 0) {
            this.$store.dispatch('user', response.data.user)
            this.page = 'pay'
          } else {
            MessageBox.alert(response.data.msg, '提示')
          }
        })
      }
    },
    toggleBank: function () {
      this.open_bank = !this.open_bank
    },
    selectBank: function (item) {
      this.selected_bank = item
      this.card_info.bank_code = item.code
      this.open_bank = false
    },
    toggleProvince: function () {
      this.open_province = !this.open_province
    },
    selectProvince: function (item) {
      this.card_info.province = item
      this.open_province = false
    },
    toggleCity: function () {
      this.open_city = !this.open_city
    },
    selectCity: function (item) {
      this.card_info.city = item
      this.open_city = false
    },
    getCode: function () {
      if (this.card_info.phone === '') {
        MessageBox.alert('请输入预留手机号')
        return false
      }
      if (!this.code_btn.click) {
        this.code_btn.click = true
        this.code_btn.time = 10
        let self = this
        if (this.code_btn.timer) {
          clearInterval(this.code_btn.timer)
        }
        this.$http.post('user/bankCardPhoneCode', this.card_info).then((response) => {
          if (response.data.status !== 0) {
            MessageBox.alert(response.data.msg, '提示')
          }
        })
        this.code_btn.timer = setInterval(function () {
          self.code_btn.time --
          if (self.code_btn.time === 0) {
            self.code_btn.click = false
          }
        }, 1000)
      }
    }
  },
  watch: {
    'name_verify.name': function (value) {
      if (value === '') {
        this.name_valid = {error: true, msg: '请输入真实姓名'}
      } else {
        this.name_valid = {error: false, msg: ''}
      }
    },
    'name_verify.id_card': function (value) {
      if (value === '') {
        this.idcard_valid = {error: true, msg: '请输入身份证号码'}
      } else {
        this.idcard_valid = {error: false, msg: ''}
      }
    },
    'card_info.province': function () {
      this.card_info.city = '请选择银行城市'
    }
  }
}
</script>
<style scoped>
.bind-bank ul li .get-code{
  border: none;
  background-color: transparent;
}
</style>