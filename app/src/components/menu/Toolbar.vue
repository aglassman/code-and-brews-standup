<template>
  <v-toolbar app>
    <v-toolbar-title>Code + Brews: Milwaukee</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-tooltip bottom v-for="navItem in navItems" :key="navItem.path">
        <template v-slot:activator="{on}">
          <v-btn flat :to="navItem.path" v-on="on">
            <v-icon>{{navItem.icon}}</v-icon>
            {{navItem.text}}
          </v-btn>
        </template>
        <span v-if="navItem.tooltip">{{navItem.tooltip}}</span>
      </v-tooltip>
    </v-toolbar-items>
    <user-avatar/>
  </v-toolbar>
</template>

<script>

import { mapGetters } from 'vuex'
import UserAvatar from '../user/UserAvatar'

export default {
  components: {
    UserAvatar
  },
  data () {
    return {
      navItems: [
        {
          path: '/events',
          icon: 'calendar_today',
          text: 'events',
          tooltip: 'Browse upcoming, and past Code + Brew events.'
        },
        {
          path: '/search',
          icon: 'search',
          text: 'search',
          tooltip: 'Search for past event topics.'
        }
      ]
    }
  },
  methods: {
    selectEnv (env) {
      this.$store.dispatch('environments/select', env)
    }
  },
  computed: {
    ...mapGetters({})
  }
}
</script>
