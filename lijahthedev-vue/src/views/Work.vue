<template>
  <div class="work">
    <v-progress-linear v-model="value" color="red"></v-progress-linear>
    <appHeader :navLinks="links" :image="headerImage"></appHeader>
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex v-for="n in 1" :key="n" d-flex xs12 md6 offset-md3>
              <ProjectCard :index="n - 1" :height="280"></ProjectCard>
            </v-flex>
            <v-flex v-for="n in 5" :key="n + 5" d-flex xs12 sm4>
              <ProjectCard :index="(1 + n) -1" :height="200"></ProjectCard>
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
      value: 0,
      links: [
        { route: "/skills", text: "Skills" },
        { route: "/work", text: "Work" },
        { route: "/connect", text: "Connect" }
      ]
    };
  },
  methods: {
    handleScroll() {
      const scrollPos = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const perc = (100 * scrollPos) / (docHeight - winHeight);
      this.value = Math.floor(Math.round(perc));
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.v-progress-linear {
  position: fixed;
  z-index: 50;
  margin-top: 0;
}
</style>
