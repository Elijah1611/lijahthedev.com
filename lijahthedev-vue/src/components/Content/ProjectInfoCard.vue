<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-img :src="projects[index].image" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{projects[index].title}}</h3>
            <div class="body-1">{{ projects[index].description }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-layout align-end justify-center row fill-height>
            <v-flex>
              <v-chip small color="black" text-color="white">{{projects[index].year}}</v-chip>
              <v-chip
                small
                :color="projects[index].lang.color"
                text-color="white"
              >{{projects[index].lang.name}}</v-chip>
            </v-flex>

            <v-btn
              round
              small
              :color="projects[index].color"
              :dark="projects[index].isDark"
              :href="projects[index].links[0]"
              target="_blank"
            >
              <font-awesome-icon :icon="['fas', 'window-maximize']" class="icons"></font-awesome-icon>View
            </v-btn>
            <v-btn
              round
              small
              :color="projects[index].color"
              :dark="projects[index].isDark"
              :href="projects[index].links[1]"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'github']" class="icons"></font-awesome-icon>Github
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    const projects = this.$store.state.projects;
    return {
      projects
    };
  }
};
</script>

<style lang="scss" scoped>
.icons {
  font-size: 1.4rem;
  margin-right: 5px;
}
</style>