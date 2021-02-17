<template>
  <div class="" >
    <home></home>
    <v-container>
      <v-layout row>
      <v-flex xs12 md6>
  <project-card></project-card>
      </v-flex>
      <v-flex xs 12 md6>
  <tech-skills></tech-skills>
      </v-flex>
      </v-layout>
  </v-container>
  </div>
</template>

<script>
import ProjectCard from '../components/Project-card.vue'
import TechSkills from '../components/Tech-skills.vue'
import Home from './Home.vue'
export default {
  components: { ProjectCard, TechSkills, Home },
    

}
</script>

<style>

</style>