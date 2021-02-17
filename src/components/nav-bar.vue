<template>
  <v-app-bar flat class="primary darken-2">
      <router-link :to="{ name: 'Home' }"><v-btn dark class="mx-2">Home</v-btn></router-link>
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'About' }"><v-btn dark class="mx-2 ">About Me</v-btn></router-link>
      <router-link :to="{name: 'Portfolio' }"><v-btn dark class="mx-2">Portfolio</v-btn></router-link>
      <router-link :to="{name: 'Blog' }"><v-btn dark class="mx-2">Blog</v-btn></router-link>
      <v-btn dark class="mx-2">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>