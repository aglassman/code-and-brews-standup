<template>
  <v-app v-if="$store.getters['user/isLoggedIn']">
    <Toolbar v-on:toggleDrawer="toggleDrawer" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
  <v-app v-else>
    <v-content>
      <login/>
    </v-content>
  </v-app>
</template>

<script>
import Login from './views/Login'
import Toolbar from './components/menu/Toolbar'

export default {

  name: 'App',
  components: {
    Login,
    Toolbar
  },
  computed: { },
  data () {
    return {
      drawer: true
    }
  },
  watch: {
    $route (to, from) {
      // this.drawer = false
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style>
/*  Note, this style tag is not scoped, so that this loading class can be used in child components. */
@keyframes shadow-pulse
{
     0% {
          box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.25);
     }
     100% {
          box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
     }
}

.loading
{
     animation: shadow-pulse 1s infinite;
     border-radius: 100%;
}
</style>
