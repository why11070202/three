<template>
  <div>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" :fixed="true">
      <van-tabbar-item
        v-for="(item,index) in tabbarsItems"
        :key="index"
        :icon="item.icon"
        v-text="item.title"
        :to="item.url"
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      tabbarsItems: [
        {
          title: "首页",
          // 路由名字
          url: "/index",
          // 图标
          icon: "home-o"
        },
        {
          title: "发现",
          // 路由名字
          url: "/fx",
          // 图标
          icon: "home-o"
        },
        {
          title: "订单",
          url: "/order",
          icon: "search"
        },
        {
          title: "我的",
          url: "/mine",
          icon: "friends-o"
        }
      ]
    };
  }
};
</script>
<style scoped>
div {
  height: 50px;
}
</style>

