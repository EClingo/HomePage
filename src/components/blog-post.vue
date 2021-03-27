<template>
  <div class="blog-post">
  <v-card
  v-for="blog in blogs"
  :key="blog.title"
  >
      <v-card-title> {{ blog.title }}</v-card-title>
          <v-card-subtitle> {{ blog.snippet }}</v-card-subtitle>
              <v-card-text> {{ blog.entry }}</v-card-text>
  </v-card>
  </div>
</template>

<script>
export default {
    data: () =>({
        blogs: [
            {
            title:'My first Blog',
            snippet:'A small overview of the blog post',
            entry:'lorem ipsum here'
            },
        ],

    }),

}
</script>

<style>

</style>