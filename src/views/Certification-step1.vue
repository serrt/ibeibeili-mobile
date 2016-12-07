<template>
  <div>
    <common-header title="实名认证"></common-header>

    <div class="container ">
      
      <div class='certification '>
        <div class="current-steps">
          <img src="../assets/img/certification-step1.png">
        </div>
        <p class="tips">
          注意：请如实填写您的信息，实名认证一旦通过，此信息将不能修改!
        </p>


        <div class="reg-input user-inputs">
          <ul>
            <li>
              <div class="input-box">
                <label for="real-name"><i class="iconfont icon-yonghu"></i></label>
                <input type="text" name="real-name" id="real-name" placeholder="请输入真实姓名">
              </div>
              <div class="tip-box hide">
                请输入真实姓名
              </div>
            </li>
            <li>
              <div class="input-box">
                <label for="idcard"><i class="iconfont icon-shenfen"></i></label>
                <input type="text" name="idcard" id="idcard" placeholder="请输入身份证号码">
              </div>
              <div class="tip-box hide">
                请输入身份证号码
              </div>
            </li>
          
          </ul>
          
        </div>
        <a class="btn next-step">下一步</a>


        
      </div>


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
