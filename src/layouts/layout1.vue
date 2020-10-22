<template>
  <div class="layout">
    <NavBar class="mb-5" />
    <router-view />
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
body {
  background-color: $nord6;
}
</style>
