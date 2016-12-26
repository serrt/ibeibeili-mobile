<template>
  <div>
    <header-top :title="title"></header-top>
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
                <input type="text" name="idcard" v-model="name_verify.idcard" placeholder="请输入身份证号码">
              </div>
              <div class="tip-box" v-show="idcard_valid.error">{{idcard_valid.msg}}</div>
            </li>
          </ul>
        </div>
        <button type="button" class="btn next-step" v-bind:class="{'inactive': name_verify_status}" v-on:click="nameVerify()">下一步</button>
      </div>
    </div>
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
      <div class="container error-box flex-middle">
        <div class="error-content"></div>
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
                    <p class="requirement">{{item.description}}</p>
                  </div>    
                </dd>
              </dl>
            </div>
          </li>
          <li class="container">
            <div class="user-chose chose-province">
              <span class="user-chose-result">请选择银行省份</span>
              <span class="more"><i class="iconfont icon-unie61f"></i></span>
            </div>
            <div class="list province-list">
              <dl>
                <dd v-for="item in city">{{item}}</dd>
              </dl>
            </div>
          </li>
          <li class="container">
            <div class="user-chose chose-city">
              <span class="user-chose-result">请选择银行城市</span>
              <span class="more"><i class="iconfont icon-unie61f"></i></span>
            </div>
            <div class='list city-list hide'>
              <dl>
                <dd>北京</dd>
                <dd>北京</dd>
                <dd>北京</dd>
                <dd>北京</dd>
              </dl>
            </div>
          </li>
          <li class="container">
            <div class="user-chose banknum">
              <input type="text" name="" placeholder="请输入开户行卡号">
            </div>
          </li>
          <li class="container">
            <div class="user-chose phone">
              <input type="text" name="" placeholder="请输入预留手机号">
            </div>
          </li>
          <li class="container">
            <div class="user-chose verify-code">
              <input type="text" name="" placeholder="请输入验证码">
              <span class="get-code">
                获取验证码
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div class="container certification-next-step">
        <a class="btn next-step">下一步</a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import City from '../../static/city.js'

export default {
  components: {HeaderTop, City},
  data: function () {
    return {
      title: '实名认证',
      user_info: {user_id: 1, name_verified: 0, bank_card_id: null, is_set_pay_password: 0},
      page: 'card',
      name_verify: {name: '', idcard: ''},
      name_valid: {error: true, msg: ''},
      idcard_valid: {error: true, msg: ''},
      bank_list: [
        {code: 'GDB', name: '广东发展银行', description: '最高单笔10万，单日50万，单月限额50万'},
        {code: 'ICBC', name: '工商银行', description: '最高单笔10万，单日50万，单月限额50万'},
        {code: 'SZPAB', name: '平安银行', description: '最高单笔10万，单日50万，单月限额50万'}
      ],
      selected_bank: {code: '', name: '请选择银行'},
      open_bank: false,
      city: City
    }
  },
  mounted () {
    // for (let i in this.city) {
    //   console.log(i)
    // }
  },
  computed: {
    name_verify_status: function () {
      return (this.name_valid.error || this.idcard_valid.error)
    }
  },
  methods: {
    nameVerify: function () {
      let data = this.name_verify
      if (!this.name_verify_status) {
        console.log(data)
        this.page = 'card'
      }
    },
    toggleBank: function () {
      this.open_bank = !this.open_bank
    },
    selectBank: function (item) {
      this.selected_bank = item
      this.open_bank = false
    }
  },
  watch: {
    page: function (value) {
      if (value === 'card') {
        this.title = '绑定银行卡'
      } else if (value === 'pay') {
        this.title = '设置支付密码'
      } else {
        this.title = '实名认证'
      }
    },
    'name_verify.name': function (value) {
      if (value === '') {
        this.name_valid = {error: true, msg: '请输入真实姓名'}
      } else {
        this.name_valid = {error: false, msg: ''}
      }
    },
    'name_verify.idcard': function (value) {
      if (value === '') {
        this.idcard_valid = {error: true, msg: '请输入身份证号码'}
      } else {
        this.idcard_valid = {error: false, msg: ''}
      }
    }
  }
}
</script>
<style scoped>
</style>