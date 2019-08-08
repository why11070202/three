<template>
  <div>
    <HomeHeader :headerdata="headerdata" />
    <section>
      <div class="activity_list">
        <ul id="activity_list" class="clearfix">
          <li class="after gotoinfo" v-for="(i,index) in list" :key="index">
            <a :href="i.applink">
              <div class="img">
                <img :src="i.thumbimg" alt="i.title" class="img" />
                <span class="hdicon">
                  <img
                    src="http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/hdicon02.png"
                    alt="进行中"
                  />
                </span>
              </div>
              <div class="text">
                <h3 v-text="i.title"></h3>
                <p v-text="i.introduce"></p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import HomeHeader from "../../components/HomeHeader";

export default {
  data() {
    return {
      headerdata: {
        addres: "",
        // 头部标题
        headertitle: "活动列表",
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
      list: []
    };
  },
  components: {
    HomeHeader
  },
  async created() {
    let list = await this.$axios(
      "https://www.easy-mock.com/mock/5d4a3449ec75c44faeef1eec/activity"
    );
    // console.log(list.data);
    this.list = list.data;
  }
};
</script>

<style lang="scss" scoped>
.activity_list {
  padding-top: 14px;
  li {
    min-height: 84px;
    overflow: hidden;
    background: #fff;
    position: relative;
    margin-bottom: 14px;
    a {
      &:link {
        text-decoration: none;
        h3 {
          color: #333;
        }
        p {
          color: #666;
        }
      }
      &:visited {
        text-decoration: none;
        h3 {
          color: #333;
        }
        p {
          color: #666;
        }
      }

      .text {
        overflow: hidden;
        height: 100%;
        h3 {
          padding-top: 8px;
          line-height: 20px;
          height: 40px;
          overflow: hidden;
          font-size: 15px;
          padding-right: 60px;
          color: #333;
        }
        p {
          font-size: 13px;
          line-height: 1.4;
          /* height: 20px; */
          overflow: hidden;
          padding-top: 5px;
          padding-right: 60px;
          padding-bottom: 5px;
          color: #666;
        }
      }
      .img {
        width: 70px;
        height: 84px;
        overflow: hidden;
        float: left;
        margin-right: 6px;
        position: relative;
        img {
          background: url(http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/qllogobg.png)
            no-repeat 50% 50%;
          background-size: 100%;
        }
        .hdicon {
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          display: block;
          img {
            background: none;
            width: 40px;
            border: 0;
          }
        }
      }
    }
  }
}
</style>


