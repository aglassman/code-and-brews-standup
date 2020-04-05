<template>
    <div>
        <v-avatar
            v-if="loggedIn"
            :size="36"><img :src="$store.getters['user/userImageURL']"/></v-avatar>
        <v-menu
            v-if="loggedIn"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x>
            <template v-slot:activator="{ on }">
                <v-btn
                    icon
                    v-on="on">
                    <v-icon>more_vert</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <v-layout
                        align-center
                        row
                        spacer>
                    <v-flex>
                        <v-avatar :size="36"><img :src="$store.getters['user/userImageURL']"></v-avatar>
                    </v-flex>
                    <v-flex>
                    <div>{{username}}</div>
                    </v-flex>
                    </v-layout>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat @click.stop="menu = false; $store.dispatch('user/logout')">Logout</v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
        <v-btn
            v-else
            @click="$store.dispatch('user/login')">
            Login
        </v-btn>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserAvatar',
  data () {
    return {
      menu: null
    }
  },
  computed: {
    ...mapGetters({
      username: 'user/userName',
      loggedIn: 'user/isLoggedIn'
    })
  }
}
</script>
