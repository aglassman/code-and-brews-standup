<template>
    <v-container fluid>
        <v-layout column align-center justify-center>
            <v-flex v-if="isLoggedIn">
                <h1>Welcome {{userName}}!</h1>
            </v-flex>
            <v-flex v-else>
                <v-btn
                    color="green"
                    class="white--text"
                    @click="$store.dispatch('user/login')">
                    Please Login
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn',
      userName: 'user/userName'
    })
  }
}
</script>
