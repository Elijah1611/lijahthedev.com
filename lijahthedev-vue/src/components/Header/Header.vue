<template>
  <header class="header" role="banner">
    <!-- Background Image Container -->
    <app-background :headerImage="image"></app-background>
    <!-- Site Title -->
    <div class="site-title">
      <router-link to="/">
        <h1>{{headerTitle}}</h1>
      </router-link>
    </div>
    <!-- Navigation -->
    <nav :class="['nav', navType]">
      <router-link v-for="(link, i) in navLinks" :key="i" :to="link.route">{{link.text}}</router-link>
    </nav>
  </header>
</template>

<script>
import appBackground from "./Background";
export default {
  name: "Header",
  props: {
    navLinks: {
      type: Array,
      required: true
    },
    navType: {
      type: String,
      default: "horizontal-nav"
    },
    image: {
      type: String,
      required: true
    },
    headerTitle: {
      type: String,
      default: "LijahTheDev"
    }
  },
  components: {
    appBackground
  }
};
</script>

<style scoped lang="scss">
.header {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.site-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  & h1 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    color: #fff;
    font-family: "Bungee Shade", "skranji", "Segoe UI", Verdana, sans-serif;
    user-select: none;
  }
}

.nav {
  display: flex;
  .router-link-exact-active {
    background: rgba(255, 255, 255, 0.1);
  }

  & a {
    font-family: "Gugi", "Segoe UI", Verdana, sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #fff;
    padding: 1.5rem;
    transition: all 0.3s;
  }

  & a:hover {
    background: rgba(255, 255, 255, 0.2);
    text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc;
  }
  & a:active {
    text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee;
  }
}

.vertical-nav {
  flex-direction: column;

  & a {
    width: 0;
  }

  & a:hover {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    & a:hover {
      width: 30%;
    }
  }
}

.horizontal-nav {
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 2s;

  & a {
    width: 100%;
    text-align: center;
  }
}

// Tablets & Large Screens
@media (min-width: 768px) {
  .site-title {
    font-size: 2rem;
  }
  .nav a {
    font-size: 1.4rem;
  }
}

// Landscape Mode
@media (max-height: 767px) and (orientation: landscape) {
  .site-title {
    font-size: 1.4rem;
  }
  .nav a {
    font-size: 0.9rem;
  }
}
</style>
