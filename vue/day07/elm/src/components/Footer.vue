<template>
  <div>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" :fixed="true">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">发现</van-tabbar-item>
      <van-tabbar-item icon="freinds-o">订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "hh"
    };
  }
};
</script>
<style scoped>
div {
  height: 50px;
}
</style>

