
  <template>
  <v-app id="clingo">
   <v-app-bar><nav-bar app></nav-bar></v-app-bar>
    <v-main>
    <v-container>

   <router-view></router-view>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
import navBar from './components/nav-bar.vue';

  export default {
    name: 'App.vue',
  components: { navBar },
 
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



