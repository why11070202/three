<template>
  <div>
    <van-divider :style="{ color: '#FF5512', borderColor: '#FF5512', padding: '0 100px' }">奇龙商场</van-divider>
    <div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :offset="100"
        @load="getShoplist"
      >
        <van-cell v-for="(item,index) in shoplist" :key="index">
          <van-card :price="item.sellprice" :thumb="item.pic" :origin-price="item.marketprice">
            <div slot="title">
              <van-tag plain type="danger" color="#FF5512">自营</van-tag>
              <span
                v-text="item.title"
                style="color:#444;font-size:14px; font-family: '微软雅黑','宋体', 'Microsoft yahei', 'Arial';"
              ></span>
            </div>
          </van-card>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      shoplist: []

      //   show: false
    };
  },
  crtead() {
    getShoplist();
  },
  methods: {
    getShoplist() {
      // this.show = true;
      setTimeout(async () => {
        let shoplist = await this.$axios("http://localhost:3000/homelist/data");
        console.log(shoplist);
        this.shoplist = [...this.shoplist, ...shoplist.data];
        // 加载状态结束
        this.loading = false;
        // this.show = false;
        // 数据全部加载完成
        if (this.shoplist.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.van-cell {
  border-top: 0.015625rem solid #ccc;
  padding: 10px 0px;
}
.van-card {
  padding: 0 4px 0 8px;
}
.van-card__title {
  font-size: 14px;
}
.van-card__bottom {
  padding-top: 5px;
}
.van-card__price {
  font-size: 14px;
  color: #ff5512;
}
.van-card__origin-price {
  color: #bbb;
  padding-left: 20px;
}
.van-tag {
  margin-right: 10px;
  padding: 0 0.046875rem;
}
</style>

