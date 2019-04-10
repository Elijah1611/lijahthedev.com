<template>
  <div class="bg" v-mousefollower:120 :style="bgImg"></div>
</template>

<script>
export default {
  name: "Background",
  props: {
    headerImage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      bgImg: {
        backgroundImage: "url(" + this.headerImage + ")"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>