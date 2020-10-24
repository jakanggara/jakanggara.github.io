<template>
  <div class="layout">
    <NavBar class="mb-5" />
    <router-view class="overflow-auto"/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
body, html {
  background-color: $nord6;
  height: 100%;
}
.layout {
  height: 100%;
}
</style>
