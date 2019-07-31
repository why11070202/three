<template>
  <div id="app">
    <Header></Header>
    <Icon></Icon>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Icon from "./components/Icon.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Icon,
    List,
    Footer
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

