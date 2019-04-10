<template>
  <div class="home">
    <app-header :navLinks="links" navType="vertical-nav" :image="image"></app-header>
  </div>
</template>

<script>
import appHeader from "@/components/Header/Header.vue";
import image from "../assets/black-design.jpg";

export default {
  name: "home",
  components: {
    appHeader
  },
  data() {
    return {
      image,
      links: [
        { route: "/work", text: "Work" },
        { route: "/about", text: "About" },
        { route: "/connect", text: "Connect" }
      ]
    };
  }
};
</script>
