<template>
    <v-container>
  <v-card
  v-for="school in education"
  :key="school.name"
  class="my-3 mx-7 blue darken-3"
  width="600px">
  <v-card-title><h4>{{ school.name }}</h4></v-card-title>
  <v-card-subtitle>Area of Study : {{ school.major }}</v-card-subtitle>
  <v-card-text> Skills aquired: {{school.skills.split(',') }}</v-card-text>
      
  </v-card>
    </v-container>
</template>

<script>
export default {
data: () => ({
    education:[],
}),
created(){
    this.education = this.$store.state.education;
}
}
</script>

<style>

</style>