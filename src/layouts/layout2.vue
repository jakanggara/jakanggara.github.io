<template>
  <b-container fluid class="overflow-hidden">
    <Particles domId="coba" :config=ParticlesData class="layout"></Particles>
    <router-view class="position-absolute fixed-top" />
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
  
</style>