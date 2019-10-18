<template>
  <div class="skills">
    <v-progress-linear v-model="value" color="blue"></v-progress-linear>
    <app-header :navLinks="links" :image="image" class="scuff"></app-header>
    <div class="smoke">
      <v-container>
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
              <v-card-title class="headline text-shadow">{{item.category}}</v-card-title>
              <v-card-text class="caption">
                <li v-for="(skill,i) in item.skills" :key="i" class="ml-3">{{skill}}</li>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </div>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "@/components/Header/Header.vue";
import appFooter from "@/components/Footer/Footer.vue";
import image from "../assets/black-sand.jpg";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {
      image,
      iconClasses: [
        "css",
        "react",
        "vue",
        "node",
        "python",
        "database",
        "wordpress"
      ],
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
          skills: [
            "Vue",
            "Vue Router",
            "Vuetify",
            "Vuex",
            "Vue-Resource",
            "Nuxt.js"
          ]
        },
        {
          icon: ["fab", "node-js"],
          color: "#049c01",
          category: "Node",
          info: "JavaScript runtime built on Chrome's V8 JavaScript engine",
          skills: ["Node", "Express", "Mongoose ODM", "Sequelize", "Pug/EJS"]
        },
        {
          icon: ["fab", "python"],
          color: "#ffc400",
          category: "Python",
          info:
            "Python is an interpreted, high-level, general-purpose programming language",
          skills: ["Django"]
        },
        {
          icon: ["fa", "database"],
          color: "#ff0000",
          category: "Databases",
          info:
            "A structured set of data held in a computer, especially one that is accessible in various ways.",
          skills: ["MySQL", "MongoDB", "AWS RDS"]
        },
        {
          icon: ["fab", "wordpress"],
          color: "#21759b ",
          category: "Wordpress",
          info: "A content management system",
          skills: []
        }
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
.scuff {
  background: url("../assets/scuff.png");
}
.smoke {
  background: url("../assets/smoke.png") no-repeat center;
  background-size: cover;
}

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
.database {
  font-size: 2.5rem;
  color: #ff0000;
}
.wordpress {
  font-size: 2.5rem;
  color: #21759b;
}

.v-progress-linear {
  position: fixed;
  z-index: 50;
  margin-top: 0;
}
</style>