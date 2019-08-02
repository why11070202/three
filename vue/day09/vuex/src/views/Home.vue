<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}
header {
  height: 20%;
}

Icon {
  height: 15%;
}
List {
  height: 55%;
}
footer {
  height: 10%;
}
</style>
