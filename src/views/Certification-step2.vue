<template>
  <div>
    <common-header title="绑定银行卡"></common-header>

    <div class="container">
      <div class='certification '>
        <div class="current-steps">
          <img src="../assets/img/certification-step2.png">
        </div>
        <p class="tips">
          注意：银行卡开户信息必须和实名认证信息一致才能通过验证！
        </p>
      </div>
    </div>

    <div class="bind-bank full-container">
      <ul>
        <li class="container">
          <div class="user-chose chose-bank">
            请选择银行
            <span class="more"><i class="iconfont icon-unie61f"></i></span>
          </div>
          <div class="list bank-list hide">
            <dl>
              <dd class="Card-Number">
                <div class="bank BOC">BOC</div>
                <div class="bankDetails">
                  <p class="bankname">中国银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>    
              </dd>
              <dd class="Card-Number">
                <div class="bank ABC">ABC</div>
                <div class="bankDetails">
                  <p class="bankname">中国农业银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank CCB">CCB</div>
                <div class="bankDetails">
                  <p class="bankname">中国建设银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
             </dd>
              <dd class="Card-Number">
                <div class="bank ICBC">ICBC</div>
                <div class="bankDetails">
                  <p class="bankname">中国工商银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank CITIC">CITIC</div>
                <div class="bankDetails">
                  <p class="bankname">中信银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank CMBC">CMBC</div>
                <div class="bankDetails ">
                  <p class="bankname">中国民生银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank GDB ">GDB</div>
                <div class="bankDetails ">
                  <p class="bankname">广发银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank CIB ">CIB</div>
                <div class="bankDetails ">
                  <p class="bankname">兴业银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank CEB ">CEB</div>
                <div class="bankDetails ">
                  <p class="bankname">中国光大银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank BOS ">BOS</div>
                <div class="bankDetails ">
                  <p class="bankname">上海银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank PSBC ">PSBC</div>
                <div class="bankDetails ">
                  <p class="bankname">中国邮政储蓄银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank HXB ">HXB</div>
                <div class="bankDetails ">
                  <p class="bankname">华夏银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
             </dd>
              <dd class="Card-Number">
                <div class="bank SZPAB ">SZPAB</div>
                <div class="bankDetails ">
                  <p class="bankname">平安银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank SPDB ">SPDB</div>
                <div class="bankDetails ">
                  <p class="bankname">上海浦东发展银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank CMB ">CMB</div>
                <div class="bankDetails ">
                  <p class="bankname">招商银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank BCCB ">BCCB</div>
                <div class="bankDetails ">
                  <p class="bankname">北京银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank EGBANK ">EGBANK</div>
                <div class="bankDetails ">
                  <p class="bankname">恒丰银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank CZB ">CZB</div>
                <div class="bankDetails ">
                  <p class="bankname">浙商银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank CBHB ">CBHB</div>
                <div class="bankDetails ">
                  <p class="bankname">渤海银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank SHRCB ">SHRCB</div>
                <div class="bankDetails ">
                  <p class="bankname">上海农商银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
              <dd class="Card-Number">
                <div class="bank COMM ">COMM</div>
                <div class="bankDetails ">
                  <p class="bankname">交通银行</p>
                  <p class="requirement"> 最高单笔10万，单日50万，单月限额50万</p>
                </div>
              </dd>
            </dl>
          </div>
        </li>
        <li class="container">
          <div class="user-chose chose-province">
            请选择银行省份
            <span class="more"><i class="iconfont icon-unie61f"></i></span>
          </div>
          <div class='list province-list hide'>
            <dl>
              <dd>北京市</dd>
              <dd>北京市</dd>
              <dd>北京市</dd>
              <dd>北京市</dd>
            </dl>
          </div>
        </li>
        <li class="container">
          <div class="user-chose chose-city">
            请选择银行城市
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
              <a class="btn">获取验证码</a>
            </span>
          </div>
        </li>
      </ul>

      <a class="btn next-step">下一步</a>
    </div>
    


  </div>
</template>

<style lang="scss">
  @import "../assets/scss/_variables";
  @import "../assets/scss/common";
  @import "../assets/scss/iconfont";
  @import "../assets/scss/certification";
</style>

<script>
  import CommonHeader from '../components/CommonHeader'
  export default {
    components: {
      CommonHeader
    }
  }
</script>



