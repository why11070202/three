<template>
  <div>
    <Header :headerdata="headerdata"></Header>
    <div class="blank"></div>
    <div class="list">
      <Listtitle :listtitle="listtitle"></Listtitle>
      <ul class="clearfix">
        <li v-for="(item,index) in listarr" :key="index">
          <a href="/shop/52121">
            <div class="img">
              <img :src="item.img" :alt="item.name" />
            </div>
            <h3 v-text="item.name"></h3>
            <p class="shuaka" v-text="item.info"></p>
          </a>
        </li>
      </ul>
    </div>
    <div class="blank"></div>
    <van-divider :style="{ color: '#FF5512', borderColor: '#FF5512', padding: '0 100px' }">奇龙推荐</van-divider>
    <List1 :listdata="listdata"></List1>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import option from "../assets/option.png";
import List1 from "../components/list1";
import Listtitle from "../components/Listtitle";
import icon1bg from "../assets/router_icon/icon1_bg.png";
import banner4 from "../assets/banner4.png";
export default {
  data() {
    return {
      // 头部数据
      headerdata: {
        addres: "",
        // 头部标题
        headertitle: "百惠龙卡特惠",
        // 左边图标
        licon: "arrow-left",
        // 右边图标 默认三点选项
        ricon: option,
        // 图标颜色
        color: "white",
        // 图标大小
        size: "32",
        // 右边图标是否显示
        riconshow: true
      },
      //  列表标题数据
      listtitle: "线下刷卡",
      // 线下支付列表数据
      listarr: [
        {
          name: "御荟汽车美容服务中心",
          img:
            "http://qlimg.b2bvip.net/uploads/pictures/2013-06/thumb_56_1370312766.jpg.thumbnail.jpg",
          tag: "洗车服务",
          address: "白云区",
          info: "逢周二15元蜡水洗车",
          after: "http://guangzhou.m.qilong.com/shop/46303"
        },
        {
          name: "万盛潮府",
          img:
            "http://qlimg.b2bvip.net/uploads/pictures/2013-05/thumb_78_1368755778.jpg.thumbnail.jpg",
          tag: "中餐馆",
          address: "番禺区/大石街",
          info: "【百惠龙卡】9折",
          after: "http://guangzhou.m.qilong.com/shop/45936"
        },
        {
          name: "和风浅草",
          img:
            "http://qlimg.b2bvip.net/2013/06/29/13/13554931emfzoszmqcxtqx.jpg.thumbnail.jpg",
          tag: "日本料理",
          address: "越秀区/北京街道",
          info: "【百惠龙卡】7折",
          after: "http://guangzhou.m.qilong.com/shop/47308"
        },
        {
          name: "名点国际美发美容连锁",
          img:
            "http://qlimg.b2bvip.net/uploads/pictures/2013-04/thumb_44_1366726773.jpg.thumbnail.jpg",
          tag: "美容美发",
          address: "番禺区/沙湾镇",
          info: "享商户会员价",
          after: "http://guangzhou.m.qilong.com/shop/4559"
        }
      ],
      //
      listdata: [
        {
          title: `洗车通用券低至17.6元`,
          price: 17.6,
          oldprice: 29.9,
          shopnum: 531,
          img:
            "http://qlimg.b2bvip.net/uploads/coupon/2018/09/30/5bb053d60e360.png.main.png"
        },
        {
          title: `普通打蜡通用券低至88元`,
          price: 88.0,
          oldprice: 168.0,
          shopnum: 108,
          img:
            "http://qlimg.b2bvip.net/uploads/coupon/2017/09/29/59ce2bb878348.jpg.main.jpg"
        },
        {
          title: `精致打蜡通用券低至128元`,
          price: 128.0,
          oldprice: 208.0,
          shopnum: 145,
          img:
            "http://qlimg.b2bvip.net/uploads/coupon/2017/09/29/59ce2bff429a2.jpg.main.jpg"
        }
      ]
    };
  },
  components: {
    Header,
    List1,
    Listtitle
  }
};
</script>

<style lang="scss" scoped>
.blank {
  height: 0.3125rem;
  background: #fafafa;
}

.list {
  padding-left: 0.3125rem;
  .title {
    background: url("../assets/router_icon/icon1_bg.png") no-repeat 0 50%;
    background-size: 26px;
  }
  ul {
    padding-right: 0.3125rem;
    li {
      width: 50%;
      float: left;
      padding: 0 0 0.375rem 0;

      .img {
        padding-right: 0.15625rem;
        position: relative;
        img {
          width: 100%;
        }
      }
      h3 {
        font-size: 0.40625rem;
        height: 0.625rem;
        overflow: hidden;
        padding-bottom: 0.09375rem;
        padding-right: 0.15625rem;
        color: #444;
      }
      .shuaka {
        font-size: 0.28125rem;
        color: #fff;
        padding: 0.03125rem 0.125rem;
        background: #ff5512;
        display: inline-block;
        border-radius: 0.09375rem;
      }
    }
  }
}
</style>
