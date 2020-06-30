<template>
  <b-navbar id="navbar" toggleable="md" class="shadow">
    <b-navbar-brand to="/">
      <b-img src="@/assets/images/logo.svg" alt="home logo" height="25px" />
    </b-navbar-brand>

    <b-navbar-toggle target="navcol"></b-navbar-toggle>

    <b-collapse id="navcol" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="item in menu" :key="item.link" :to="item.link">
          {{ item.name }}
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="login">
          login
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import menu from "./pageslist";

export default {
  data() {
    return {
      menu
    };
  }
};
</script>

<style lang="scss">
  #navbar {
    background-color: $nord4;
  }
</style>