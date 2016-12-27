<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="help-center full-container">
      <div class="tabs full-container flex help-center-tabs">
        <div class="tab-option zcdl select ">
          <span></span>
          注册登录
        </div>
        <div class="tab-option cztx">
          <span></span>
          充值提现
        </div>
        <div class="tab-option tzlc">
          <span></span>
          投资理财
        </div>
        <div class="tab-option bfj">
          <span></span>
          备付金
        </div>
      </div>

      <!-- 注册登录 -->
      <div class="help-list full-container hide">
        <ul>
          <li>
            <div class="help-detail  open">
              <div class="problem">
                <span>
                  <i class="iconfont icon-xiasanjiao "></i>

                </span>
                实名登记时，如果身份证号里含有x，怎么填写？
              </div>
              <div class="answer">直接填写x，不区分大小写
              </div>
            </div>
          </li>
          <li>
            <div class="help-detail ">
              <div class="problem">
                <span>
                  <i class="iconfont icon-triangle-right-copy"></i>
                </span>
                一个手机号可以注册几个账户？
              </div>
              <div class="answer ">手机号、邮箱和客户的身份信息都具有唯一性，故<span>一个手机号只能注册绑定一个账户。</span>
              </div>
            </div>
          </li>
          <li>
            <div class="help-detail ">
              <div class="problem">
                <span>
                  <i class="iconfont icon-triangle-right-copy"></i>
                </span>
                注册时收不到验证码怎么办？
              </div>
              <div class="answer ">
                <p>1. 确认短信是否被手机软件拦截或过滤；</p>
                <p>2. 确认手机是否能正常接收短信（信号问题、欠费、停机等）；</p>
                <p>3. 短信收发过程中可能会有延时，请耐心等候；</p>
                <p>4. 如经过反复尝试还不能收取验证码，可直接联系客服为您服务。</p>
              </div>
            </div>
          </li>
          <li>
            <div class="help-detail ">
              <div class="problem">
                <span>
                  <i class="iconfont icon-triangle-right-copy"></i>
                </span>
                注册后用户名是否可以修改？
              </div>
              <div class="answer ">用户名注册成功后不可以修改，注册时请勿使用真实姓名作为用户名。
              </div>
            </div>
          </li>
          <li>
            <div class="help-detail ">
              <div class="problem">
                <span>
                  <i class="iconfont icon-triangle-right-copy"></i>
                </span>
                为什么要进行实名认证？
              </div>
              <div class="answer ">为了提高账户安全等级，保障资金的安全性和合同的有效性，客户需在首次充值前完成实名登记，倍倍利承诺会对所有客户资料严格保密。
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 充值提现 -->
      <div class="help-list full-container hide">
        <ul>
          <li>
            <div class="help-detail  open">
              <div class="problem">
                <span>
                  <i class="iconfont icon-xiasanjiao "></i>

                </span>
                注册后用户名是否可以修改？
              </div>
              <div class="answer">用户名注册成功后不可以修改，注册时请勿使用真实姓名作为用户名。
              </div>
            </div>
          </li>
          <li>
            <div class="help-detail ">
              <div class="problem">
                <span>
                  <i class="iconfont icon-triangle-right-copy"></i>
                </span>
                注册时手机收不到验证码怎么办？
              </div>
              <div class="answer ">用户名注册成功后不可以修改，注册时请勿使用真实姓名作为用户名。
              </div>
            </div>
          </li>
          <li>
            <div class="help-detail ">
              <div class="problem">
                <span>
                  <i class="iconfont icon-triangle-right-copy"></i>
                </span>
                注册时手机收不到验证码怎么办？
              </div>
              <div class="answer ">用户名注册成功后不可以修改，注册时请勿使用真实姓名作为用户名。
              </div>
            </div>
          </li>
          <li>
            <div class="help-detail ">
              <div class="problem">
                <span>
                  <i class="iconfont icon-triangle-right-copy"></i>
                </span>
                注册时手机收不到验证码怎么办？
              </div>
              <div class="answer ">用户名注册成功后不可以修改，注册时请勿使用真实姓名作为用户名。
              </div>
            </div>
          </li>
        </ul>
      </div>


      <!-- 投资理财 -->
      <div class="help-list full-container hide">
        <ul>
          <li>
            <div class="help-detail open">
              <div class="problem">
                <span>
                  <i class="iconfont icon-xiasanjiao "></i>

                </span>
                注册后用户名是否可以修改？
              </div>
              <div class="answer">用户名注册成功后不可以修改，注册时请勿使用真实姓名作为用户名。
              </div>
            </div>
          </li>
           <li>
            <div class="help-detail ">
              <div class="problem">
                <span>
                  <i class="iconfont icon-triangle-right-copy"></i>
                </span>
                注册时手机收不到验证码怎么办？
              </div>
              <div class="answer ">用户名注册成功后不可以修改，注册时请勿使用真实姓名作为用户名。
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 备付金 -->
      <div class="help-list full-container">
        <ul>
          <li>
            <div class="help-detail open">
              <div class="problem">
                <span>
                  <i class="iconfont icon-xiasanjiao"></i>
                </span>
                注册后用户名是否可以修改？
              </div>
              <div class="answer">用户名注册成功后不可以修改，注册时请勿使用真实姓名作为用户名。
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'

export default {
  components: {HeaderTop},
  data: function () {
    return {
      title: '帮助中心',
      tabTitle: [
        {id: 1, name: '关于注册', image: ''}
      ]
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>
<style scoped>
</style>