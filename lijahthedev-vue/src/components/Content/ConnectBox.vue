<template>
  <div class="connect-box">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg5 offset-lg1 v-for="(box, i) in boxes" :key="i" class="pa-1">
          <v-tooltip top :color="box.color">
            <template v-slot:activator="{ on }">
              <v-btn
                block
                :href="box.link"
                target="_blank"
                class="connect-btn"
                :color="box.color"
                v-on="on"
              >
                <font-awesome-icon :icon="box.icon" class="icons"></font-awesome-icon>
              </v-btn>
            </template>
            <span>{{box.name}}</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          name: "GitHub",
          icon: ["fab", "github"],
          color: "grey",
          link: "https://github.com/LijahTheDev"
        },
        {
          name: "LinkedIn",
          icon: ["fab", "linkedin"],
          color: "blue",
          link: "https://www.linkedin.com/in/lijahthedev"
        },
        {
          name: "Resume",
          icon: ["fas", "file-alt"],
          color: "green",
          link:
            "https://drive.google.com/file/d/1S5m1igMzBC4oM7jiZWMpBxTPgYIEUk-r/view?usp=sharing"
        },
        {
          name: "YouTube",
          icon: ["fab", "youtube"],
          color: "red",
          link: "https://www.youtube.com/channel/UCJtpcLzNVgj07CgvEDUkwsw"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.connect-box {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(51, 51, 51, 0.7)
  );
}
.connect-btn {
  height: 300px;
  transition: all 0.3s cubic-bezier(1, 0.41, 0.36, 1.91);

  .icons {
    font-size: 5rem;
    color: #fff;
    opacity: 0.4;
    transition: all 0.3s cubic-bezier(1, 0.41, 0.36, 1.91);
  }
  &:hover {
    box-shadow: inset 0px 0px 85px rgba(0, 0, 0, 0.5);
    .icons {
      color: #fff;
      font-size: 7rem;
    }
  }
}
</style>