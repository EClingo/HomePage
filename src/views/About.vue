<template>

  <div class="about">
    <v-container >
      <v-col>
    <v-flex> <h1 class="green--text text--lighten-2">Who is Eric Clingo?</h1></v-flex>
    <v-flex><p class="mt-4 blue--text text--lighten-2">I am adapatable and unshakable. My work experience has allowed me to work with many types of people.</p></v-flex>
    <v-flex><p class="mb-4 blue--text text--lighten-2">Laid off due to Covid-19, I have decided to take a chance and follow my dream of becoming a software developer.</p></v-flex>
    <v-row align="center" ><education-card></education-card>
    <hobbies-list></hobbies-list></v-row>
    <v-row class="my-4"><experience-cards></experience-cards></v-row>
      </v-col>
    </v-container>
    
  </div>
</template>

<script>
import EducationCard from '../components/Education-card.vue'
import ExperienceCards from '../components/Experience-cards.vue'
import HobbiesList from '../components/Hobbies-list.vue'
export default {
  components: { ExperienceCards, EducationCard, HobbiesList },
  
}
</script>

<style>

</style>