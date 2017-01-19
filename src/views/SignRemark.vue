<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="page-box top-box bg">
      <div class="header-content">
        <ul>
          <li class="text-italic">投资指定金额<span class="color-warning">换取补签卡</span></li>
          <!-- <li>您有 <span>0</span> 张补签卡</li> -->
        </ul>
      </div>
      <div class="content">
        <ul>
          <li class="title">
            <span class="bg-remark">补签神器</span>
            <span class="text-remark">投资2000元即可换取一张补签卡</span>
          </li>
          <li class="Coupon">
              <div class="title-number">
                <p><span>1</span>张</p>
                <p>补签卡</p>
              </div>
              <div class="invest">单笔投资满<span>2000</span>元</div>
              <router-link class="link" :to="{name: 'projects'}" tag="div">立即投资</router-link>
          </li>
          <li class="Coupon">
              <div class="title-number">
                <p><span>2</span>张</p>
                <p>补签卡</p>
              </div>
              <div class="invest">单笔投资满<span>4000</span>元</div>
              <router-link class="link" :to="{name: 'projects'}" tag="div">立即投资</router-link>
          </li>
          <li class="Coupon">
              <div class="title-number">
                <p><span>3</span>张</p>
                <p>补签卡</p>
              </div>
              <div class="invest">单笔投资满<span>6000</span>元</div>
              <router-link class="link" :to="{name: 'projects'}" tag="div">立即投资</router-link>
          </li>
          <li class="Coupon other">
              <div class="title-number"></div>
              <div class="invest">投资其他金额</div>
              <router-link class="link" :to="{name: 'projects'}" tag="div">立即投资</router-link>
          </li>
        </ul>
      </div>
      <div class="rules">
        <h5>补签规则</h5>
        <ul>
          <li>
            <div>1</div>
            <div>若用户漏签，可投资指定金额换取补签卡进行补签（单笔投资满2000元补签一次，以此类推，用户单笔投资最高可获得30张补签卡）；</div>
            <div style="clear:both"></div>
          </li>
          <li>
            <div>2</div>
            <div>补签卡仅限当月有效，不能累积到次月使用；</div>
            <div style="clear:both"></div>
          </li>
          <li>
            <div>3</div>
            <div>补签后，可领取补签当日奖励，补签的天数计入连续签到天数。</div>
            <div style="clear:both"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import {Indicator, MessageBox, Toast} from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, MessageBox, Toast},
  data: function () {
    return {
      title: '补签卡'
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
  .bg{
    width:100%;
    height: 100%;
    background-image:url('../../static/images/sign/retroactive.gif');
    background-size:100% 100%;
    background-repeat:no-repeat;
  }

  .header-content{
    width:100%;
    padding-top:135px;
  }

  .header-content ul li{
    width:100%;
    height:24px;
    line-height:24px;
    text-align:center;
    font-size:16px;
    color:#fff;
  }
  
  .text-italic{
    font-style:italic;
  }
  .color-warning{
    color:#fdf32a;
  }

  .content{
    width:90%;
    height:450px;
    border-radius:5px;
    background-color:#FFF;
    margin: 30px auto;
    padding-top:25px;
  }

  .content li{
    width:100%;
    color:#fff;
    font-size:15px;
    margin-bottom:40px;
  }
  .content .title{
    width:100%;
    text-align:center;
    position:relative;
  }

  .content .bg-remark{
    position:absolute;
    left:0px;
    width:70px;
    height:21px;
    background-image:url('../../static/images/sign/qiandaoshenqi.png');
    background-repeat:no-repeat;
    background-size:70px 21px;
    line-height:21px;
  }

  .content .text-remark{
   color:#fe3941;
   font-style:italic;
   margin-left:70px;
   line-height:21px;
  }

  .content .Coupon{
    width:280px;
    height:65px;
    margin:20px auto;
    background-image:url('../../static/images/sign/retroactive-red.png');
    background-repeat:no-repeat;
    background-size:280px 65px;
  }

  .content .Coupon div{
    height:100%;
    float:left;
  }

  .content .Coupon .title-number{
    height:100%;
    width:60px;
    text-align:center;
    font-size:15px;
  }

  .content .title-number span{
    font-size:36px;
  }

  .content .invest{
    width:140px;
    text-align:center;
    line-height:65px;
    font-size:12px;
  }

  .content .Coupon div:nth-child(2) span{
    font-size:20px;
    color:#fdf32a;
    margin:0 5px;
  }

  .content .Coupon .link{
    height:30px;
    line-height:20px;
    padding:5px 5px;
    border:1px solid #fff;
    border-radius:20px;
    box-sizing:border-box;
    margin:17px 0px;
  } 

  .content .other{
    background-image:url('../../static/images/sign/retroactive-gray.png');
  }

  .content .other .link{
    background-color:#ffa02c;
    color:#fff;
    border:none;
  }

  .rules{
    width:90%;
    margin:20px auto;
    color:#fff;
    font-size:15px;
  }

  .rules h5{
    font-size:18px;
    margin:20px 0;
  }

  .rules li{
    display:block;
   line-height:20px;
    margin-bottom:10px;
  }
  .rules li div:nth-child(1){
    font-size:15px;
    float:left;
    width:20px;
    border-radius:50%;
    background-color:#ffa02c;
    text-align:center;
  }
  .rules li div:nth-child(2){
    font-size:15px;
    float:left;
    width:90%;
    margin-left:8px;
  }

  .rules li:after{
    clear:both;
  }
</style>