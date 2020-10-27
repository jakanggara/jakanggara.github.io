<template>
  <b-container id="projects">
    <h1 class="mb-4">My Projects</h1>
    <b-row>
      <b-col
        sm="6"
        class="px-2"
        v-for="item in projects"
        :key="item.desc"
        :to="item.title"
      >
        <b-card
          :border-variant="statusHandle(item.status, 1)"
          class="mb-3 shadow"
        >
          <b-card-title class="mb-1">
            {{ item.title }}
          </b-card-title>
          <b-card-sub-title class="mb-2">
            <b-badge pill :variant="statusHandle(item.status, 1)">
              {{ statusHandle(item.status) }}</b-badge
            >
          </b-card-sub-title>
          <p class="mb-1">{{ item.desc }}</p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import dataProjects from "@/datas/projects";
export default {
  data() {
    return {
      projects: dataProjects
    };
  },
  methods: {
    statusHandle(status, vv) {
      if (status == 0) {
        if (vv) {
          return "danger";
        }
        return "deprecated";
      } else if (status == 1) {
        if (vv) {
          return "success";
        }
        return "maintained";
      } else if (status == 2) {
        if (vv) {
          return "primary";
        }
        return "in progress";
      } else {
        if (vv) {
          return "secondary";
        }
        return "unknown";
      }
    }
  }
};
</script>

<style></style>
