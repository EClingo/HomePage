<template>
  <div>
      <v-card
  class="mx-auto my-10 blue darken-3"
  max-width="400"
  v-for="project in projects"
  :key="project.name"
  >
  <v-card-title  class="display-1 green--text text--lighten-1"><h3>{{ project.name }}</h3></v-card-title>
  <v-card-text>
      <p class="subheading white--text">{{ project.overview }}</p>
  </v-card-text>
  <v-card-actions>
      <v-btn
      text
      color="accent"
      @click="reveal = true"
      >
      Learn More
      </v-btn>
  </v-card-actions>

  <v-expand-transition>
      <v-card
      v-if="reveal"
      class="transition-fast-in-fast-out v-card--reveal blue "
      style="height: 100%;"
      >
      <v-card-text class="pb-0">
          <p class="subheading font-weight-bold">
              status: {{ project.status }}
          </p>
          <p class="px-2 text--secondary">{{ project.details }}</p>
      </v-card-text>
      <v-card-actions class="pt-0">
          <v-btn
          text
          color="black accent-4"
          @click="reveal = false"
          >
          Close
          </v-btn>
      </v-card-actions>
      </v-card>
  </v-expand-transition>

  </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
        reveal: false,
        projects: [],
    }),
    created(){
        this.projects = this.$store.state.projects;
    }

}
</script>

<style>
.v-card--reveal {
    bottom: 0;
    opacity: 1 im !important;
    position: absolute;
    width: 100%;
}
</style>