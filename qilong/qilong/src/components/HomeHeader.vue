<template>
  <div>
    <div class="header" style="position: fixed;top: 0px;left: 0;">
      <div @click="back(headerdata.licon)">
        <span v-text="headerdata.addres" v-show="headerdata.addres" class="fl"></span>
        <van-icon
          class="fl"
          :name="headerdata.licon"
          :color="headerdata.color"
          :size="headerdata.size"
        />
      </div>

      <div class="title">
        <div v-text="headerdata.headertitle" v-show="!headerdata.input"></div>
        <input v-show="headerdata.input" type="text" placeholder="请输入产品名" @click="search" />
      </div>
      <div class="fr">
        <van-icon
          v-show="headerdata.riconshow"
          :name="headerdata.ricon"
          :size="30"
          @click="tohome(headerdata.ricon)"
        />
      </div>
    </div>
    <div class="header_bottom"></div>
  </div>
</template>
<script>
import reg from "../assets/reg.png";
export default {
  data() {
    return {
      // addres: "青岛"
    };
  },
  props: {
    headerdata: {
      default: () => {
        return {
          // addr
          addres: "青岛",
          // 头部标题
          headertitle: "登陆",
          // 左边图标
          licon: "arrow-down",
          // 右边图标 默认三点选项
          ricon: reg,
          // 图标颜色
          color: "white",
          // 图标大小
          size: "12",
          // 右边图标是否显示
          riconshow: true,
          input: true
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
    },
    tohome(name) {
      // console.log(name);
      if (
        name ===
        "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_home.png"
      ) {
        this.$router.push({
          name: "index"
        });
      } else {
        this.$router.push({
          name: "reg"
        });
      }
    },
    search() {
      this.$router.push({
        name: "search"
      });
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
      width: 14%;
      height: 100%;
      height: 1.25rem;
      span {
        display: inline-block;
        width: 40px;
        color: #fff;
        padding-left: 0.1875rem;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 32px;
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
      width: 72%;
      text-align: center;
      font-size: 0.5rem;
      color: #fff;
      input {
        width: 184px;
        height: 30px;
        border-radius: 18px;
        font-size: 14px;
        background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/search2.png)
          34px center no-repeat #fff;
        background-size: 8% 55%;
        padding-left: 52px;
      }
    }
  }
  .header_bottom {
    height: 1.25rem;
  }
}
</style>

