<template>
  <v-container>
      <v-col>
      <v-list width="300px" class="blue darken-1">
          <v-list-item-title class="px-2"><h4>Hobbies and Interests</h4></v-list-item-title>
          <v-list-item-content
          v-for="hobby in hobbies"
          :key="hobby.name"
          class="pl-6"
          >
          {{ hobby.name }} <v-icon>{{ hobby.icon }}</v-icon>
          </v-list-item-content>
          
      </v-list>
      </v-col>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        hobbies: [],
    }),
    created() {
        this.hobbies = this.$store.state.hobbies;
    }

}
</script>

<style>

</style>