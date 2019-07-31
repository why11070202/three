<template>
  <div>
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(icon,index) in newiconlist"
        :key="index"
        :icon="icon.image_hash"
        :text="icon.name"
      />
    </van-grid>

    <van-divider :style="{ color: '#000', borderColor: '#999', padding: '0 120px' }">推荐商家</van-divider>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconlist: [],
      out: [],
      inside: [],
      value1: 0
    };
  },
  async created() {
    let iconlist = await this.$axios(
      "https://www.easy-mock.com/mock/5d4028383847913b8df88437/iconlist/iconlist"
    );
    this.iconlist = iconlist.data[0].entries;

    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d4028383847913b8df88437/iconlist/menu"
    );
    this.out = menu.data.outside.outside_sort_filter;
    this.inside = menu.data.outside.inside_sort_filter;
  },
  computed: {
    newiconlist() {
      let newiconlist = this.iconlist.slice(0, 10);
      return newiconlist;
    }
  },
  filters: {
    content(inside) {
      //   let content = [];
      inside.forEach(element => {
        element.text = element.name;
      });
      return inside;
    }
  }
};
</script>
<style  scoped>
.van-divider::before,
.van-divider::after {
  border-width: 2px 0 0;
}
.van-divider {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  margin: 15px 0;
  color: #969799;
  font-size: 14px;
  line-height: 0px;
  border-color: #ebedf0;
  border-style: solid;
  border-width: 0;
}
.van-hairline--top-bottom::after {
  border-width: 0px;
}
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
