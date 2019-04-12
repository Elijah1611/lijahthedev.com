<template>
  <div class="connect">
    <v-progress-linear v-model="value" color="green"></v-progress-linear>
    <app-header :navLinks="links" :image="image"></app-header>
    <appConnectBox></appConnectBox>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "@/components/Header/Header.vue";
import appFooter from "../components/Footer/Footer.vue";
import appConnectBox from "@/components/Content/ConnectBox.vue";
import image from "../assets/black-design2.jpg";
import { mapState, mapMutations } from "vuex";

export default {
  name: "connect",
  components: {
    appHeader,
    appFooter,
    appConnectBox
  },
  data() {
    return {
      image,
      links: [
        { route: "/skills", text: "Skills" },
        { route: "/work", text: "Work" },
        { route: "/connect", text: "Connect" }
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
