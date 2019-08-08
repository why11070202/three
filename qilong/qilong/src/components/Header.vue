<template>
  <div>
    <div class="header" style="position: fixed;top: 0px;left: 0;">
      <div @click="back(headerdata.licon)">
        <span v-text="headerdata.addres"></span>
        <van-icon
          class="fr"
          :name="headerdata.licon"
          :color="headerdata.color"
          :size="headerdata.size"
        />
      </div>

      <div class="title" v-text="headerdata.headertitle"></div>
      <div>
        <van-icon
          v-show="headerdata.riconshow"
          class="fr"
          :name="headerdata.ricon"
          :size="headerdata.size"
        />
      </div>
    </div>
    <div class="header_bottom"></div>
  </div>
</template>
<script>
import option from "../assets/option.png";
export default {
  data() {
    return {};
  },
  props: {
    headerdata: {
      default: () => {
        return {
          // addr
          addres: "广州",
          // 头部标题
          headertitle: "登陆",
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
          riconshow: true
        };
      }
    }
  },
  methods: {
    back(name) {
      // console.log(name);
      if (name === "arrow-left") {
        this.$router.go(-1);
      } else {
        this.$router.push({
          name: "city"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  .header {
    width: 100%;
    > div {
      line-height: 1.25rem;
      float: left;
      width: 12%;
      height: 100%;
      height: 1.25rem;
      span {
        color: #fff;
        padding-left: 0.1875rem;
      }
      i {
        line-height: 1.25rem;
      }
    }
    height: 1.25rem;
    background: #ff5512;
    line-height: 1.25rem;
    z-index: 22;
    .title {
      width: 76%;
      text-align: center;
      font-size: 0.5rem;
      color: #fff;
    }
  }
  .header_bottom {
    height: 1.25rem;
  }
}
</style>

