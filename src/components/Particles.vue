<template>
  <div id="particles-js" class="">
  </div>
</template>

<script>
import "particles.js"
import ParticlesData from "@/datas/particlesjs-config.json";


export default {
  methods: {
    initParticles() {
      console.log(ParticlesData);
      window.particlesJS("particles-js", ParticlesData);
    }
  },
  mounted() {
    this.initParticles();
  }
}
</script>
