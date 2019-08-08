<template>
  <div>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/Footer";

export default {
  data() {
    return {};
  },
  components: {
    Footer
  }
};
</script>

