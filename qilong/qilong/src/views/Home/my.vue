<template>
  <div>
    <div class="userlogobar">
      <!--已登录 会员头像 -->
      <div class="userlogo after">
        <div class="imgborder">
          <div class="imgborder2">
            <div class="img">
              <img src="http://my.m.qilong.com/Public/web/default/Images/nopic.gif" alt="why0202" />
            </div>
          </div>
        </div>
        <div class="fl usertext">
          <p v-text="username"></p>
          <span class="level">普通会员</span>
        </div>
      </div>
      <div class="settingicon">
        <a href="#/set"></a>
      </div>
      <div class="plusmemberlink">
        <a href="/PrivilegeInfo/getPrivilegeInfo?privilegeId=2"></a>
      </div>
    </div>
    <div class="white_box money_bar my_menu_box">
      <!--<div class="title">我的余额</div>-->
      <dl>
        <dd>
          <a href="/mywallet/mywallet">
            <em>0</em>余额
          </a>
        </dd>
        <dd>
          <a href="/mywallet/cardlist">
            <em>0</em>卡包
          </a>
        </dd>
        <dd>
          <a href="/mywallet/ticketlist">
            <em>0</em>奇龙券
          </a>
        </dd>
        <!--<dd><a href="#"><em>0</em>购物车</a></dd>-->
      </dl>
    </div>
    <Blank />
    <div class="cell">
      <van-cell
        v-for="(item,index) in celldata"
        :key="index"
        :title="item.titie"
        :icon="item.icon"
        is-link
      />

      <van-cell
        title="商家合作"
        value="免费开店，轻松赚钱"
        is-link
        icon="http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_15.png"
      />
    </div>
  </div>
</template>
<script>
import Blank from "../../components/Blank";
export default {
  data() {
    return {
      celldata: [
        {
          titie: "通用券订单",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_19.png"
        },
        {
          titie: "门店订单",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_20.png"
        },
        {
          titie: "商城订单",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_20.png"
        },
        {
          titie: "品牌街订单",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/index/mainnav20.png"
        },
        {
          titie: "我的积分",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_10.png"
        },
        {
          titie: "我的评价",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_07.png"
        },
        {
          titie: "我的抵用券",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_14.png"
        },
        {
          titie: "我的特权",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_18.png"
        },
        {
          titie: "便民服务",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_13.png"
        },
        {
          titie: "积分商城",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_10.png"
        },
        {
          titie: "奇龙客户端",
          icon:
            "http://my.m.qilong.com/Public/newmobile/default/Images/member/title_icon_05.png"
        }
      ],
      username: "游客",
      getCookie: function(key) {
        let cookie = document.cookie;
        var arr = cookie.split("; ");
        for (let i = 0; i < arr.length; i++) {
          let arr2 = arr[i].split("=");
          if (key == arr2[0]) {
            return arr2[1];
          }
        }
      }
    };
  },
  components: {
    Blank
  },
  created() {
    let name = this.getCookie("tel");
    if (name) {
      this.username = name;
    }
  }
};
</script>

<style lang="scss" scoped>
.van-cell__left-icon {
  font-size: 22px;
  margin-right: 8px;
}
.van-cell {
  font-size: 16px;
}
.van-cell__value {
  font-size: 14px;
}
.cell {
  background: #fafafa;
  > div {
    &:nth-child(4) {
      margin-bottom: 10px;
    }
    &:nth-child(8) {
      margin-bottom: 10px;
    }
    &:nth-child(10) {
      margin-bottom: 10px;
    }
    &:nth-child(11) {
      margin-bottom: 10px;
    }
  }
}
.userlogobar {
  height: 176px;
  overflow: hidden;
  width: 100%;
  background: url(http://my.m.qilong.com/Public/newmobile/default/Images/member/userbg.jpg)
    no-repeat 50% 0%;
  background-size: 100% 100%;
  max-width: 750px;
  position: relative;
  .userlogo {
    padding: 40px 0 10px 40px;
    margin: 0 auto;
    text-align: left;
    .imgborder {
      border-radius: 100%;
      width: 74px;
      height: 74px;
      background: rgba(255, 255, 255, 0.2);
      padding: 3px;
      float: left;
      .imgborder2 {
        width: 70px;
        height: 70px;
        background: #fff;
        border-radius: 100%;

        .img {
          width: 70px;
          height: 70px;
          overflow: hidden;
          border-radius: 100%;
          img {
            width: 110%;
            height: 110%;
            position: relative;
            top: -2px;
            left: -2px;
          }
        }
      }
    }
    .usertext {
      padding-top: 18px;
      p {
        color: #fff;
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 5px;
        text-indent: 12px;
      }
      .level {
        display: block;
        font-size: 11px;
        color: #fff;
        background: #cc450e;
        border-radius: 2px;
        text-align: center;
        margin-left: 10px;
        padding: 0;
        display: block;
        height: 15px;
        line-height: 15px;
        width: 64px;
      }
    }
  }
  .settingicon {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 26px;
    height: 26px;
    a {
      width: 26px;
      height: 26px;
      display: block;
      background: url(http://my.m.qilong.com/Public/newmobile/default/Images/member/icon_setting.png)
        no-repeat;
      background-size: 26px;
    }
  }
  .plusmemberlink {
    position: absolute;
    width: 90px;
    height: 40px;
    right: 0;
    bottom: 10px;
    a {
      background: url(http://my.m.qilong.com/Public/newmobile/default/Images/member/qilong_my_plus3.png)
        no-repeat 0 0;
      background-size: 90px;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.my_menu_box {
  padding-left: 10px;
  background: #fff;
  dl {
    height: 68px;
    display: table;
    width: 100%;
    dd {
      display: table-cell;
      width: 25%;
      text-align: center;
      vertical-align: middle;
      color: #666;
      font-size: 12px;
      a {
        text-decoration: none;
        color: #444;
        em {
          display: block;
          font-size: 20px;
        }
      }
      a:link,
      a:visited,
      a:hover,
      a:active {
        color: #444;
      }
    }
  }
}
.blank14 {
  clear: both;
  height: 14px;
  line-height: 14px;
}
</style>
