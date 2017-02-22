<template>
  <div v-show="show" class="share-box full-container">
    <transition name="fade">
      <div v-show="show" class="share-content">
        <div class="share-methods full-container">
          <div class="title container">分享到</div>
          <ul>
            <li class="container">
              <div class="share-item" v-on:click="shareToSession">
                <span class="method weixin"></span>微信
              </div>
              <div class="share-item" v-on:click="shareToTimeline">
                <span class="method penyouquan"></span>朋友圈
              </div>
              <div class="share-item" v-on:click="shareToQQchat">
                <span class="method qq"></span>QQ
              </div>
              <div class="share-item" v-on:click="shareQZone">
                <span class="method kongjian"></span>QQ空间
              </div>
              <div class="share-item" v-on:click="shareWeibo">
                <span class="method weibo"></span>微博
              </div>
            </li>
            <li class="container">
              <div class="share-item" v-on:click="copyLink">
                <span class="method links"></span>复制链接
              </div>
              <div class="share-item" v-on:click="showQrcode">
                <span class="method saomiao"></span>二维码
              </div>
            </li>
          </ul>
        </div>
        <button type="button" v-on:click="cancelShare" class="btn cancel-share">取&nbsp;&nbsp;消</button>
      </div>
    </transition>
    <popup v-model="qrcodeShow">
      <img v-bind:src="qrcodeSrc" alt="">
    </popup>
  </div>
</template>

<script>
import appEnv from '../../env'
import {Popup, Toast} from 'mint-ui'

export default {
  components: {Popup, Toast},
  data: function () {
    return {
      url: '',
      qrcodeSrc: '',
      qrcodeShow: false,
      shareData: {title: '理财师', description: '注册成为离理财师', thumb: false}
    }
  },
  props: ['show'],
  mounted () {
    if (this.$store.getters.user.invite_code) {
      this.url = appEnv.baseUrl + '/register/phone?invite_code=' + this.$store.getters.user.invite_code
    } else {
      this.url = appEnv.baseUrl
    }
    this.qrcodeSrc = appEnv.apiUrl + 'qrcode?text=' + encodeURIComponent(this.url)
  },
  computed: {
  },
  methods: {
    cancelShare: function () {
      this.$emit('cancel')
    },
    showQrcode: function () {
      this.qrcodeShow = true
    },
    copyLink: function () {
      window.prompt('邀请链接', this.url)
    },
    shareToTimeline: function () {
      window.app.shareWechatLink(this.url, 1, this.shareData)
    },
    shareToSession: function () {
      window.app.shareWechatLink(this.url, 0, this.shareData)
    },
    shareToQQchat: function () {
      Toast({message: '正在开发中。。', position: 'bottom'})
    },
    shareQZone: function () {
      Toast({message: '正在开发中。。', position: 'bottom'})
    },
    shareWeibo: function () {
      Toast({message: '正在开发中。。', position: 'bottom'})
    }
  },
  watch: {
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: margin-bottom .5s
}
.fade-enter, .fade-leave-active {
  margin-bottom: -300px;
}
.share-box .share-content {
  bottom: -3px;
  z-index: 401;
}
.cancel-share {
  border-radius: 0;
  color: #333333;
  background-color: #f7f7f7;
}
.share-item {
  display: block;
  float: left;
  width: 20%;
  text-align: center;
  font-size: 1.2rem;
  color: #333;
}
.method {
  display: block;
  margin: 0 auto 0.5rem;
  width: 50px;
  height: 50px;
  background-image: url('../../static/images/share-logos.png');
  background-size: 350px 50px;
  background-repeat: no-repeat;
}
.method.weixin {
  background-position: 0 0;
}
.method.penyouquan {
  background-position: -50px 0;
}
.method.qq {
  background-position: -100px 0;
}
.method.kongjian {
  background-position: -150px 0;
}
.method.weibo {
  background-position: -200px 0;
}
.method.links {
  background-position: -250px 0;
}
.method.saomiao {
  background-position: -300px 0;
}
</style>