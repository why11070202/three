<template>
  <div>
    <HomeHeader :headerdata="headerdata" />
    <div class="allcity">
      <div class="title">全部城市</div>
      <div class="citylist">
        <dl class="clearfix">
          <dd v-for="(e,index) in indexList" :key="index">
            <a :href="`city#${e}`" v-text="e"></a>
          </dd>
        </dl>
        <ol>
          <li class="clearfix" v-for="(i,index) in citylist" :key="index+1">
            <div class="fl cityindexes" :id="i.title" v-text="i.title"></div>
            <div class="fl cataloglist">
              <ul class="clearfix">
                <li v-for="(v,index) in i.city" :key="index">
                  <a v-text="v" @click="city(v)"></a>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </div>
    <div class="gototop" id="gototop" v-show="totop" @click="to">
      <a href="javascript:">返回顶部</a>
    </div>
  </div>
</template>
<script>
import HomeHeader from "../components/HomeHeader";

export default {
  data() {
    return {
      headerdata: {
        addres: "",
        // 头部标题
        headertitle: "选择城市",
        // 左边图标
        licon: "arrow-left",
        // 右边图标 默认三点选项
        ricon:
          "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_home.png",
        // 图标颜色
        color: "white",
        // 图标大小
        size: "32",
        // 右边图标是否显示
        riconshow: true,
        input: false
      },
      indexList: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      citylist: [],
      totop: false
    };
  },
  components: {
    HomeHeader
  },
  async created() {
    let citylist = await this.$axios(
      "https://www.easy-mock.com/mock/5d4a3449ec75c44faeef1eec/city"
    );
    // console.log(list.data);
    this.citylist = citylist.data;

    window.onscroll = () => {
      // 吸顶菜单
      //   console.log(window.scrollY);
      if (window.scrollY >= 700) {
        this.totop = true;
      } else {
        this.totop = false;
      }
    };
  },

  destroyed: function() {
    window.onscroll = null;
  },
  methods: {
    to() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    city(city) {
      this.$store.dispatch("setCity", city);
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.allcity {
  width: 100%;
  .title {
    height: 38px;
    line-height: 38px;
    padding-left: 10px;
    font-size: 16px;
    color: #999;
  }
  .citylist {
    background: #fff;
    dl {
      width: 100%;
      padding: 12px 0;
      dd {
        float: left;
        width: 16%;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        text-align: center;
        a {
          color: #ff5512;
          display: inline-block;
          font-size: 0.34375rem;
        }
      }
    }
    ol {
      .clearfix {
        padding: 10px;
        border-top: 1px solid #f0f0f0;
        .cityindexes {
          width: 18%;
          font-size: 38px;
          color: #666;
        }
        .cataloglist {
          width: 82%;
          font-size: 15px;
          color: #666;
          li {
            padding-right: 50px;
            line-height: 38px;
            height: 38px;
            float: left;

            a:link,
            a:visited,
            a:hover,
            a:active {
              color: #444;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
.gototop {
  position: fixed !important;
  bottom: 80px;
  right: 10px;
  width: 42px;
  height: 42px;
  z-index: 99;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
  a {
    display: block;
    width: 42px;
    height: 42px;
    line-height: 200px;
    overflow: hidden;
    background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/gotop.png)
      no-repeat 0 0;
    background-size: 42px 42px;
  }
}
</style>


