<template>
  <div>
    <header-top :title="title"></header-top>
    <div class="tabs full-container flex bblIntro">
      <div class="tab-option" v-on:click="toggleTab(item)" v-bind:class="{'select': item.key===selected}" v-for="item in tabTitle">
        <span>{{item.name}}</span>
      </div>
    </div>
    <!-- 公司简介 -->
    <div class="intro-item container company" v-show="selected==='company'">
      <!-- 公司介绍 -->
      <div class="info full-container company-info">
        <div class="title container">
          公司介绍
          <i class="iconfont fr" v-bind:class="{'icon-anonymous-iconfont': selectedContent==='company-info', 'icon-jia': selectedContent!=='company-info'}" v-on:click="toggleContent('company-info')"></i>
        </div>
        <div class="detail full-container" v-show="selectedContent==='company-info'">
          <div class="pics full-container">
            <img src="../../static/images/bbl-company.png">
          </div>
          <div class="text container">
            <p>重庆倍倍利金服科技有限公司是由重庆倍倍利实业有限公司于2015年4月发起成立的一家互联网科技公司，注册资本5000万元，总部位于重庆。旗下拥有本土创新互联网投融资平台—倍倍利，于2015年7月17日上线运营，至今累计交易额已超亿元。</p>
            <p>倍倍利拥有强大的平台开发与运营团队，公司高管来自阿里巴巴集团、中国农业银行、重庆银行等知名金融机构，具有丰富的互联网运营和金融业实操经验，严格执行与优秀金融机构同级的风控标准。</p>
            <p>秉承“做安全透明的互联网金融平台”的理念，倍倍利为投资者提供安全、便捷和多样化的投融资产品和贴心服务。根据项目类型不同，目前平台推荐项目主要分为企业经营贷、票据质押贷、保理项目、房/车抵质押贷和个人消费贷，所有项目均经过倍倍利严密风控审核。根据项目期限不同，目前主要分为1月期项目、3月期项目和6月标项目，预期年化收益8%--11%。</p>
            <p>我们相信，金融和互联网的碰撞，将会引领下一个生活大爆炸时代。我们努力让融资更简单，让收益更安全，在伴您一生的财富积累过程中，留下我们一路相随的足迹。</p>
          </div>
        </div>
      </div> 

      <!-- 大事件 -->
      <div class="info full-container big-events">
        <div class="title container">
          大事件
          <i class="iconfont fr" v-bind:class="{'icon-anonymous-iconfont': selectedContent==='big-events', 'icon-jia': selectedContent!=='big-events'}" v-on:click="toggleContent('big-events')"></i>
        </div>
        <div class="detail container" v-show="selectedContent==='big-events'">
          <ul>
            <li class="year">
              <span class="date">    </span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">2016</span>
            </li>
            <li class="">
              <span class="date">07.17</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">平台交易量突破1亿元</span>
            </li>
            <li class="">
              <span class="date">06.24</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">加入巴南区创新金融协会</span>
            </li> 
            <li class="">
              <span class="date">05.31</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">引入安融征信</span>
            </li> 
            <li class="">
              <span class="date">04.28</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">自主开发系统上线</span>
            </li>
            <li class="">
              <span class="date">03.16</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">接入新浪支付</span>
            </li> 
            <li class="">
              <span class="date">02.22</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">第一次系统改版升级</span>
            </li> 
            <li class="">
              <span class="date">01.01</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">天标项目上线</span>
            </li>
            <li class="year">
              <span class="date"></span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">2015</span>
            </li>

            <li class="">
              <span class="date">12.08</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">与知名担保公司达成合作协议</span>
            </li>

            <li class="">
              <span class="date">10.25</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">上线100天，平台交易额突破1000万</span>
            </li>

            <li class="">
              <span class="date">10.10</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">退出车贷项目</span>
            </li>

            <li class="">
              <span class="date">08.22</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">IOS版APP上线</span>
            </li>

            <li class="">
              <span class="date">07.23</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">安卓APP上线</span>
            </li>

            <li class="">
              <span class="date">07.17</span>
              <span class="node">
                <div class="slide"></div>
                <div class="circle"></div>
              </span>
              <span class="event">正式上线运营</span>
            </li>           

          </ul>
        </div>
      </div>

      <!-- 资质证照 -->
      <div class="info full-container qualifications">
        <div class="title container">
          资质证照
          <i class="iconfont fr" v-bind:class="{'icon-anonymous-iconfont': selectedContent==='qualifications', 'icon-jia': selectedContent!=='qualifications'}" v-on:click="toggleContent('qualifications')"></i>
        </div>
        <div class="detail container" v-show="selectedContent==='qualifications'">
          暂无
        </div>
      </div>
    </div>

    <!-- 安全保障 -->
    <div class="intro-item container security" v-show="selected==='security'">

      <!-- 资金托管 -->
      <div class="info full-container money-manage">
        <div class="title container">
          资金托管
          <i class="iconfont fr" v-bind:class="{'icon-anonymous-iconfont': selectedContent==='money-manage', 'icon-jia': selectedContent!=='money-manage'}" v-on:click="toggleContent('money-manage')"></i>
        </div>
        <div class="detail container" v-show="selectedContent==='money-manage'">
          <div class="security-pics tuoguan"></div>
          <ul>
            <li><span>无资金池</span>—新浪支付资金托管</li>
            <li><span>专属资金账户</span>—资金账户仅限用户本人操作</li>
            <li><span>实名同卡原则</span>—用户资金仅限提现至本人实名银行卡，且平台实名信息必须与银行卡实名信息保持一致</li>
          </ul>
        </div>
      </div>

      <!-- 严密风控 -->
      <div class="info full-container risk">
        <div class="title container">
          严密风控
          <i class="iconfont fr" v-bind:class="{'icon-anonymous-iconfont': selectedContent==='risk', 'icon-jia': selectedContent!=='risk'}" v-on:click="toggleContent('risk')"></i>
        </div>
        <div class="detail container" v-show="selectedContent==='risk'">
          <div class="security-pics fengkong"></div>
          <ul>
            <li><span>严格</span>筛选合作机构</li>
            <li><span>谨慎</span>调查借款项目</li>
            <li><span>强有力</span>风控保障：足额资产抵押/质押、第三方担保垫付、风险备付金垫付</li>
          </ul>
        </div>
      </div>


      <!-- 隐私保护 -->
      <div class="info full-container secret">
        <div class="title container">
          隐私保护
          <i class="iconfont fr" v-bind:class="{'icon-anonymous-iconfont': selectedContent==='secret', 'icon-jia': selectedContent!=='secret'}" v-on:click="toggleContent('secret')"></i>
        </div>
        <div class="detail container" v-show="selectedContent==='secret'">
          <div class="security-pics yinsi"></div>
          <ul>
            <li><span>信息透明：</span>借款人信息及资金流向透明可查</li>
            <li><span>用户隐私严格保密：</span>健全的用户信息保密机制</li>
            <li><span>投资数据安全：</span>SSL数据加密、自主开发平台、完善的运维监测体系</li>
          </ul>
        </div>
      </div>

       <!-- 法律保障 -->
      <div class="info full-container law">
        <div class="title container">
          法律保障
          <i class="iconfont fr" v-bind:class="{'icon-anonymous-iconfont': selectedContent==='law', 'icon-jia': selectedContent!=='law'}" v-on:click="toggleContent('law')"></i>
        </div>
        <div class="detail container" v-show="selectedContent==='law'">
          <div class="security-pics law"></div>
          <ul>
            <li>平台提<span>供居间撮合服务</span>具合法性</li>
            <li>用户及借款人之间的<span>借贷关系</span>受法律保护</li>
            <li>用户通过平台获得的出借<span>理财收益</span>具合法性</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <div class="intro-item container connection" v-show="selected==='connection'">
      <!-- 公众号 -->
      <div class="info full-container">
        <div class="get-intouch-title ">
          <i class="iconfont icon-weixin"></i>微信公众号
        </div>
        <div class="detail ">
          微信搜索“倍倍利”或者微信号<span>“i-beibeili”</span>
        </div>
      </div>

      <!-- 客户服务 -->
      <div class="info full-container">
        <div class="get-intouch-title container">
          <i class="iconfont icon-kefu"></i>客户服务
        </div>
        <div class="detail container">
          <ul>
            <li>财富热线：<span>400-838-6686</span>  (工作时间: 9:00-17:30)</li>
            <li>邮箱：<span>service@ibeibeili.com</span></li>
            <li>在线QQ咨询：<span>4009602388</span>   (工作时间: 9:00-17:30)</li>
          </ul>
        </div>
      </div>

      <!-- 媒体合作 -->
      <div class="info full-container">
        <div class="get-intouch-title container">
          <i class="iconfont icon-sheyingji"></i>媒体合作
        </div>
        <div class="detail container">
          <ul>
            <li>如果您希望与我们进行媒体合作，请发送邮件至：</li>
            <li>邮箱：<span>my_zhou@ibeibeili.com</span></li>
            <li>我们会在2个工作日内与您联系。</li>
          </ul>
        </div>
      </div>

      <!-- 商务合作 -->
      <div class="info full-container">
        <div class="get-intouch-title container">
          <i class="iconfont icon-shangwuhezuo"></i>商务合作
        </div>
        <div class="detail container">
          <ul>
            <li>如果您有商务合作的需求，请将合作内容简要发送至：</li>
            <li>邮箱：<span>ibeibeili@ibeibeili.com</span></li>
          </ul>
        </div>
      </div>

      <!-- 联系地址 -->
      <div class="info full-container">
        <div class="get-intouch-title container">
          <i class="iconfont icon-dizhi"></i>联系地址
        </div>
        <div class="detail container">
          <ul>
            <li>地址：重庆渝北区星光5路8号土星商务中心C3-4F</li>
            <li>联系电话：<span>023-63424221</span></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 最新消息 -->
    <div class="intro-item container latest-news" v-show="selected==='latest-news'">
      <!-- 公众号 -->
      <div class="info full-container">
        <ul>
          <li v-for="item in news">
            <div class="words fl">
              <span class="abstract">{{item.title}}</span>
            </div>
            <span class="date">{{item.published_at}}</span>
            <div class="news-pic flex-middle">
              <img v-bind:src="item.image">
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
      title: '关于倍倍利',
      tabTitle: [
        {name: '公司简介', key: 'company'},
        {name: '安全保障', key: 'security'},
        {name: '联系我们', key: 'connection'},
        {name: '理财资讯', key: 'latest-news'}
      ],
      selected: 'company',
      selectedContent: '',
      news: [
        {id: 1, title: '倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-12-24 12:24:58', image: '../../static/images/news.png'},
        {id: 2, title: '倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-11-24 12:24:58', image: '../../static/images/news.png'},
        {id: 3, title: '倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-10-24 12:24:58', image: '../../static/images/news.png'},
        {id: 4, title: '倍倍利最红11月讲真，大红包限时抢，精彩不容错过！倍倍利最红11月讲真，大红包限时抢，精彩不容错过！', published_at: '2016-09-24 12:24:58', image: '../../static/images/news.png'}
      ]
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    toggleTab (item) {
      this.selected = item.key
    },
    toggleContent (key) {
      if (this.selectedContent === key) {
        this.selectedContent = ''
      } else {
        this.selectedContent = key
      }
    }
  },
  watch: {
  }
}
</script>
<style scoped>
</style>