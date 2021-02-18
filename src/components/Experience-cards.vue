<template>
  <v-container>
      <v-row justify="space-around">
        <v-card
        v-for="job in workExperience "
        :key="job.title"
        class="blue darken-2">
        <v-card-title><h3>{{ job.company }}</h3></v-card-title>
        <v-card-subtitle>{{ job.title }}</v-card-subtitle>
        
        <v-list class="blue">
            <v-list-item-subtitle class="pl-2 black--text ">skills:</v-list-item-subtitle>
            <v-list-item-content class=" px-3 body-2">{{ job.skills.toString() }}
            </v-list-item-content>
        </v-list>
        
        

        </v-card>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        workExperience: [], 
        
    }),
    created(){
        this.workExperience = this.$store.state.workExperience;
    },
}
</script>

<style>

</style>