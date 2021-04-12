
  <template>
  <v-app id="clingo">
    
    <v-main>
    <v-row>
      <v-col
      cols="12"
      md="12"
      >
    <nav-bar app v-show="$vuetify.breakpoint.mdAndUp"></nav-bar>
      </v-col> 
      <v-col
      cols="2"
      >
      <nav-drawer app v-show="$vuetify.breakpoint.smAndDown"></nav-drawer>
      </v-col>
   
   
   <v-col
   cols="10"
   md="12"
   justify-center
   ><router-view class="pr-2"></router-view>
   </v-col>
   
      
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



