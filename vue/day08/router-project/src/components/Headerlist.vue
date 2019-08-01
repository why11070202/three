<template>
  <div>
    <van-tabs
      v-model="active"
      background="#0085ff"
      title-inactive-color="#fff"
      title-active-color="#ddd"
    >
      <div class="menu">
        <div class="menu_l">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="inside|content" />
          </van-dropdown-menu>
        </div>
        <div class="menu_r">
          <a v-for="(item,index) in out" :key="index">
            <span v-text="item.name"></span>
          </a>
        </div>
      </div>

      <van-tab
        :title="item.name"
        v-for="(item,index) in headerlist"
        :key="index"
        v-text="item.name"
      ></van-tab>
    </van-tabs>
  </div>
</template>
<script>
/*eslint-disable*/ 
 
export default {
  data() {
    return {
      active: 1,
      headerlist: [],
      inside: [],
      value1: 0,
      out: []
    }
  },
  async created() {
    let headerlist = await this.$axios(
      "https://www.easy-mock.com/mock/5d4028383847913b8df88437/iconlist/headerlist"
    );
    this.headerlist = headerlist.data;
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d4028383847913b8df88437/iconlist/menu"
    );
    this.out = menu.data.outside.outside_sort_filter;
    this.inside = menu.data.outside.inside_sort_filter;
  },
  filters: {
    content(inside) {
      //   let content = [];
      inside.forEach(element => {
        element.text = element.name;
      })
      return inside;
    }
  }
}
</script>
<style scoped>
.menu {
  display: flex;
}
.menu_l {
  width: 25%;
}
.menu_r {
  width: 75%;
  display: flex;
}
.menu_r a {
  flex: 1;
  text-align: center;
  line-height: 50px;
}
</style>
