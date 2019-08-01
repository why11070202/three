<template>
  <div class="shoplist">
    <section>
      <section class="index-container_10L_lQb shop-0">
        <div class="index-shopInfo_1RRTZ0d" v-for="(item,index) in shoplist" :key="index">
          <div class="logo-container_XoH2Vit_0">
            <div class="logo-main_21aInWJ_0">
              <img
                :alt="item.restaurant.name"
                class="logo-logo_3S1eSkn_0"
                src="https://fuss10.elemecdn.com/0/61/abffd039f2160c4cce2253e9bd2d7png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
              />
              <!---->
              <!---->
            </div>
            <!---->
          </div>
          <div class="index-main_N3FfcSz">
            <section class="index-line_2-iYR1A">
              <h3 class="index-shopname_39Y7e3U">
                <!---->
                <span v-text="item.restaurant.name"></span>
              </h3>
              <ul class="index-supportWrap_2lTcxr2">
                <!---->
                <span class="index-omit_1q3Tw0_">···</span>
              </ul>
            </section>
            <section class="index-line_2-iYR1A">
              <div class="index-rateWrap_39dWx_g">
                <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                  <!-- <div class="Rating-gray_1kpffd5_0">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                    />
                  </div>-->
                  <div class="Rating-actived_GBtiHkB_0" style="width: 78%;">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                    />
                  </div>
                </div>
                <span class="index-rate_WsK58g8" v-text="item.restaurant.rating"></span>
                <span v-text="`月售${item.restaurant.recent_order_num}单`"></span>
              </div>
              <div class="delivery-delivery_3gyT50e_0">
                <!---->
                <div content="蜂鸟专送" alt="蜂鸟专送" class="delivery-icon-hollow_3q8_B5r_0">蜂鸟专送</div>
              </div>
            </section>
            <section class="index-line_2-iYR1A">
              <div class="index-moneylimit_2fCq9W5">
                <span v-text="`¥${item.restaurant.piecewise_agent_fee.rules[0].price}.起送`"></span>
                <span v-text="item.restaurant.piecewise_agent_fee.description"></span>
                <!---->
              </div>
              <div class="index-timedistanceWrap_2Dp_kzY">
                <span class="index-distanceWrap_1EPAlti">359m</span>
                <span>30分钟</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shoplist: []
    };
  },
  async created() {
    let shoplist = await this.$axios(
      "https://www.easy-mock.com/mock/5d4028383847913b8df88437/iconlist/shoplist"
    );
    this.shoplist = shoplist.data.items;
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


