<template>
  <div>
    <div class="footerbottom"></div>
    <van-tabbar v-model="active" active-color="#eb5120" inactive-color="#666">
      <van-tabbar-item v-for="(i,index) in icons" :key="index" @click="navTo(i.router)">
        <span v-text="i.title"></span>
        <img slot="icon" slot-scope="props" :src="props.active ? i.active : i.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import menu01 from "../assets/menu01.png";
import menu01on from "../assets/menu01on.png";
import mainnav22 from "../assets/mainnav22.png";
import mainnav23 from "../assets/mainnav23.png";
import mainnav24 from "../assets/mainnav24.png";
import mainnav25 from "../assets/mainnav25.png";
import menu04_bak from "../assets/menu04_bak.png";
import menu04on_bak from "../assets/menu04on_bak.png";

import menu05 from "../assets/menu05.png";
export default {
  data() {
    return {
      active: 0,
      icons: [
        {
          title: "首页",
          normal:
            "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/menu01.png",
          active:
            "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/menu01on.png",
          router: "index"
        },
        {
          title: "附近",
          router: "near",
          normal:
            "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/mainnav22.png",
          active:
            "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/mainnav23.png"
        },
        {
          title: "活动",
          router: "activity",
          normal:
            "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/menu04_bak.png",
          active:
            "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/menu04on_bak.png"
        },
        {
          title: "购物",
          router: "shop",
          normal:
            "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/mainnav24.png",
          active:
            "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/mainnav25.png"
        },
        {
          title: "我的",
          router: "my",
          normal:
            "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/menu05.png",
          active:
            "http://my.m.qilong.com/Public/newmobile/default/Images/index/menu05on.png"
        }
      ]
    };
  },
  methods: {
    navTo(name) {
      // console.log(name);
      this.$router.push({
        name
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.footerbottom {
  height: 50px;
}
</style>


