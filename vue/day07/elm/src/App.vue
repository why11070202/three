<template>
  <div id="app">
    <Header></Header>
    <Icon></Icon>
    <List></List>
    <Footer></Footer>
    <!-- <Fdj></Fdj> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Icon from "./components/Icon.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import Fdj from "./components/fdj.vue";

export default {
  name: "app",
  components: {
    Header,
    Icon,
    List,
    Footer,
    Fdj
  }
};
</script>
<style scoped>
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

