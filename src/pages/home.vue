<template>
  <b-container>
    <b-row align-h="center" class="mx-auto pt-5">
      <b-col cols="8" class="mb-4">
        <b-img
          src="@/assets/images/logo.svg"
          alt="home logo"
          center
          fluid
        ></b-img>
      </b-col>
      <b-col cols="12" lg="5">
        <b-nav align="center">
          <b-nav-item v-for="item in menu" :key="item.link" :to="item.link">
            {{ item.name }}
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import menu from "@/datas/pageslist";

export default {
  data() {
    return {
      menu
    };
  }
};
</script>

<style lang="scss">
.nav-item a {
  color: $color1;
  &:hover {
    font-weight: bold;
    color: $ccolor1;
  }
}
</style>
