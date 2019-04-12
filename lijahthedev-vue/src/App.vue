<template>
  <v-app id="app" style="background: none">
    <transition name="zoom">
      <router-view/>
    </transition>
  </v-app>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-size: 62.5%;
  font-family: "skranji", "Segoe UI", Verdana, sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  background: #000;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

.zoom-enter-active {
  animation: zoom-in 0.8s;
}
@keyframes zoom-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

::-webkit-scrollbar {
  width: 15px;
  transition: all 1s;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(#fff, #2e2e2e);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(#0059ff, #000000);
}
</style>
