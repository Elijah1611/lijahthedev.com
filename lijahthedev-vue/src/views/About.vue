<template>
  <div class="about">
    <v-progress-linear v-model="value" color="white"></v-progress-linear>
    <app-header :navLinks="links" :image="image"></app-header>
    <app-parallax></app-parallax>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "@/components/Header/Header.vue";
import appFooter from "@/components/Footer/Footer.vue";
import appParallax from "@/components/Content/Parallax.vue";
import image from "../assets/black-mount.jpg";
import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  components: {
    appHeader,
    appParallax,
    appFooter
  },
  data() {
    return {
      image,
      links: [
        { route: "/about", text: "About" },
        { route: "/skills", text: "Skills" },
        { route: "/work", text: "Work" }
      ]
    };
  },
  computed: {
    ...mapState(["value"])
  },
  methods: {
    ...mapMutations(["handleScroll"])
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
