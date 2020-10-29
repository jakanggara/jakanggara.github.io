<template>
  <b-container fluid class="overflow-hidden layout">
    <router-view class="z999" />
    <Particles class="position-absolute bro"></Particles>
  </b-container>
</template>

<script>
import Particles from "@/components/Particles.vue";
import ParticlesData from "@/datas/particlesjs-config.json";

export default {
  components: {
    Particles
  },
  data() {
    return {
      ParticlesData
    }
  }
}
</script>

<style lang="scss" scoped>
  .z999 {
    z-index: 999;
  }
  .bro {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>