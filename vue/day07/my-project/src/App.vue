<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
// import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Nav,

    Footer
  }
};
</script>
<style scoped>
header {
  height: 100px;
}
nav {
  height: 40px;
}
</style>








