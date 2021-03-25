
  <template>
  <v-app id="clingo">
    
    <v-main>S
    <nav-bar app v-show="$vuetify.breakpoint.mdAndUp"></nav-bar>
  
    <v-row>
      
      
   <v-navigation-drawer
    v-show="$vuetify.breakpoint.smAndDown"
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
    </v-row>
    
    <v-row>
   
   <v-flex class="ml-5" align-self-center><router-view></router-view></v-flex>
   
      
    </v-row>
    </v-main>
  </v-app>
</template>

<script>
import navBar from './components/nav-bar.vue';

  export default {
    name: 'App.vue',
  components: { navBar },
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
@font-face {
  font-family: "Orbitron";
  src: local("Orbitron"),
    url(./assets/Orbitron-VariableFont_wght.ttf) format("truetype");
}
h1, h2, h3, h4 {
  font-family: "Orbitron", sans-serif ;
  color: rgb(31, 221, 31);
}
</style>



