<template>
  <div class="title">
    <a href="javascript:void(0)" class="more">查看更多</a>
    {{ listtitle}}
  </div>
</template>
<script>
import icon3 from "../assets/icon3.png";
import icon1 from "../assets/router_icon/icon1_bg.png";
export default {
  data() {
    return {};
  },
  props: {
    listtitle: {
      default: () => {
        return "周周乐";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  padding-left: 34px;

  .more {
    color: #999;
    font-size: 14px;
    float: right;
    display: block;
    margin-right: 10px;
  }
}
</style>


