<template>
  <div id="home">
    <HomeHeader :headerdata="headerdata"></HomeHeader>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in bannerlist " :key="index">
        <img v-lazy="item" style="width:100%; height:100px;" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格列表 -->
    <van-grid :column-num="4" :border="false">
      <van-grid-item
        v-for="(icon,index) in iconlist"
        :key="index"
        :icon="icon.iconurl"
        :text="icon.name"
        @click="next(index)"
      />
    </van-grid>
    <!-- 空白 -->
    <div class="blank"></div>
    <!-- 广告 -->
    <div id="ad">
      <div class="ad_l">
        <img :src="ad1" alt />
      </div>
      <div class="ad_r">
        <img :src="banner4" alt />
        <img :src="banner5" alt />
      </div>
    </div>
    <div class="blank"></div>
    <!-- 周周乐 -->
    <div class="weekhappy">
      <Listtitle></Listtitle>
      <ul class="clearfix">
        <li>
          <a href="/happy/3229">
            <div class="img">
              <img
                src="http://qlimg.b2bvip.net/uploads/couponweek/2017/06/05/59352296667e6.jpg.thumbnail.jpg"
                original="http://qlimg.b2bvip.net/uploads/couponweek/2017/06/05/59352296667e6.jpg.thumbnail.jpg"
                alt="【1元抢购】牛肉汉堡套餐"
                style="display: inline;"
              />
              <span class="dayon quan_price">全天1.88元</span>
            </div>
            <h3>【1元抢购】牛肉汉堡套餐</h3>
            <p>
              <em>￥1.88</em>
              <del>￥16.00</del>
            </p>
          </a>
        </li>
        <li>
          <a href="/happy/4777">
            <div class="img">
              <img
                src="http://qlimg.b2bvip.net/uploads/couponweek/2017/12/23/5a3df595779fa.jpg.thumbnail.jpg"
                original="http://qlimg.b2bvip.net/uploads/couponweek/2017/12/23/5a3df595779fa.jpg.thumbnail.jpg"
                alt="香脆鸡米花1份"
                style="display: inline;"
              />
              <span class="dayon quan_price">全天16.80元</span>
            </div>
            <h3>香脆鸡米花1份</h3>
            <p>
              <em>￥16.80</em>
              <del>￥18.00</del>
            </p>
          </a>
        </li>
      </ul>
    </div>
    <div class="blank"></div>
    <!-- 通用券 -->
    <div class="conquan">
      <Listtitle :listtitle="listtitle"></Listtitle>
      <List1></List1>
    </div>
    <div class="blank"></div>
    <!-- 列表 -->
    <Homelist></Homelist>
  </div>
</template>
<script>
import HomeHeader from "./HomeHeader";
import Homelist from "./Homelist";
import Footer from "./Footer";
import List1 from "./list1";
import Listtitle from "./Listtitle";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import ad1 from "../assets/ad1.png";
export default {
  data() {
    return {
      // 轮播图
      bannerlist: [banner1, banner2, banner3, banner4, banner5],
      iconlist: [
        {
          iconurl: icon1,
          name: "百惠龙卡"
        },
        {
          iconurl: icon2,
          name: "通用券"
        },
        {
          iconurl: icon3,
          name: "周周乐"
        },
        {
          iconurl: icon4,
          name: "汽车服务"
        },
        {
          iconurl: icon5,
          name: "商城"
        },
        {
          iconurl: icon6,
          name: "美食餐饮"
        },
        {
          iconurl: icon7,
          name: "出行游玩"
        },
        {
          iconurl: icon8,
          name: "品牌街"
        }
      ],
      ad1,
      banner4,
      banner5,
      // 列表标题数据
      listtitle: "通用券",
      headerdata: {
        // addr
        addres: "青岛",
        // 头部标题
        headertitle: "登陆",
        // 左边图标
        licon: "arrow-down",
        // 右边图标 默认三点选项
        ricon:
          "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_mess.png",
        // 图标颜色
        color: "white",
        // 图标大小
        size: "12",
        // 右边图标是否显示
        riconshow: true,
        input: true
      }
    };
  },
  components: {
    HomeHeader,
    Homelist,
    Footer,
    List1,
    Listtitle
  },
  methods: {
    next(i) {
      this.$router.push({
        name: `icon${i + 1}`
      });
    }
  },
  created() {
    this.headerdata.addres = this.$store.getters.getcity;
  }
};
</script>
<style lang="scss" scoped >
.blank {
  height: 0.3125rem;
  background: #fafafa;
}
#ad {
  display: flex;
  width: 100%;
  border: 1px solid #f0f0f0;

  .ad_l {
    flex: 1;
    padding: 0.15625rem;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
  .ad_r {
    flex: 1;
    padding: 0.3125rem 0rem;
    img {
      padding: 0rem 0.078125rem;
      margin: 0.109375rem;
      width: 90%;
      height: 40%;
    }
  }
}
.weekhappy {
  padding-left: 0.15625rem;
  border: 1px solid #f0f0f0;
  ul {
    border-top: 1px solid #f0f0f0;
    padding-right: 10px;
    li {
      width: 48%;
      float: left;
      margin-right: 4%;
      padding: 12px 0;
      &:nth-child(2) {
        margin-right: 0px;
      }
      .img {
        position: relative;
        span.quan_price {
          background: #21b2bd;
        }
        span.dayon {
          font-size: 9px;
          display: inline-block;
          position: absolute;
          left: 5px;
          padding: 2px 3px;
          color: #fff;
          top: -2px;
          line-height: 1.1;
        }
        img {
          width: 100%;
        }
      }
      h3 {
        font-size: 15px;
        height: 20px;
        overflow: hidden;
        padding-bottom: 3px;
        padding-right: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 95%;
        color: #444;
      }
      p {
        font-size: 13px;
        color: #666;
        padding-right: 5px;
        padding-bottom: 2px;
        em {
          color: #ff5512;
          font-size: 14px;
          padding-right: 4px;
        }
        del {
          color: #999;
        }
      }
    }
  }
}
.conquan {
  padding-left: 0.15625rem;
  border: 1px solid #f0f0f0;
}
</style>

