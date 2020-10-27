<template>
  <b-container id="profile" class="zero-scrollbar">
    <b-media>
      <h1>My Profile</h1>
      <p>
        I am a Geological Graduate that have great interest in Recent
        Technologies. I also developed skills to make web-apps and mobile apps.
      </p>
    </b-media>
    <b-media>
      <h2>Skillsets</h2>
      <b-row>
        <b-col
          sm="3"
          class="pb-2 px-1"
          v-for="item in skills"
          :key="item.title"
        >
          <b-card>
            <b-card-title>
              {{ item.title }}
            </b-card-title>
            <b-media right-align>
              <template>
                <b-img :src="imgResolve(item.img)" height="50px" right />
              </template>
              <p>{{ item.desc }}</p>
            </b-media>
          </b-card>
        </b-col>
      </b-row>
    </b-media>
  </b-container>
</template>

<script>
import dataSkills from "@/datas/skills";
export default {
  data() {
    return {
      skills: dataSkills
    };
  },
  methods: {
    imgResolve(img) {
      return `static/${img}`;
    }
  }
};
</script>
