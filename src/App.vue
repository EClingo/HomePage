
  <template>
  <v-app id="clingo">
    
    <v-main>
    <nav-bar app v-show="$vuetify.breakpoint.mdAndUp"></nav-bar>
  
    <v-row>
      
      <nav-drawer app v-show="$vuetify.breakpoint.smAndDown"></nav-drawer>
   
    </v-row>
    
    <v-row>
   
   <v-flex class="ml-5" align-self-center><router-view></router-view></v-flex>
   
      
    </v-row>
    </v-main>
  </v-app>
</template>

<script>
import navBar from './components/nav-bar.vue';
import NavDrawer from './components/nav-drawer.vue';

  export default {
    name: 'App.vue',
  components: { navBar, NavDrawer },
    
 
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



