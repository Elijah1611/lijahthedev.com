<template>
  <main class="about">
    <v-parallax dark :src="image" height="500">
      <v-layout align-center column justify-center>
        <h2 class="display-2 font-weight-thin mb-3">Paul Scott</h2>
        <h3 class="headline profession">Front-End Developer</h3>
        <p
          class="font-weight-thin font-italic body-1 mt-4 mb-0"
        >"Discretion shall preserve thee, understanding shall keep thee:"</p>
        <p class="caption">- Proverbs 2:11</p>
      </v-layout>
    </v-parallax>

    <div class="bio">
      <v-layout align-center column justify-center>
        <p class="bio-box">
          <font-awesome-icon icon="home" class="icons"></font-awesome-icon>
          <span>Born:</span> Laurel, MD
        </p>
        <p class="bio-box">
          <font-awesome-icon icon="hotel" class="icons"></font-awesome-icon>
          <span>Located:</span> Fort Worth, TX
        </p>
        <p class="bio-box">
          <font-awesome-icon :icon="['fab', 'vuejs']" class="icons"></font-awesome-icon>
          <span>Learning:</span> Vue.js
        </p>
        <p class="bio-box">
          <font-awesome-icon icon="laptop-code" class="icons"></font-awesome-icon>
          <span>Hobby:</span> Programming
        </p>
      </v-layout>
    </div>
  </main>
</template>

<script>
import image from "../../assets/black-design4.jpg";
export default {
  components: {},
  data() {
    return {
      image
    };
  }
};
</script>

<style lang="scss" scoped>
$shadow-1: #2873ff;
$shadow-2: #0059ff;

.name-heading {
  text-shadow: 3px 3px 5px #000;
}
.profession {
  color: #347bff;
  text-shadow: 1px 0px 1px $shadow-1, 0px 1px 1px $shadow-2;
}

.bio {
  background: #000;
  padding: 5rem 0;
  color: #fff;
}

.bio-box {
  width: 50vw;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background: rgba(51, 51, 51, 0.212);
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(1, 0.41, 0.36, 1.91);

  & span {
    text-transform: uppercase;
    opacity: 0.5;
  }

  & .icons {
    margin-bottom: 1rem;
    font-size: 3rem;
    color: #fff;
  }

  &:hover {
    width: 90vw;
    & span {
      opacity: 0.7;
    }

    & .icons {
      color: #347bff;
    }
  }
}
@media only screen and (min-width: 768px) {
  .bio-box {
    width: 25vw;
    &:hover {
      width: 40vw;
    }
  }
}
</style>