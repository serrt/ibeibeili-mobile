<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="page-box top-box main-wrapper">
      <div class="mainHeader">
        <img src="../../static/images/sign/sign-header.gif" alt="签到" class="main-header-bg"/>
        <div class="card-count">您有<span class="color-warning">{{user.tacked}}</span>张<span class="text-radius">补签卡</span></div>
        <div class="signCount">
          <ul>
            <li>连签<span>{{signInfo.continue}}</span>天</li>
            <li>累计<span>{{signInfo.total}}</span>天</li>
            <li>漏签<span>{{signInfo.leak}}</span>天</li>
          </ul>
        </div>
        <div class="goSign top" v-if="signInfo.current">
          <p>今日已签</p>
          <p class="gift">{{signInfo.current}}</p>
        </div>
        <div class="goSign" v-else v-on:click="pick(new Date())">签到领钱</div>
        <div class="sign" v-on:click="calendarShow=!calendarShow"><span></span>签到记录<span class="arrow" v-bind:class="{'icon-up': calendarShow}"></span></div>
        <div class="moneySum">累计获得<span class="color-warning">{{signInfo.money}}</span>元</div>
      </div>
      <!-- 日历 -->
      <calendar v-show="calendarShow" :list="signInfo.list" @pick="pick"></calendar>
      <!-- 连续奖品 -->
      <div class="gift">
        <img src="../../static/images/sign/continuity-gift.gif" alt="">
        <div class="mysterious-gift" v-show="continueGift.length>0">
          <ul>
            <li v-for="item in continueGift">
              <!-- alreadyGet -->
              <div v-bind:class="{'alreadyGet':item.get}">
                <div class="top-left"><span class="gift-day-num">{{item.percent}}</span>天</div>
              </div>
              <span class="gift-type-name">{{item.get?item.name:'神秘礼物'}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 规则 -->
      <div class="rules">
        <h5>签到规则</h5>
        <ul>
          <li>
            <div>1</div>
            <div>在倍倍利有“待收金额”的用户（在平台有投资且项目未到期用户）均可参加签到；</div>
            <div style="clear:both"></div>
          </li>
          <li>
            <div>2</div>
            <div>用户每日通过手机端（APP或wap网页）签到，可抽取现金红包，红包金额自动存入倍倍利账户余额；</div>
            <div style="clear:both"></div>
          </li>
          <li>
            <div>3</div>
            <div>用户当月连续签到第7天、14天、30天，还可额外获得神秘礼包（内含加息券、财富值、红包或其他随机礼品）；</div>
            <div style="clear:both"></div>
          </li>
          <li>
            <div>4</div>
            <div>若用户漏签，可通过投资换取补签卡进行补签（单笔投资满2000元补签一次，以此类推，用户单笔投资最高可获得30张补签卡）；</div>
            <div style="clear:both"></div>
          </li>
          <li>
            <div>5</div>
            <div>补签卡仅限当月有效，不能累积到次月使用；</div>
            <div style="clear:both"></div>
          </li>
          <li>
            <div>6</div>
            <div>以上活动，在法律允许范围内，最终解释权归倍倍利所有。</div>
            <div style="clear:both"></div>
          </li>
        </ul>
      </div>
      <!-- 抽取礼物-->
      <div class="flop-out" ontouchstart="return false" onmousewheel="return false">
        <div class="flop">
          <ul>
            <li class="face">
              <img class="face-img" src="../../static/images/sign/flop-face.png" alt="签到翻牌"/>
            </li>
            <li class="face">
              <img class="face-img" src="../../static/images/sign/flop-face.png" alt="签到翻牌"/>
            </li>
            <li class="face">
              <img class="face-img" src="../../static/images/sign/flop-face.png" alt="签到翻牌"/>
            </li>
            <li class="face">
              <img class="face-img" src="../../static/images/sign/flop-face.png" alt="签到翻牌"/>
            </li>
            <li class="face">
              <img class="face-img" src="../../static/images/sign/flop-face.png" alt="签到翻牌"/>
            </li>
            <li class="face">
              <img class="face-img" src="../../static/images/sign/flop-face.png" alt="签到翻牌"/>
            </li>
          </ul>
          <div class="result">
            <p>恭喜您，获得<span></span>元现金红包！</p>
            <p>请在倍倍利财富“红包”中查看</p>
          </div>
          <a href="javascript:void(0);">知道了</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/Header'
import Calendar from '../components/Calendar'
import {Indicator, MessageBox, Toast} from 'mint-ui'

export default {
  components: {HeaderTop, Indicator, Calendar, MessageBox},
  data: function () {
    return {
      title: '签到',
      calendarShow: true,
      user: this.$store.getters.user,
      continueGift: [],
      signInfo: {}
    }
  },
  mounted () {
    Indicator.open()
    this.$http.post('user/user').then((response) => {
      this.$store.dispatch('user', response.data)
    })
    this.$http.get('user/signInfo').then((response) => {
      this.signInfo = response.data
    })
    this.$http.get('user/signContinueGift').then((response) => {
      this.continueGift = response.data.data
    })
  },
  computed: {
  },
  methods: {
    pick: function (day) {
      let now = new Date()
      if (now.getFullYear() !== day.getFullYear() || now.getMonth() !== day.getMonth()) {
        Toast({message: '仅能签到当月', position: 'bottom', duration: 2000})
        return
      }
      if (day.class && day.class.sign) {
        Toast({message: '已经签到过了', position: 'bottom', duration: 2000})
        return
      }
      if (day.getDate() > now.getDate()) {
        Toast({message: '时间还没到', position: 'bottom', duration: 2000})
        return
      }
      if (day.getDate() < now.getDate() && this.user.tacked === 0) {
        Toast({message: '补签卡不足', position: 'bottom', duration: 2000})
        return
      }
      this.$http.post('user/sign', {date: day.toLocaleDateString()}).then((response) => {
        if (response.data.status === 1) {
          MessageBox.alert(response.data.msg, '提示')
        }
      })
    }
  },
  watch: {
  }
}
</script>
<style scoped>
  body{
    background-color: rgba(255, 255, 255, 0.3);
  }
  img{
    max-width: 100%;
  }
  .icon-up{
    transform: rotate(180deg);
  }
  .more{
    color:#fff;
    line-height:40px;
    font-size:20px;
    text-align:right;
    float:right;
    position:absolute;
    right:0px;
    top:0px;
    margin-right:10px;
    font-weight:bolder;
  }

  #container tbody td{
    border:none;
  }
  #container tbody th{
    border:none;
    background:#f0f;
  }

  #container{
    display:none;
  }


  .main-wrapper{
    width:100%;
  }


  /* main-header */

  .mainHeader{
    position:relative;
  }

  .card-count{
    position:absolute;
    left:10px;
    top:20px;
    color:#fff;
    font-size:15px;
  }

  .color-warning{
    color:#fdf52a;
  }

  .text-radius{
    border-radius:12px;
    border:1px solid #fff;
    padding:1px 3px;
  }


  /* signCount */
  .signCount{
    position:absolute;
    top:0px;
    right:20px;
    font-size:15px;
    width:72px;
    height:100px;
    box-sizing:border-box;
    padding-top:15px;
    background-color:rgba(255, 255, 255, 0.3);
    border-radius:0 0 10px 10px;
    text-align:center;
    color:#fff;
    line-height:26px;
  }


  .goSign{
    font-size:22px;
    color:#f26060;
    position:absolute;
    left:50%;
    margin-left:-46px;
    top:35%;
    text-align:center;
  }
  .goSign.top{
    top:30%;
  }

  .goSign .gift{
    font-size:12px;
    line-height:25px;
    font-weight:bold;
  }

  .sign{
    font-size:15px;
    color:#fff;
    line-height:20px;
    position:absolute;
    bottom:10px;
    left:10px;
  }

  .sign span:nth-child(1){
    position:relative;
    left:0px;
    bottom:-1px;
    width:15px;
    height:15px;
    background-image:url('../../static/images/sign/calendar.png');
    background-size:15px 15px;
    background-repeat:no-repeat;
    display:inline-block;
    margin-right:5px;
    background-position:bottom;
  }

  .sign span:nth-child(2){
    width:15px;
    height:15px;
    background-image:url('../../static/images/sign/down.png');
    background-size:15px 15px;
    background-repeat:no-repeat;
    display:inline-block;
    margin-left:5px;
  }

  .moneySum{
    position:absolute;
    right:20px;
    bottom:10px;
    color:#fff;
    font-size:15px;
  }

  .gift{
    position:relative;
  }

  .gift .mysterious-gift{
    width:100%;
    height:100px;
    position:absolute;
    bottom: 5px;
    left:0px;
  }

  .gift .mysterious-gift li{
    width:33.30%;
    height:100%;
    text-align:center;
    font-size:12px;
    color:#8a8a8a;
    display:inline-block;
    float:left;
  }

  .gift .mysterious-gift li>div{
    width:85px;
    height:85px;
    background-image:url('../../static/images/sign/sign-no.png');
    background-size:85px 85px;
    position:relative;
    margin:0 auto;
  }
  .gift .mysterious-gift li .alreadyGet{
    background-image:url('../../static/images/sign/sign-already.png');
  }
  .gift .mysterious-gift .top-left{
    width:30px;
    height:30px;
    color:#fd5154;
    font-size:10px;
    position:absolute;
    top:0px;
    left:0px;
    background-image:url('../../static/images/sign/tianshu.png');
    background-size:30px 30px;
    line-height:30px;
    text-align:center;
  }

  .gift .mysterious-gift .top-left span{
    font-size:12px;
  }

  /* rules */
  .rules{
    width:90%;
    margin:20px auto;
    color:#000;
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
    background-color:#ff6d75;
    text-align:center;
    color:#fff;
    line-height:20px;
  }
  .rules li div:nth-child(2){
    font-size:14px;
    float:left;
    width:90%;
    color:#666;
    margin-left:8px;
  }

   /* flop */

  .flop-out{
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.6);
    position: fixed;
    overflow: scroll;
    top:0;
    z-index:220;
    display: none;
  }


  .flop{
    width:90%;
    max-height: 100%;
    padding: 35% 10px 10px 10px;
    background-image:url('../../static/images/sign/flop-bg.png');
    background-size:100% 100%;
    background-repeat:no-repeat;
    margin: 0 auto;
    box-sizing:border-box;
    z-index:-1;
    position:relative;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
  }
  .flop ul{
    width:100%;
    margin:0 auto;
  }
  .flop .face-img{
    width: 100%;
    height: 100%;
    min-width: 75px;
    max-height: 190px;
  }
  .flop ul li{
    width:30%;
    display:inline-block;
    margin:2px;
  }


  .flop ul li.yourgift div{
    background-image:url('../../static/images/sign/flop-back.png');
    width:90px;
    height:120px;
    background-size:90px 120px;
    position:relative;
    z-index:2;
    padding-top:30px;
  }

  .flop  ul li.yourgift .win{
    background-image:url('../../static/images/sign/win.png');
    width:50px;
    height:40px;
    background-size:50px 40px;
    position:absolute;
    top:-10px;
    left:-10px;
    z-index:5;
  }
  .flop ul li.yourgift .redbag{
    background-image:url('../../static/images/sign/redbag.png');
    width:50px;
    height:60px;
    background-size:50px 60px;
    font-size:14px;
    line-height:20px;
    text-align:center;
    color:#fff;
  }


  .flop p{
    font-size:12px;
    line-height:18px;
    color:#8a8a8a;
    text-align:center;
  }

  .flop a{
    display:block;
    font-size:15px;
    color:#fff;
    width:250px;
    height:40px;
    line-height:40px;
    border-radius:5px;
    background-color:#fd5154;
    margin:0 auto;
    text-align:center;
    margin-top:10px;
    padding: 3px 15px;
  }
</style>