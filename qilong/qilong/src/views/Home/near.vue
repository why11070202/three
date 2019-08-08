<template>
  <div>
    <HomeHeader :headerdata="headerdata" />
    <van-tabs>
      <van-tab title="附近">
        <div class="stor_text_list">
          <ul id="mystore" class="clearfix">
            <li class="after" v-for="(e,index) in list1" :key="index">
              <a href="/shop/46343">
                <div class="img">
                  <img :src="e.img" :alt="e.name" />
                </div>
                <div class="textbox">
                  <h2>
                    {{e.name}}
                    <span style="float: right;color: #999;" v-text="e.near"></span>
                  </h2>
                  <div class="pricebar" v-text="e.tag"></div>
                  <div class="yhbox after" id="yhbox_46343" style="overflow: hidden; height: 44px;">
                    <div class="mdsk" v-show="e.car">
                      <i>卡</i>
                      {{e.car}}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="商品">是</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import HomeHeader from "../../components/HomeHeader";
export default {
  data() {
    return {
      headerdata: {
        addres: "青岛",
        // 头部标题
        headertitle: "附近",
        // 左边图标
        licon: "arrow-down",
        // 右边图标 默认三点选项
        ricon:
          "http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_member.png",
        // 图标颜色
        color: "white",
        // 图标大小
        size: "12",
        // 右边图标是否显示
        riconshow: false,
        input: false
      },
      list1: [],
      list2: []
    };
  },
  components: {
    HomeHeader
  },

  async created() {
    this.headerdata.addres = this.$store.getters.getcity;

    let list1 = await this.$axios(
      "https://www.easy-mock.com/mock/5d4a3449ec75c44faeef1eec/near"
    );
    // console.log(list.data);
    this.list1 = list1.data;

    let list2 = await this.$axios(
      "https://www.easy-mock.com/mock/5d4a3449ec75c44faeef1eec/near"
    );
    // console.log(list.data);
    this.list2 = list2.data;
  }
};
</script>
<style lang="scss" scoped >
.stor_text_list {
  width: 100%;
  padding-top: 15px;
  ul {
    li {
      padding: 12px;
      background: #fff;
      margin-bottom: 14px;
      a {
        .img {
          width: 120px;
          height: 120px;
          float: left;
          background: #fafafa;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 3px;
          img {
            width: 100%;
            display: block;
          }
        }
        .textbox {
          overflow: hidden;
          padding: 0 0 0 10px;
          h2 {
            font-size: 0.4375rem;
            position: relative;
            padding: 5px 0;
            font-weight: bold;
            color: #333;
            span {
              font-size: 0.28125rem;
            }
          }
          .pricebar {
            padding: 5px 0 8px;
            color: #666;
            font-size: 0.34375rem;
          }
          .yhbox {
            padding-top: 2px;
            position: relative;
            .mdsk {
              width: 100%;
              float: left;
              margin-bottom: 4px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #444;
              font-size: 0.4rem;
              i {
                display: inline-block;
                background: #26a5f6;
                color: #fff;
                border-radius: 3px;
                width: 20px;
                height: 20px;
                font-size: 12px;
                padding: 0px;
                line-height: 20px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>


