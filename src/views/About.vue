<template>

  <div class="about">
    <v-container>
      <v-row>
      <v-col
      cols="12"
      >
    <h1 align="center" class="mb-6">Who is Eric Clingo?</h1>
    <p  align="justify" class="px-1 blue--text text--lighten-2">I am adapatable and unshakable. My work experience has exposed me to a wide variety of applicable skills.
    After being layed off due to Covid-19, I seized the opportunity to follow a career path in the Tech field. I accept challenges head on and love to explore the best possible solutions.</p>
      </v-col>
      </v-row>
      <v-row>
    <v-col
    cols="12"
    md="8"
    >
     <education-card></education-card>
     </v-col>
    <v-col
    cols="12"
    md="4"
    >
    <hobbies-list></hobbies-list>
    </v-col>
      </v-row>
    <v-col
     cols="12"
     md="12"
     >
     <experience-cards></experience-cards>
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