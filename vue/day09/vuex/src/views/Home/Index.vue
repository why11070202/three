<template>
<div>
   <Header></Header>
    <Icon></Icon>
    <List></List>
</div>
</template>
<script>
import Header from "@/components/Header.vue";
import Icon from "@/components/Icon.vue";
import List from "@/components/List.vue";

export default {
  components: {
    Header,
    Icon,
    List,
  }
}
</script>