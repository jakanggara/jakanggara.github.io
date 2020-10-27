<template>
  <b-container class="about">
    <b-media>
      <h1>My Profile</h1>
      <p>
        I am a Geological Graduate that have great interest in Recent Technologies. I also developed skills to make web-apps and mobile apps.
      </p>
    </b-media>
    <b-media>
      <h2>Skillsets</h2>
      <b-card v-for="item in skills" :key="item.title">
        <p>{{ item.title }}</p>
        <b-img :src="imgResolve(item.img)" height="50px" right />
      </b-card>
    </b-media>
  </b-container>
</template>

<script>
import dataSkills from "@/datas/skills";
export default {
  data() {
    return {
      skills: dataSkills
    }
  },
  methods: {
    imgResolve(img) {
      return `static/${img}`;
    }
  }
}
</script>

<style>

</style>