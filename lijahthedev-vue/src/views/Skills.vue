<template>
  <div class="skills">
    <v-progress-linear v-model="value" color="blue"></v-progress-linear>
    <app-header :navLinks="links" :image="image"></app-header>

    <v-timeline dark>
      <v-timeline-item v-for="(item, i) in items" :key="i" large>
        <template v-slot:icon>
          <v-avatar>
            <font-awesome-icon :icon="item.icon" :class="iconClasses[i]"></font-awesome-icon>
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span :style="{color: '#fff'}">{{item.info}}</span>
        </template>
        <v-card :color="item.color">
          <v-card-title class="display-1 text-shadow">{{item.category}}</v-card-title>
          <v-card-text class="caption">
            <li v-for="(skill,i) in item.skills" :key="i" class="ml-3">{{skill}}</li>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "@/components/Header/Header.vue";
import appFooter from "@/components/Footer/Footer.vue";
import image from "../assets/black-sand.jpg";
export default {
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {
      image,
      value: 0,

      iconClasses: ["css", "react", "vue", "node", "python"],
      links: [
        { route: "/about", text: "About" },
        { route: "/skills", text: "Skills" },
        { route: "/work", text: "Work" }
      ],
      items: [
        {
          icon: ["fab", "css3-alt"],
          color: "blue",
          category: "CSS3",
          info:
            "Cascading Style Sheets is a style sheet language used for describing the presentation of HTML",
          skills: [
            "Flexbox",
            "CSS Grid",
            "Sass/Scss",
            "Bootstrap",
            "Materialize"
          ]
        },
        {
          icon: ["fab", "react"],
          color: "#61dafb",
          category: "React",
          info:
            "A JavaScript framework for building user interfaces (Maintained  by Facebook)",
          skills: ["React", "Redux", "React Router"]
        },
        {
          icon: ["fab", "vuejs"],
          color: "#42b983",
          category: "Vue",
          info:
            "A JavaScript framework for building user interfaces and single-page applications",
          skills: ["Vue", "Vue Router", "Vuetify", "Vuex", "Vue-Resource"]
        },
        {
          icon: ["fab", "node-js"],
          color: "#049c01",
          category: "Node",
          info: "JavaScript runtime built on Chrome's V8 JavaScript engine",
          skills: ["Node", "Express", "MongoDB", "Pug/EJS"]
        },
        {
          icon: ["fab", "python"],
          color: "#ffc400",
          category: "Python",
          info:
            "Python is an interpreted, high-level, general-purpose programming language",
          skills: ["Django"]
        }
      ]
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
.text-shadow {
  text-shadow: 1px 1px 2px #000;
}
.css {
  font-size: 2.5rem;
  color: #0099ff;
}
.react {
  font-size: 2.5rem;
  color: #61dafb;
}
.vue {
  font-size: 2.5rem;
  color: #42b983;
}
.node {
  font-size: 2.5rem;
  color: #04d300;
}
.python {
  font-size: 2.5rem;
  color: #ffc400;
}

.v-progress-linear {
  position: fixed;
  z-index: 50;
  margin-top: 0;
}
</style>