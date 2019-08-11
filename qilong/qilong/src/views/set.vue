<template>
  <div>
    <HomeHeader :headerdata="headerdata"></HomeHeader>
    <Blank />
    <div class="cell">
      <van-cell v-for="(item,index) in celldata" :key="index" :title="item" is-link />
      <van-cell title="客服电话" value="4006-136-368" is-link />
    </div>
    <Blank />
    <div>
      <van-button type="default" @click="exit">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import Blank from "../components/Blank";

export default {
  data() {
    return {
      headerdata: {
        addres: "",
        // 头部标题
        headertitle: "个人设置",
        // 左边图标
        licon: "arrow-left",
        // 右边图标 默认三点选项
        ricon:
          "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_member.png",
        // 图标颜色
        color: "white",
        // 图标大小
        size: "32",
        // 右边图标是否显示
        riconshow: false,
        input: false
      },
      celldata: ["通用券订单", "门店订单", "商城订单", "品牌街订单"],
      setCookie: function(key, val, day) {
        if (day) {
          let now = new Date();
          now.setDate(now.getDate + day);
          document.cookie =
            key + "=" + val + ";expires=" + now.toUTCString() + ";path=/";
        } else {
          document.cookie = key + "=" + val + ";path=/";
        }
      }
    };
  },
  components: {
    HomeHeader,
    Blank
  },
  methods: {
    exit() {
      //删除cookie
      this.setCookie("tel", "", -1);
      this.setCookie("islogin", "", -1);
      this.setCookie("token", "", -1);
      this.$router.push({
        name: "index"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cell {
  background: #fafafa;
  > div {
    &:nth-child(3) {
      margin-bottom: 10px;
    }
  }
}
.van-cell {
  color: #666;
  font-size: 15px;
}
.van-cell__value {
  color: #ff5512;
}
.van-button {
  width: 100%;
  height: 50px;
  color: #ff5512;
  font-size: 16px;
}
</style>