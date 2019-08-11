<template>
  <div style="background:#FAFAFA;min-height: 660px;">
    <header class="sharedotstop">
      <div class="headerbar_qmall">
        <div class="goback" @click="back">
          <span></span>
        </div>
        <div class="headiconbox_qmall">
          <div class="icon_dots">
            <span></span>
            <em style="display:none;"></em>
          </div>
          <div class="carttext editcart">
            <span v-text="edit?'编辑':'完成'" @click="changedel"></span>
          </div>
        </div>
      </div>
    </header>
    <div style="height:50px;"></div>

    <section>
      <div class="mallcart-list" v-show="show">
        <div class="cttitle">
          <span class="select tisetselect" @click="selectAll()" :class="{'selected':ckeckallflag}"></span>奇龙自营
        </div>
        <ul>
          <li v-for="(item,index) in carlist " :key="index">
            <span
              class="select lisetselect"
              :class="{'selected':item.checked}"
              @click="selectitem(item)"
            ></span>
            <div class="after imginfobox">
              <div class="img">
                <img :src="item.pic.split(',')[0]" />
              </div>
              <div class="text">
                <h2 v-text="item.title"></h2>
                <p>颜色：单层饭盒（颜色随机）&nbsp;&nbsp;&nbsp;有货</p>
                <p>
                  <em v-text="`￥${item.sellprice}`"></em>
                </p>
                <div class="numbar after">
                  <van-stepper
                    v-model="item.num"
                    integer
                    min="1"
                    :max="item.stock"
                    async-change
                    @plus="plus(item.num,item.id)"
                    @minus="minus(item.num,item.id)"
                    @blur="blur(item.num,item.id)"
                  />
                </div>
              </div>
            </div>
            <van-cell title="抵用券" is-link value="选择抵用券" />
          </li>
        </ul>
      </div>

      <div class="tips_none" v-show="!show">
        <i class="icon"></i>亲，购物车已经空了…
      </div>
    </section>

    <div class="getbuybar-fix">
      <div class="getbuybar">
        <p>
          总价：￥
          <font id="payprice" v-text="total"></font>
          <span>
            已优惠￥
            <font id="favprice">0.00</font> 抵扣￥
            <font id="vouprice">0.00</font>
          </span>
        </p>
        <span class="joincart-btn goconfirm" v-text="edit?'去结算':'删除'" @click="next()"></span>
        <div class="lxkefu">
          <a href="tel:18924850344">联系客服</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: null,
      carlist: [],
      ckeckallflag: true,
      total: 0,
      edit: true,
      // 购物车是否显示
      show: false,
      calculate: function() {
        // 金额
        var total = 0;
        this.carlist.forEach(item => {
          if (item.checked) {
            total += item.sellprice * item.num;
          }
        });
        this.total = total.toFixed(2);
      },
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
  async created() {
    let tel = this.getCookie("tel");
    this.tel = tel;

    let cardata = await this.$axios("http://localhost:3000/car/car", {
      params: {
        tel
      }
    });
    // console.log(cardata.data);
    cardata.data.forEach(async item => {
      let good = await this.$axios("http://localhost:3000/car/carlist", {
        params: {
          id: item.id
        }
      });
      good.data[0].num = item.num;
      good.data[0].checked = true;
      this.carlist.push(good.data[0]);

      // console.log(this.carlist.length);
      if (this.carlist.length) {
        this.show = true;
      } else {
        this.show = false;
      }

      this.calculate();
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    next() {
      if (this.edit) {
        // 结算
        console.log("去结算");
      } else {
        // 删除
        this.carlist.forEach(item => {
          if (item.checked) {
            let id = item.id;
            // console.log(id);
            this.$axios("http://localhost:3000/car/del", {
              params: {
                id
              }
            });
            // this.carlist = this.$store.getters.getCarlist;
            this.carlist = this.carlist.filter(i => i.id != item.id);
            // console.log(this.carlist.filter(i => i.id != item.id));
          }
        });
        this.calculate();
        if (this.carlist.length) {
          this.show = true;
        } else {
          this.show = false;
        }
      }
    },

    changedel() {
      this.edit = !this.edit;
      this.ckeckallflag = false;
      this.carlist.forEach(item => {
        item.checked = false;
      });
      this.total = 0;
    },
    // 数量加
    plus(num, id) {
      console.log(num, id);
      this.$axios("http://localhost:3000/car/update", {
        params: {
          num,
          id,
          tel: this.tel
        }
      });
      this.calculate();
    },
    minus(num, id) {
      this.$axios("http://localhost:3000/car/update", {
        params: {
          num,
          id,
          tel: this.tel
        }
      });
      this.calculate();
    },
    blur(num, id) {
      this.$axios("http://localhost:3000/car/update", {
        params: {
          num: num,
          id,
          tel: this.tel
        }
      });
      this.calculate();
    },
    // 选中单品
    selectitem(item) {
      item.checked = !item.checked;
      var itemisChecked = [];
      this.carlist.forEach((item, index) => {
        if (item.checked) {
          itemisChecked.push(index);
        }
      });
      if (itemisChecked.length == this.carlist.length) {
        this.ckeckallflag = true;
      } else {
        this.ckeckallflag = false;
      }

      // 金额
      this.calculate();
    },
    // 全选
    selectAll() {
      this.ckeckallflag = !this.ckeckallflag;
      if (this.ckeckallflag) {
        this.carlist.forEach((item, index) => {
          item.checked = true;
        });
      } else {
        this.carlist.forEach((item, index) => {
          item.checked = false;
        });
      }
      // 金额
      this.calculate();
    }
  }
};
</script>


<style lang="scss" scoped>
.blank14 {
  clear: both;
  height: 14px;
  line-height: 14px;
}
header {
  overflow: visible;
  .headerbar_qmall {
    height: 49px;
    overflow: hidden;
    background: #fcfcfc;
    position: fixed;
    z-index: 10;
    width: 100%;
    border-bottom: 1px solid #ccc;
    .goback {
      float: left;
      height: 49px;
      line-height: 49px;
      padding: 0 10px 0 10px;
      background: #fcfcfc;
      position: relative;
      z-index: 3;
      span {
        background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/qmall/back.png)
          no-repeat 0 50%;
        background-size: 10px 20px;
        display: block;
        width: 10px;
        height: 49px;
      }
    }
    .headtitle {
      font-size: 17px;
      color: #333;
      text-align: center;
      margin: 0 60px;
      height: 49px;
      line-height: 49px;
      overflow: hidden;
    }
    .headiconbox_qmall {
      position: absolute;
      top: 0;
      right: 0;
      height: 49px;
      .icon_dots {
        float: right;
        height: 49px;
        padding-right: 12px;

        span {
          background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/qmall/icon_dots.png)
            no-repeat 0 50%;
          width: 27px;
          height: 50px;
          background-size: 25px;
          display: block;
        }
      }
      .carttext {
        float: right;
        height: 49px;
        padding-right: 12px;
        font-size: 14px;
        line-height: 49px;
      }
    }
  }
}
.mallcart-list {
  .select {
    display: block;
    width: 18px;
    background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/select02.png)
      no-repeat;
    height: 18px;
    background-size: 18px 18px;
    position: absolute;
  }
  .selected {
    background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/selected02.png)
      no-repeat;
    background-size: 18px 18px;
  }
  background: #fff;
  margin-bottom: 14px;
  .cttitle {
    height: 48px;
    line-height: 48px;
    font-size: 15px;
    margin-left: 42px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    .select {
      left: -30px;
      top: 15px;
    }
  }
  li {
    border-bottom: 1px solid #f0f0f0;
    padding-left: 42px;
    position: relative;
    .select {
      left: 12px;
      top: 42px;
    }
    .imginfobox {
      padding: 10px 12px 10px 0;
      position: relative;
      border-bottom: 1px solid #f0f0f0;
      .img {
        width: 80px;
        height: 80px;
        border: 1px solid #e5e5e5;
        float: left;
        margin-right: 8px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .text {
        overflow: hidden;
        min-height: 82px;
        h2 {
          font-size: 14px;
          min-height: 34px;
          line-height: 1.2;
        }
        p {
          color: #999;
          font-size: 12px;
          padding-top: 5px;
          em {
            font-size: 15px;
            color: #ff712c;
          }
        }
        .numbar {
          position: absolute;
          right: 12px;
          bottom: 10px;
        }
      }
    }
  }
}
.tips_none {
  margin: 30% auto;
  text-align: center;
  font-size: 18px;
  line-height: 1.8;
  padding: 92px 30px;
  background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/tipsicon02.png)
    no-repeat 50% 0;
  background-size: 80px;
  color: #bbb;
}
.getbuybar-fix {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 11;
  .getbuybar {
    border-top: 1px solid #f0f0f0;
    height: 49px;
    line-height: 49px;
    width: 100%;
    position: relative;
    background: #fff;
    p {
      padding-left: 12px;
      font-size: 15px;
      color: #333;
      line-height: 1.2;
      padding-top: 7px;
      span {
        display: block;
        font-size: 11px;
      }
    }
    .joincart-btn {
      position: absolute;
      right: 0;
      top: -1px;
      bottom: 0;
      background: #ff5512;
      text-align: center;
      display: block;
      color: #fff;
      font-size: 15px;
      width: 40%;
      min-width: 120px;
      max-width: 144px;
    }
  }
}
</style>

