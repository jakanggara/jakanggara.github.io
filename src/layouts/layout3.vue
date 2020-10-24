<template>
  <div class="layout">
    <NavBar class="" />
    <router-view class="overflow-auto pt-5"/>
    <Footer class="mh-10" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/about_footer.vue";

export default {
  components: {
    NavBar,
    Footer
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
  display: flex;
  flex-flow: column;
}
</style>
