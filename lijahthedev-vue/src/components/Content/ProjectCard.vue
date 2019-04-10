<template>
  <v-card :color="projects[index].color" :dark="projects[index].isDark" tile flat>
    <v-img :src="projects[index].image" :height="height"></v-img>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card-text class="caption">
          <div>
            <h3 class="title mb-0">{{projects[index].title}}</h3>
            <div>{{projects[index].description}}</div>
          </div>
        </v-card-text>
      </v-flex>
      <v-flex xs12>
        <v-card-actions>
          <v-dialog v-model="dialog" width="800">
            <template v-slot:activator="{ on: dialog }">
              <v-tooltip bottom :color="projects[index].color">
                <template v-slot:activator="{on: tooltip }">
                  <v-btn fab flat v-on="{...tooltip, ...dialog}">
                    <v-avatar size="32">
                      <font-awesome-icon icon="info-circle" class="info animate"></font-awesome-icon>
                    </v-avatar>
                  </v-btn>
                </template>
                <span :class="{'black--text': !projects[index].isDark}">Details</span>
              </v-tooltip>
            </template>
            <ProjectInfoCard :index="index"></ProjectInfoCard>
          </v-dialog>
          <v-tooltip bottom :color="projects[index].color">
            <template v-slot:activator="{ on }">
              <v-btn fab flat v-on="on" :href="projects[index].links[0]" target="_blank">
                <v-avatar size="32">
                  <font-awesome-icon :icon="['fas', 'window-maximize']" class="window animate"></font-awesome-icon>
                </v-avatar>
              </v-btn>
            </template>
            <span :class="{'black--text': !projects[index].isDark}">View</span>
          </v-tooltip>
          <v-tooltip bottom :color="projects[index].color">
            <template v-slot:activator="{ on }">
              <v-btn fab flat v-on="on" :href="projects[index].links[1]" target="_blank">
                <v-avatar size="32">
                  <font-awesome-icon :icon="['fab', 'github']" class="github animate"></font-awesome-icon>
                </v-avatar>
              </v-btn>
            </template>
            <span :class="{'black--text': !projects[index].isDark}">Github</span>
          </v-tooltip>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import ProjectInfoCard from "./ProjectInfoCard";
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      default: 200
    }
  },
  components: {
    ProjectInfoCard
  },
  data() {
    const projects = this.$store.state.projects;
    return {
      projects,
      dialog: false
    };
  }
};
</script>

<style lang="scss" scoped>
.github {
  font-size: 2rem;
}
.window {
  font-size: 2rem;
}
.info {
  font-size: 2rem;
}

.animate {
  transition: all 0.3s cubic-bezier(1, 0.41, 0.36, 1.91);
  &:hover {
    transform: scale(1.3);
  }
}
</style>