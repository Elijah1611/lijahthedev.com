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
      ],
      value: 0
    };
  },
  methods: {
    handleScroll() {
      const scrollPos = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const perc = (100 * scrollPos) / (docHeight - winHeight);
      this.value = Math.floor(perc);
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
