<template>
  <div>
    <HomeHeader :headerdata="headerdata"></HomeHeader>
    <form>
      <div class="first">
        <van-cell-group>
          <van-field
            v-model="phone"
            label="手机号："
            placeholder="请输入手机号"
            label-align="right"
            type="number"
          />
          <van-field
            v-model="code"
            center
            :clearable="false"
            label="校验码："
            placeholder="请输入图片校验"
            label-align="right"
          ></van-field>
          <div v-text="rightcode" class="code" @click="change"></div>
          <van-field
            v-model="sms"
            center
            clearable
            label="验证码："
            placeholder="请输入手机验证码"
            label-align="right"
          >
            <van-button slot="button" plain type="danger" size="small" @click="send">获取验证码</van-button>
          </van-field>
          <van-field
            v-model="password"
            label="密码："
            placeholder="请输入6-12位登录密码"
            label-align="right"
            type="password"
          />
          <van-field
            v-model="repassword"
            label="确认密码："
            placeholder="请确认您的新密码"
            label-align="right"
            type="password"
          />
        </van-cell-group>
      </div>
      <div style="padding:20px 10px 10px">
        <input type="checkbox" value="1" id="tree" :checked="check" @click="toggle" />
        我已阅读并同意
        <a
          href="http://m.qilong.com/explain/reg_agreement"
          style="color:#FF5512;"
        >《奇龙网用户注册协议》</a>
      </div>
      <div class="submit">
        <a href="javascript:void(0);" id="subreg" class="submit" @click="reg">立即注册</a>
        <!--不可用的时候 <a href=""  class="submit none">立即注册</a>-->
        <span class="click_login">
          已有帐号
          <a href="#/login">登录</a>
        </span>
      </div>
    </form>
    <!-- 弹出层 -->
    <van-popup v-model="show" v-text="popupcontent"></van-popup>
  </div>
</template>
<script>
import HomeHeader from "../components/HomeHeader.vue";
export default {
  data() {
    return {
      headerdata: {
        addres: "",
        // 头部标题
        headertitle: "注册",
        // 左边图标
        licon: "arrow-left",
        // 右边图标 默认三点选项
        ricon:
          "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_member.png",
        // 图标颜色
        color: "white",
        // 图标大小
        size: "32",
        // 右边图标是否显示
        riconshow: false,
        input: false
      },
      phone: null,
      code: null,
      sms: null,
      password: null,
      repassword: null,
      rightsms: null,
      // 正确的验证码
      rightcode: null,
      // 弹出层是否显示
      show: false,
      // 提示内容
      popupcontent: null,
      check: true,
      conn: function(con) {
        this.show = true;
        this.popupcontent = con;
        setTimeout(() => {
          this.show = false;
        }, 1200);
      },
      securityCode: function() {
        var arr =
          "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        var num = "";
        for (let i = 0; i < 4; i++) {
          //创建随机数作为下标
          var sub = parseInt(Math.random() * arr.length);
          //随机数拼接
          num += arr[sub];
        }
        // console.log(num);
        return num;
      }
    };
  },
  components: {
    HomeHeader
  },
  created() {
    this.rightcode = this.securityCode();
  },

  methods: {
    toggle() {
      this.check = !this.check;
    },

    async reg() {
      if (this.phone && this.password && this.repassword && this.sms) {
        if (this.sms != this.rightsms) {
          this.conn("验证码不正确");
        } else {
          if (this.repassword != this.password) {
            this.conn("密码不一致");
          } else {
            if (!this.check) {
              this.conn("您还未同意协议");
            } else {
              let msg = await this.$axios({
                method: "post",
                url: "http://localhost:3000/users/add",
                data: this.$qs.stringify({
                  tel: this.phone,
                  password: this.password
                })
              });
              console.log(msg);
              if (msg.data === "yes") {
                this.conn("注册成功");
                this.$router.push({
                  name: "login"
                });
              } else {
                this.conn("注册失败");
              }
            }
          }
        }
      } else {
        this.conn("请输完整的信息");
      }
    },
    change() {
      this.rightcode = this.securityCode();
    },
    async send() {
      if (!this.code) {
        this.conn("请输入图片验证码");
      } else {
        let reg = /^1[3-9]\d{9}$/;
        let res = reg.test(this.phone);
        // res = true;
        if (!res) {
          this.conn("请输入正确的手机号");
          this.rightcode = this.securityCode();
        } else {
          // 数据库查找是否已注册
          let res = await this.$axios("http://localhost:3000/users/tel", {
            params: {
              tel: this.phone
            }
          });
          if (res.data === "no") {
            this.conn("该手机已注册");
          } else {
            if (this.code != this.rightcode) {
              this.conn("图片验证码不正确");
              this.rightcode = this.securityCode();
            } else {
              // 发送验证码
              let data = await this.$axios({
                method: "post",
                url: "http://localhost:3000/duan/xin",
                data: this.$qs.stringify({
                  tel: this.phone
                })
              });
              if (data.data.jsonObj.reason != "操作成功") {
                console.log(data.data.nums);
                this.rightsms = data.data.nums;
                this.conn("验证码发送失败");
              } else {
                console.log(data.data.nums);
                this.rightsms = data.data.nums;
              }
            }
          }
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
form {
  padding-top: 20px;
  height: 662px;

  .first {
    border: 1px solid #dddcdc;
    background: #fff;
    .code {
      position: absolute;
      width: 74px;
      height: 34px;
      border: 1px solid greenyellow;
      z-index: 222;
      top: 49px;
      right: 16px;
      font-size: 20px;
      line-height: 34px;
      text-align: center;
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
    .none {
      cursor: none;
      background: #ccc;
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
    }
  }
}
.van-popup {
  padding: 20px;
  border-radius: 5px;
}
.van-button--normal {
  padding: 0 12px;
  font-size: 14px;
  height: 32px;
  line-height: 32px;
}
</style>

