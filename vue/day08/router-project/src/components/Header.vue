<template>
  <div>
    <p>
      <i>
        <img :src="wzsrc" alt />
      </i>
      <span v-text="adress"></span>
    </p>
    <van-search background="#0085ff" placeholder="搜索饿了么商家、商品名称" v-model="value" />
  </div>
</template>
<script>
import wzsrc from "../assets/wz.png";
export default {
  data() {
    return {
      adress: "广州康莱德酒店",
      value: "",
      wzsrc
    }
  }
}
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
</style>
