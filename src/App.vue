
  <template>
  <v-app id="clingo">
    <v-container>
   <nav-bar></nav-bar>
   <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import navBar from './components/nav-bar.vue';

  export default {
    name: 'App.vue',
  components: { navBar },
 
  }
</script>



