<template>
  <div>
    <HomeHeader :headerdata="headerdata"></HomeHeader>
    <form action>
      <div class="first">
        <van-cell-group>
          <van-field
            v-model="phone"
            label="账号："
            placeholder="用户名/手机号/邮箱"
            label-align="right"
            type="number"
          />
          <van-field
            v-model="password"
            label="密码："
            placeholder="请输入密码"
            label-align="right"
            :type="type?'password':'text'"
          />
        </van-cell-group>
        <a class="look" href="javascript:void(0);" @click="toggle">眼睛</a>
      </div>
      <div class="submit">
        <a href="javascript:void(0);" id="login" class="submit" @click="login">登录</a>
        <!--不可用的时候 <a href=""  class="submit none">登录</a>-->
        <span class="after">
          <a href="/backpwd" class="fl click_password">忘记密码？</a>
          <a href="/passport/quick" class="fr click_regist">短信快捷登录</a>
        </span>
      </div>
      <div class="t_p_login" style="display:">
        <p>其他登录方式</p>
        <dl class="after">
          <dd>
            <a
              href="http://open.qilong.com/oauth/oauthlogin?type=wechat&amp;callbackurl=4"
              class="weixin"
            >微信</a>
          </dd>
          <dd>
            <a
              href="http://open.qilong.com/oauth/oauthlogin?type=qq&amp;callbackurl=4"
              class="qq"
            >腾讯QQ</a>
          </dd>
          <dd>
            <a
              href="http://open.qilong.com/oauth/oauthlogin?type=sina&amp;callbackurl=4"
              class="weibo"
            >新浪微博</a>
          </dd>
        </dl>
      </div>
    </form>
    <van-popup v-model="show" v-text="popupcontent"></van-popup>
  </div>
</template>
<script>
import HomeHeader from "../components/HomeHeader.vue";
import reg from "../assets/reg.png";

export default {
  data() {
    return {
      headerdata: {
        addres: "",
        // 头部标题
        headertitle: "登录",
        // 左边图标
        licon: "arrow-left",
        // 右边图标 默认三点选项
        ricon: reg,
        // 图标颜色
        color: "white",
        // 图标大小
        size: "32",
        // 右边图标是否显示
        riconshow: true,
        input: false
      },
      phone: null,
      password: null,
      type: true,
      // 弹出层是否显示
      show: false,
      // 提示内容
      popupcontent: null,
      conn: function(con) {
        this.show = true;
        this.popupcontent = con;
        setTimeout(() => {
          this.show = false;
        }, 1200);
      },
      setCookie: function(key, val, day) {
        if (day) {
          let now = new Date();
          now.setDate(now.getDate + day);
          document.cookie =
            key + "=" + val + ";expires=" + now.toUTCString() + ";path=/";
        } else {
          document.cookie = key + "=" + val + ";path=/";
        }
      }
    };
  },
  components: {
    HomeHeader
  },
  methods: {
    // 密码是否可见
    toggle() {
      this.type = !this.type;
    },
    async login() {
      if (this.phone && this.password) {
        let msg = await this.$axios({
          method: "post",
          url: "http://localhost:3000/users/login",
          data: this.$qs.stringify({
            tel: this.phone,
            password: this.password
          })
        });
        if (msg.data != "no") {
          console.log(msg.data);
          this.setCookie("tel", this.phone, 7);
          this.setCookie("token", msg.data, 7);
          this.setCookie("islogin", true, 7);

          this.$router.push({
            name: "index"
          });
        } else {
          this.conn("账号密码错误！");
        }
      } else {
        this.conn("请输入账号/手机号/邮箱");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.van-popup {
  padding: 20px;
  border-radius: 5px;
}
form {
  padding-top: 20px;
  height: 662px;
  .first {
    border: 1px solid #dddcdc;
    background: #fff;
    .look {
      position: absolute;
      right: 22px;
      top: 122px;
      background: url(http://my.m.qilong.com/Public/newmobile/default/Images/member/icon_look.png)
        no-repeat 0 0;
      background-size: 21px;
      width: 21px;
      height: 18px;
      overflow: hidden;
      line-height: 200px;
      display: block;
      z-index: 5;
    }
  }
  .submit {
    padding: 26px 10px;
    > a {
      display: block;
      width: 100%;
      height: 52px;
      line-height: 0px;
      text-align: center;
      color: #fff;
      font-size: 20px;
      border-radius: 5px;
    }
    .submit {
      background: #eb5520;
    }
    span {
      color: #999;
      font-size: 16px;
      display: block;
      padding-top: 10px;

      a {
        color: #eb5520;
        padding-left: 10px;
      }
      .click_password {
        color: #999;
      }
    }
  }
  .t_p_login {
    margin-top: 30px;
    border-top: 1px solid #dddcdc;
    position: absolute;
    bottom: 0;
    width: 100%;
    p {
      border-top: 1px solid #fff;
      width: 100%;
      text-align: center;
      padding: 12px 0 10px;
      color: #999;
    }
    dl {
      padding: 0 40px 12px;
      dd {
        float: left;
        width: 33%;
        font-size: 12px;
        a {
          display: block;
          width: 100%;
          padding-top: 52px;
          text-align: center;
          color: #999;
          background: url(http://my.m.qilong.com/Public/newmobile/default/Images/index/weixin.png)
            no-repeat 50% 0;
          background-size: 44px;
        }
        .qq {
          background: url(http://my.m.qilong.com/Public/newmobile/default/Images/index/qq.png)
            no-repeat 50% 0;
          background-size: 44px;
        }
        .weibo {
          background: url(http://my.m.qilong.com/Public/newmobile/default/Images/index/weibo.png)
            no-repeat 50% 0;
          background-size: 44px;
        }
      }
    }
  }
}
.vell-ell {
  padding: 10px 10px 10px 0px !important;
}
</style>

