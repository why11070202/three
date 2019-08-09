<template>
  <div>
    <header class="sharedotstop">
      <div class="headerbar_qmall">
        <div class="goback">
          <a href="javascript:;" @click="back"></a>
        </div>
        <div class="headiconbox_qmall">
          <div class="icon_dots">
            <a href="javascript:;" id="icon_share"></a>
          </div>
          <div class="icon_share" id="share">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </header>
    <div class="headmallnav">
      <van-tabs background="#fcfcfc" :duration="0">
        <van-tab title=" 商品" name="a">
          <!-- 图片 -->
          <van-image-preview v-model="show" :images="pic" :loop="false" @change="onChange">
            <template v-slot:index>{{ `${index+1}/${pic.length}` }}</template>
          </van-image-preview>
          <!-- 商品信息 -->
          <div class="goodsinfobox boxshadow-t">
            <div class="goodstitle">
              <i class="qlzytag">自营</i>
              {{gooddata.title}}
              <br />
              <font color="#FF5512"></font>
            </div>
            <div class="pricebar">
              <em id="sellprice" v-text="`￥${gooddata.sellprice}`"></em>
              <del id="marketprice" v-text="`￥${gooddata.marketprice}`"></del>
            </div>
          </div>
          <div class="blank14"></div>
          <!-- 规格-->
          <van-cell>
            <template slot="title">
              <span class="custom-title">已选</span>
              <span v-text="desdata[desindex]"></span>
            </template>
            <van-icon
              slot="right-icon"
              name="http://guangzhou.m.qilong.com/Public/newmobile/default/Images/qmall/dots.png"
              style="line-height: inherit;"
              size="20"
              @click="desopen"
            />
          </van-cell>

          <div class="blank14"></div>
          <!-- 评价 -->
          <div class="all_comment_list infobox mall-comment two-comment-list">
            <div class="malltitlebar">
              消费评价(
              <font class="sumremove">0</font>)
            </div>
            <div class="zwpjtext twocommenthide" style="display:;">~暂无评价内容！</div>
            <ul style="display:none;">
              <!-- <li class="after">
                    <div class="after">
                      <div class="avatarimg"> <img src="http://16nz.com/Public/web/default/Images/0.gif"> </div>
                      <div class="f_l">
                        <div>
                          <p class="name">十十十动</p>
                        </div>
                        <div class="star">
                          <div class="on" style="width:100%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="rewdate">2016-06-12</div>
                    <p class="text" style="word-break:break-all;word-wrap:break-word;"><em>【认真评价】</em>属于粤菜，味道可以，米饭用的米较好</p>
                    <div class="picbox after layer-photos" id="24047">
                      <a href="#"><img src="http://m.16nz.com/Public/newmobile/default/Images/qmall/img02.jpg" ></a>
                      <a href="#"><img src="http://m.16nz.com/Public/newmobile/default/Images/qmall/img02.jpg" ></a>
                    </div>
                    <div class="xjhftext"><span>商家回复：</span>感谢您的评价，欢迎下次光临，感谢您的评价，欢迎下次光临，感谢您的评价欢迎下次光临，买就送10元消费劵。</div>
                    <p class="chpname"><span>美美1号润滑油</span><span>美美2号润滑油</span></p>
              </li>-->
            </ul>
            <div class="more getAll allcomment" style="cursor:pointer;display:none;">
              <a href="javascript:;">
                查看全部评价
                <i class="more"></i>
              </a>
            </div>
          </div>
          <div class="blank14"></div>
          <!-- 店铺信息 -->
          <div class="goodsinfobox borderbox">
            <div class="mshopname">
              奇龙官方旗舰店
              <em v-text="gooddata.mername"></em>
            </div>
            <div class="mshopdetcat clearfix">
              <a href="/mallshop">全部商品 158</a>
              <a href="/mallshop">进店逛逛</a>
            </div>
          </div>
          <div class="blank14"></div>
          <div
            class="drop-down"
            style="height: 20px;margin-bottom: 14px;line-height: 20px;text-align: center;color: #999;"
          >下拉查看图文详情</div>
          <div style="height:50px;"></div>

          <!-- 加入购物车 -->
          <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon info="2" icon="cart-o" text="购物车" @click="tocar" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addcar" />
            <van-goods-action-button type="danger" text="立即购买" @click="tocar" />
          </van-goods-action>

          <!-- 弹出层 -->

          <div class="alphabgbox2 attdinfo" v-show="des">
            <div class="ggselectshowbox">
              <div class="showbox">
                <div class="goodstitle">
                  <div class="img">
                    <img
                      src="http://qlimg.b2bvip.net/uploads/qmallproduct/2019/07/14/5d2aef2fda4de.jpg.main.jpg"
                    />
                  </div>
                  <h1 v-text="gooddata.title"></h1>
                  <p>
                    商品编号：JSH-A7&nbsp;&nbsp;&nbsp;
                    <!-- 库存：400 -->
                  </p>
                  <a href="javascript:;" class="close-btn" @click="closedes">×</a>
                </div>
                <div class="goodsmodelsbox">
                  <div class="modelsbox attdinfobox">
                    <p>套餐</p>
                    <dl class="dlmlist clearfix standard">
                      <dd
                        class="attdlist"
                        :class="{'hover':index===desindex}"
                        v-for="(i,index) in desdata"
                        :key="index"
                        @click="changedesindex(index)"
                      >
                        <a href="javascript:;" v-text="i"></a>
                      </dd>
                    </dl>
                  </div>
                  <div class="modelsbox numbarbox">
                    <p>数量</p>
                    <div class="numbar after">
                      <van-stepper v-model="value" integer min="1" :max="gooddata.stock*1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title="详情" name="b">
          <div v-html="gooddata.introduce" class="detailstext"></div>
        </van-tab>
        <van-tab title="评价" name="c"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 图片显示
      show: true,
      // 当前图片索引
      index: 1,
      // 规格是否显示
      des: false,
      desindex: 0,
      // 规格数量
      value: 2,
      // 用来判断是否登陆
      tel: null,
      gooddata: {},
      desdata: [
        "底座+陶瓷杯（600ml）",
        "底座+陶瓷杯+玻璃杯（600ml）",
        "底座+玻璃杯（600ml）",
        "底座+陶瓷杯（1L）"
      ],
      pic: []
    };
  },
  async created() {
    let tel = window.localStorage.getItem("tel");
    this.tel = tel;
    this.value = 1;
    let gooddata = await this.$axios("http://localhost:3000/homelist/good", {
      params: {
        id: this.$route.params.id
      }
    });
    this.gooddata = gooddata.data[0];
    this.pic = gooddata.data[0].pic.split(",");
  },
  methods: {
    changedesindex(index) {
      this.desindex = index;
    },
    // 加入购物车
    addcar() {
      if (this.des) {
        if (this.tel) {
          //登录了加入数据库
        } else {
          let res = confirm("您还未登录请先登陆");
          if (res) {
            this.$router.push({
              name: "login"
            });
          }
        }
        this.des = false;
      } else {
        this.des = true;
      }
    },
    // 显示规格
    desopen() {
      this.des = true;
    },
    // 关闭规格
    closedes() {
      this.des = false;
    },
    // 图片
    onChange(index) {
      this.index = index;
    },
    onClickIcon() {
      this.$toast("点击图标");
    },
    // 去购物车
    tocar() {
      if (this.tel) {
        this.$router.push({
          name: "car"
        });
      } else {
        let res = confirm("您还未登录请先登陆");
        if (res) {
          this.$router.push({
            name: "login"
          });
        }
      }
    },
    // 返回
    back() {
      this.$router.go(-1);
    }
  }
};
</script>


