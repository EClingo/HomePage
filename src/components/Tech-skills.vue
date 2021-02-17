<template>
  <v-card class="blue darken-4 green--text text--lighten-2">
      <v-card-title><h4>Technical Skills</h4></v-card-title>
  <v-list class="blue darken -2 ">
      <v-list-item
      class="blue darken-2" 
      v-for="skill in techSkills" 
      :key="skill.name">
          <v-list-item-title class="grey--text text--lighten-2">{{ skill.name }}</v-list-item-title>
          
          <v-icon class="grey--text text--lighten-2">{{ skill.icon }}</v-icon>
          
      </v-list-item>
  </v-list>
  </v-card>
</template>

<script>
export default {
    data: () => ({
        techSkills: [],
    
    }),
    created() {
        this.techSkills = this.$store.state.techSkills;
    }

}
</script>

<style>

</style>