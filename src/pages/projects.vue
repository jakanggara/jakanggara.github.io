<template>
  <b-container id="projects">
    <h1>My Projects</h1>
    <b-nav>
      <b-nav-item v-for="item in projects" :key="item.desc" :to="item.title">
        {{ item.title }}
      </b-nav-item>
    </b-nav>
  </b-container>
</template>

<script>
import dataProjects from "@/datas/projects";
export default {
  data() {
    return {
      projects: dataProjects,
    }
  }
}
</script>

<style>

</style>