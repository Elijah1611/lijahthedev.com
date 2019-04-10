<template>
  <div class="work">
    <appHeader :navLinks="links" :image="headerImage"></appHeader>
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex d-flex xs12 md12>
          <v-layout row wrap>
            <v-flex d-flex xs12 md8 offset-md2>
              <ProjectCard :index="0"></ProjectCard>
            </v-flex>
            <v-flex v-for="n in 2" :key="n" d-flex xs12 sm6>
              <ProjectCard :index="(1 + n) -1"></ProjectCard>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm12 md4>
              <ProjectCard :index="3"></ProjectCard>
            </v-flex>
            <v-flex d-flex xs12 sm6 md4>
              <ProjectCard :index="4"></ProjectCard>
            </v-flex>
            <v-flex d-flex xs12 sm6 md4>
              <ProjectCard :index="5"></ProjectCard>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "../components/Header/Header";
import appFooter from "../components/Footer/Footer.vue";
import ProjectCard from "../components/Content/ProjectCard";
import image from "../assets/black-mount.jpg";
import headerImage from "../assets/black-design3.jpg";
export default {
  components: { ProjectCard, appHeader, appFooter },
  data() {
    const projects = this.$store.state.projects;
    return {
      projects,
      image,
      headerImage,
      links: [
        { route: "/skills", text: "Skills" },
        { route: "/work", text: "Work" },
        { route: "/connect", text: "Connect" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
