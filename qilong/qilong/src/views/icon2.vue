<template>
  <div>
    <Header :headerdata="headerdata"></Header>
    <List1 :listdata="list"></List1>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import List1 from "../components/list1";
import Footer from "../components/Footer";

export default {
  data() {
    return {
      headerdata: {
        addres: "",
        // 头部标题
        headertitle: "通用券",
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
        riconshow: true
      },
      list: []
    };
  },
  components: {
    Header,
    List1,
    Footer
  },
  async created() {
    let list = await this.$axios(
      "https://www.easy-mock.com/mock/5d4a3449ec75c44faeef1eec/tongyong"
    );
    // console.log(list.data);
    this.list = list.data;
  }
};
</script>