<style lang="scss" scoped>
a:visited,
a:active,
a:hover,
a:link {
  text-decoration: none;
}

.van-stepper button {
  border-radius: 50%;
}

.van-cell__title {
  text-align: left;
  font-size: 16px;
  color: #333;
  .custom-title {
    color: #666;
    margin-right: 4px;
    font-size: 17px;
  }
}
.van-goods-action {
  z-index: 11;
}
.blank14 {
  clear: both;
  height: 14px;
  line-height: 14px;
}
.sharedotstop {
  overflow: visible;
  background: #fcfcfc;
  // position: fixed;
  // top: 0px;
  .goback {
    float: left;
    height: 1.25rem;
    line-height: 1.25rem;
    padding: 0 10px 0 10px;

    position: relative;
    z-index: 3;
    a {
      background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/qmall/back.png)
        no-repeat 0 50%;
      background-size: 10px 20px;
      display: block;
      width: 10px;
      height: 1.25rem;
    }
  }
  .headiconbox_qmall {
    position: absolute;
    top: 0;
    right: 0;
    height: 1.25rem;
    z-index: 999;

    .icon_dots {
      float: right;
      height: 1.25rem;
      padding-right: 12px;
      a {
        background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/qmall/icon_dots.png)
          no-repeat 0 50%;
        width: 26px;
        height: 50px;
        background-size: 26px 26px;
        display: block;
      }
    }
    .icon_share {
      float: right;
      height: 1.25rem;
      padding-right: 12px;
      position: relative;
      a {
        background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/qmall/icon_share2.png)
          no-repeat 0 50%;
        width: 27px;
        height: 50px;
        background-size: 27px;
        display: block;
      }
    }
  }
}
.headmallnav {
  .goodsinfobox {
    background: #fff;
    .goodstitle {
      padding: 10px 12px 10px 0;
      margin-left: 12px;
      min-height: 57px;
      border-bottom: 1px solid #e5e5e5;
      font-size: 14px;
      .qlzytag {
        display: inline-block;
        font-size: 10px;
        height: 16px;
        line-height: 15px;
        border: 1px solid #ff5512;
        color: #ff5512;
        padding: 0 3px;
        border-radius: 3px;
      }
      i {
        margin-right: 4px;
        float: left;
        position: relative;
        top: 2px;
      }
    }
    .pricebar {
      height: 48px;
      line-height: 48px;
      padding: 0 12px;
      border-bottom: 1px solid #f0f0f0;
      text-align: left;
      em {
        color: #ff5512;
        font-size: 16px;
      }
      del {
        color: #bbb;
        display: inline-block;
        padding-left: 30px;
        font-size: 13px;
      }
    }
  }
  .mall-comment {
    border-bottom: 1px solid #f0f0f0;
    border-top: 1px solid #f0f0f0;
    background: #fff;
    .malltitlebar {
      height: 48px;
      border-bottom: 1px solid #f0f0f0;
      line-height: 48px;
      font-size: 15px;
      color: #666;
      margin-left: 12px;
    }
    .zwpjtext {
      font-size: 15px;
      padding: 20px;
      color: #999;
      text-align: center;
    }
  }
  .borderbox {
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
    .mshopname {
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 15px;
      border-bottom: 1px solid #eee;
      em {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        padding: 0 8px;
        font-size: 12px;
        border: 1px solid #ff5512;
        color: #ff5512;
        border-radius: 3px;
        margin-left: 6px;
      }
    }
    .mshopdetcat {
      padding: 12px 0 12px 12px;
      a {
        float: left;
        display: block;
        width: 45%;
        text-align: center;
        margin-right: 12px;
        color: #666;
        border: 1px solid #acacac;
        height: 32px;
        line-height: 32px;
      }
    }
  }
  .alphabgbox2 {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
    background: rgba(211, 208, 208, 0.5);
    z-index: 10;
    .ggselectshowbox {
      position: absolute;
      bottom: 50px;
      width: 100%;
      background: #fff;
      z-index: 13;
      height: 230px;
      .showbox {
        width: 100%;
        border-top: 1px solid #dcdcdc;
        z-index: 12;
        .goodstitle {
          height: 84px;
          padding-left: 108px;
          border-bottom: 1px solid #dcdcdc;
          position: relative;
          .img {
            width: 84px;
            height: 84px;
            overflow: hidden;
            border: 1px solid #dcdcdc;
            border-radius: 3px;
            position: absolute;
            left: 12px;
            top: -22px;
            z-index: 12;
            img {
              width: 100%;
              height: 100%;
              display: block;
              border-radius: 3px;
            }
          }
          h1 {
            font-size: 14px;
            padding-top: 5px;
            padding-right: 20px;
          }
          p {
            font-size: 10px;
            color: #999;
            padding-top: 5px;
          }
          .close-btn {
            display: block;
            height: 18px;
            width: 18px;
            font-size: 18px;
            text-align: center;
            line-height: 18px;
            overflow: hidden;
            color: #999;
            position: absolute;
            top: 6px;
            right: 6px;
            font-family: tahoma;
          }
        }
        .goodsmodelsbox {
          height: 145px;
          overflow-y: scroll;
          padding: 0 12px;
          .modelsbox {
            padding-top: 16px;
            p {
              font-size: 14px;
              color: #666;
              padding-bottom: 8px;
            }
            dl {
              dd {
                font-size: 13px;
                float: left;
                height: 26px;
                line-height: 26px;
                border-radius: 3px;
                border: 1px solid #dcdcdc;
                margin-right: 8px;
                margin-bottom: 5px;
                a {
                  display: block;
                  text-align: center;
                  padding: 0 16px;
                  min-width: 36px;
                  color: #333;
                }
              }
              .hover {
                border: 1px solid #ff5512;
                a {
                  color: #ff712c;
                }
              }
            }
          }
          .numbarbox {
            position: relative;
            padding-bottom: 30px;
            .numbar {
              position: absolute;
              right: 2px;
              top: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
