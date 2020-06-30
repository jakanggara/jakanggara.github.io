<template>
  <b-container class="vh-100">
    <b-row align-h="center">
      <b-img src="@/assets/images/logo.svg" alt="home logo" fluid></b-img>
    </b-row>
    <b-row align-h="center">
      <b-nav>
        <b-nav-item v-for="item in menu" :key="item.link" :to="item.link">
          {{ item.name }}
        </b-nav-item>
      </b-nav>
    </b-row>
  </b-container>
</template>

<script>
import menu from "@/components/pageslist";

export default {
  data() {
    return {
      menu
    };
  }
};
</script>

<style lang="scss">
  body {
    background-color: $nord6;
  }
</style>