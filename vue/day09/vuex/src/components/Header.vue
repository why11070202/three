<template>
  <div>
    <p @click="add">
      <i>
        <img :src="wzsrc" alt />
      </i>
      <span v-text="adress"></span>
    </p>
    <van-search background="#0085ff" placeholder="搜索饿了么商家、商品名称" v-model="value" />
    <van-area
      :area-list="areaList"
      v-show="bool"
      @cancel="cancel"
      @confirm="onconfirm"
      :visible-item-count="4"
    />
  </div>
</template>
<script>
import wzsrc from "../assets/wz.png";
export default {
  data() {
    return {
      adress: "",
      value: "",
      wzsrc,
      bool: false,
      areaList: {}
    };
  },
  async created() {
    let areaList = await this.$axios(
      "https://www.easy-mock.com/mock/5d1f157e9afa6d136cc0a0e5/example/add"
    );
    this.areaList = areaList.data;
    //从仓库拿值
    this.adress = this.$store.getters.getAdress;
  },
  updated() {
    this.adress = this.$store.getters.getAdress;
  },

  methods: {
    //
    add() {
      this.bool = !this.bool;
    },
    cancel() {
      this.bool = !this.bool;
    },
    onconfirm(val) {
      this.bool = !this.bool;
      let adress = val[1].name + val[2].name;
      this.$store.dispatch("setAdress", adress);
      console.log(this.$store);
      // this.adress = this.$store.getters.getAdress;
    }
  }
};
</script>
<style lang="scss" scoped>
p {
  padding: 0px 15px;
  margin: 0;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  font-weight: 900;
  background: linear-gradient(90deg, #0af, #0085ff);
  i {
    display: inline-block;
    width: 25px;
    height: 30px;
    vertical-align: middle;
    img {
      width: 22px;
      height: 22px;
    }
  }
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: 100px;
    vertical-align: middle;
  }
}
.van-search .van-cell {
  padding: 5px 70px 0;
}
.van-search__content {
  background: #ffffff;
}
.van-field__control {
  font-size: 12px;
}
.van-picker {
  position: absolute;
  top: 90px;
  width: 100%;
  z-index: 200;
}
</style>
