<template>
  <div>
    <header class="sharedotstop">
      <div class="headerbar_qmall">
        <div class="goback2 mysearch">
          <span></span>
        </div>
        <div class="headtitle">商城</div>
        <div class="headiconbox_qmall">
          <div class="icon_cart">
            <span @click="tocar"></span>
            <em id="cartnum">0</em>
          </div>
        </div>
      </div>
    </header>
    <div style="height:50px;"></div>
    <div class="blank14"></div>
    <Homelist></Homelist>
  </div>
</template>
<script>
import Homelist from "../components/Homelist";
export default {
  data() {
    return {
      tel: null,
      getCookie: function(key) {
        let cookie = document.cookie;
        var arr = cookie.split("; ");
        for (let i = 0; i < arr.length; i++) {
          let arr2 = arr[i].split("=");
          if (key == arr2[0]) {
            return arr2[1];
          }
        }
      }
    };
  },
  components: {
    Homelist
  },
  crtead() {
    let tel = this.getCookie("tel");
    this.tel = tel;
  },
  methods: {
    // 去购物车
    tocar() {
      // if (this.tel) {
      //   this.$router.push({
      //     name: "car"
      //   });
      // } else {
      //   this.$toast("您还未登录请先登陆");
      //   this.$router.push({
      //     name: "login"
      //   });
      // }
      this.$router.push({
        name: "car"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.blank14 {
  clear: both;
  height: 14px;
  line-height: 14px;
}
header {
  overflow: visible;
  .headerbar_qmall {
    height: 49px;
    overflow: hidden;
    background: #fcfcfc;
    position: fixed;
    z-index: 10;
    width: 100%;
    border-bottom: 1px solid #ccc;
    .goback2 {
      float: left;
      height: 49px;
      line-height: 49px;
      padding: 0 10px 0 10px;
      background: #fcfcfc;
      position: relative;
      z-index: 3;
      span {
        background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/search2.png)
          no-repeat 0 50%;
        background-size: 24px 24px;
        display: block;
        width: 49px;
        height: 49px;
      }
    }
    .headtitle {
      font-size: 17px;
      color: #333;
      text-align: center;
      margin: 0 60px;
      height: 49px;
      line-height: 49px;
      overflow: hidden;
    }
    .headiconbox_qmall {
      position: absolute;
      top: 0;
      right: 0;
      height: 49px;
      .icon_cart {
        float: right;
        height: 49px;
        padding-right: 12px;
        position: relative;
        span {
          background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/qmall/cart.png)
            no-repeat 0 50%;
          width: 27px;
          height: 50px;
          background-size: 25px;
          display: block;
        }
        em {
          line-height: 14px;
          position: absolute;
          right: 9px;
          top: 10px;
          display: block;
          min-width: 10px;
          height: 14px;
          border-radius: 7px;
          background: #ff5512;
          text-align: center;
          color: #fff;
          font-size: 8px;
          padding: 0 2px;
        }
      }
    }
  }
}
</style>

