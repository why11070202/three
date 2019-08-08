<template>
  <div>
    <section style="padding:10px;" v-for="(item,index) in listdata" :key="index">
      <img :src="item.img" alt style="width:100%; margin-bottom: 10px;" />
      <div class="textbox clearfix">
        <div class="texttitle fl">
          <h3 v-text="item.title"></h3>
          <p>
            <em v-text="`￥${item.oldprice}`"></em>
            <!--<del>￥50.00</del>-->
            <span v-text="`优惠价${item.price}元`"></span>
          </p>
        </div>
        <div class="shopbtn fr">
          <a
            class="goshopbtn"
            href="javascript:"
            data-url="/coupon/shoplist?couponid=1990&amp;cityid=1953"
            v-text="`查看${item.shopnum}家店铺`"
          ></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  props: {
    listdata: {
      default: () => {
        return [
          {
            title: `洗车通用券低至17.6元`,
            price: 17.6,
            oldprice: 29.9,
            shopnum: 222,
            img: 'http://qlimg.b2bvip.net/uploads/coupon/2018/09/30/5bb053d60e360.png.main.png'
          }
        ];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.textbox {
  width: 100%;
  .texttitle {
    width: 70%;
    h3 {
      font-size: 15px;
      padding-bottom: 3px;
      line-height: 1.3;
    }
    p {
      em {
        font-size: 15px;
        color: #ff5512;
        padding-right: 8px;
      }
      span {
        font-size: 9px;
        padding: 0 3px;
        /* border: 1px solid #FF5512; */
        color: #ff5512;
        border-radius: 3px;
      }
    }
  }
  .shopbtn {
    width: 30%;
    a {
      display: block;
      border-radius: 3px;
      background: #ff5512;
      color: #fff;
      font-size: 12px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      padding: 0 7px;
    }
  }
}
</style>
