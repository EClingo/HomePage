<template>

  <div class="about">
    <v-container >
      <v-col>
    <h1 align="center" class="mb-6">Who is Eric Clingo?</h1>
    <p  align="justify" class="mx-10 blue--text text--lighten-2">I am adapatable and unshakable. My work experience has allowed me to work with many types of people.
    Laid off due to Covid-19, I have decided to take a chance and follow my dream of becoming a software developer.</p>
      </v-col>
      <v-row>
    <v-col align="left" ><education-card></education-card></v-col>
    <v-col><hobbies-list></hobbies-list></v-col>
      </v-row>
    <v-col class="my-4"><experience-cards></experience-cards></v-col>
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