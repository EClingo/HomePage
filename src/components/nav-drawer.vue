<template>
  <div class="nav-drawer">
      <v-navigation-drawer
    
    permanent
    expand-on-hover
    class="blue darken-2"
    fixed
    lights-out
    
    height="50%"
    
    >
      <v-list-item>
        <v-list-item-content>
          
          <v-list-item-subtitle>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
          <v-list-item-title><router-link :to="{ name: `${ item.title }` }">{{ item.title }}</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-circle'},
          { title: 'About', icon: 'mdi-human-greeting'},
          { title: 'Portfolio', icon: 'mdi-briefcase-variant-outline'},
          { title: 'Blog', icon: 'mdi-typewriter'},
          { title: 'Contact Me', icon: 'mdi-email'},
        ],
        right: null,
      }
    },

}
</script>

<style>

</style>