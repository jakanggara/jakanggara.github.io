<template>
  <b-container class="app">
    <b-row id="maprow">
      <Peta />
    </b-row>
  </b-container>
</template>

<script>
import Peta from "@/components/peta.vue";
export default {
  components: {
    Peta
  }
};
</script>

<style>
#maprow {
  height: 600px;
}
</style>
