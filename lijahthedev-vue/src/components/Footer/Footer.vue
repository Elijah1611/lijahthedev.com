<template>
  <div class="footer">
    <v-footer height="auto" color="black">
      <v-layout justify-center row wrap>
        <v-btn
          :to="link.route"
          v-for="(link, i) in siteLinks"
          :key="i"
          color="white"
          flat
          round
        >{{ link.name }}</v-btn>
        <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
          &copy;2019 —
          <strong>LijahTheDev</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteLinks: [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        { name: "Skills", route: "/skills" },
        { name: "Work", route: "/work" },
        { name: "Connect", route: "/connect" }
      ]
    };
  }
};
</script>

<style scoped>
</style>