<template>
  <div class="portfolio">
  <v-card
  class="mx-auto"
  max-width="400"
  >
  <v-card-title>Project Name</v-card-title>
  <v-card-text>
      <p>a brief description</p>
  </v-card-text>
  <v-card-actions>
      <v-btn
      text
      color="teal accent-4"
      @click="reveal = true"
      >
      Learn More
      </v-btn>
  </v-card-actions>

  <v-expand-transition>
      <v-card
      v-if="reveal"
      class="transition-fast-in-fast-out v-card--reveal"
      style="height: 100%;"
      >
      <v-card-text class="pb-0">
          <p class="display-1 text--primary">
              SubTitle
          </p>
          <p> details about the project </p>
      </v-card-text>
      <v-card-actions class="pt-0">
          <v-btn
          text
          color="teal accent-4"
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
    }),

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