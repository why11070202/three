<template>
  <div>
     <Headerlist></Headerlist>
  </div>
</template>
<script>
/*eslint-disable*/  
import Headerlist from "../components/Headerlist";
export default {
  data() {
    return {
      active: 2
    };
  },
  components: {
    Headerlist
  }
};
</script>
