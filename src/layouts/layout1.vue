<template>
  <div class="layout">
    <NavBar />
    <router-view class="pt-5 overflow-auto"/>
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
