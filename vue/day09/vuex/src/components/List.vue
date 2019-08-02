<template>
  <div class="shoplist">
    <van-list
      v-model="loading"
      :offset="100"
      :finished="finished"
      finished-text="没有更多了"
      @load="getShoplist"
    >
      <van-card
        v-for="(item,index) in shoplist"
        :key="index"
        num="2"
        price="2.00"
        :desc="item.shipping_time"
        :title="item.shopName"
        :thumb="item.picUrl"
        :immediate-check="true"
      />
    </van-list>
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
    };
  },
  async created() {
    // this.getShoplist();
  },
  methods: {
    getShoplist() {
      setTimeout(async () => {
        let shoplist = await this.$axios(
          "https://www.easy-mock.com/mock/5d4028383847913b8df88437/iconlist/shoplist2"
        );
        this.shoplist = [...this.shoplist, ...shoplist.data.data.shopList];
        // 加载状态结束
        this.loading = false;
      }, 1000);

      // 数据全部加载完成
      if (this.shoplist.length >= 40) {
        this.finished = true;
      }
    }
  }
};
</script>


<style scoped>
.shoplist::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.shoplist::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.shoplist::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.index-container_10L_lQb {
  position: relative;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
  background-color: #fff;
  color: #666;
  padding: 0.4rem 0;
  padding: 4vw 0;
  list-style: none;
  font-size: 0.293333rem;
  line-height: normal;
}
.index-shopInfo_1RRTZ0d {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
}
.logo-container_XoH2Vit_0 {
  position: relative;
  -webkit-flex: none;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  z-index: 0;
}
.index-container_10L_lQb {
  position: relative;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
  background-color: #fff;
  color: #666;
  padding: 0.4rem 0;
  padding: 4vw 0;
  list-style: none;
  font-size: 0.293333rem;
  line-height: normal;
}
.index-line_2-iYR1A,
.index-main_N3FfcSz {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
}
.logo-main_21aInWJ_0 {
  position: relative;
  width: 1.933333rem;
  width: 19.333333vw;
  height: 1.733333rem;
  height: 17.333333vw;
}
.logo-logo_3S1eSkn_0 {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  border: 0.013333rem solid rgba(0, 0, 0, 0.08);
  border: 0.133333vw solid rgba(0, 0, 0, 0.08);
}
.index-main_N3FfcSz {
  -webkit-flex-grow: 1;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-left: 0.266667rem;
  padding-left: 2.666667vw;
}
.index-line_2-iYR1A,
.index-shopname_39Y7e3U {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.index-line_2-iYR1A,
.index-main_N3FfcSz {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
}
*,
::after,
::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}
</style>


