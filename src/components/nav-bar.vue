<template>
  
  <v-app-bar flat class="mr-2 primary darken-2">
    <v-container>
      <v-row >
        
      <router-link :to="{ name: 'Home' }"><v-btn dark class="mx-2">Home</v-btn></router-link>
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'About' }"><v-btn dark class="mx-2 ">About Me</v-btn></router-link>
      <router-link :to="{name: 'Portfolio' }"><v-btn dark class="mx-2">Portfolio</v-btn></router-link>
      <router-link :to="{name: 'Blog' }"><v-btn dark class="mx-2">Blog</v-btn></router-link>
      <v-btn dark class="mx-2"><a href="mailto:eric@clingo.io">Contact</a></v-btn>
        
      </v-row>
    </v-container>
  </v-app-bar>
  
  
</template>

<script>
export default {

}
</script>

<style>

</style>