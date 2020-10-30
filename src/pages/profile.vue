<template>
  <b-container id="profile" class="zero-scrollbar">
    <b-modal :title="datashow.title" v-model="detail" centered hide-footer>
      <b-media right-align>
        <template>
          <b-img :src="imgResolve(datashow.img)" height="100px" right />
        </template>
        <p>{{ datashow.desc }}</p>
      </b-media>
    </b-modal>
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
          cols="6"
          class="pb-2 px-1"
          v-for="item in skills"
          :key="item.title"
        >
          <b-card v-on:click="toggleSkill(item)">
            <b-card-title>
              {{ item.title }}
            </b-card-title>
            <b-media right-align>
              <template>
                <b-img :src="imgResolve(item.img)" height="50px" right />
              </template>
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
      datashow: {
        title: "",
        img: "",
        desc: "",
      },
      detail: 'none',
      skills: dataSkills
    };
  },
  methods: {
    imgResolve(img) {
      return `static/${img}`;
    },
    toggleSkill(x) {
      if(x==0) {
        this.detail="none";
      } else {
        this.detail="block";
        this.datashow = x;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .z999 {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: beige;
  }
</style>