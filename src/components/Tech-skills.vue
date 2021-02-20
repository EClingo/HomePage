<template>
    <v-col align="center">
  <v-card class="blue darken-4 green--text text--lighten-2"
  max-width="400">
      <v-card-title><h4>Technical Skills and Tools</h4></v-card-title>
  <v-list align="left" class="blue darken -2 ">
      <v-list-item
      class="blue darken-2" 
      v-for="skill in techSkills" 
      :key="skill.name">
         <v-list-item-title class="grey--text text--lighten-2">{{ skill.name }}
          <v-icon class="pl-3 purple--text text--darken-4">{{ skill.icon }}</v-icon>
          </v-list-item-title>
      </v-list-item>
  </v-list>
  </v-card>
  </v-col>
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