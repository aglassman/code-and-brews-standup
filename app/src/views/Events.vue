<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout row wrap>
      <v-flex xs12><h1>Upcoming Events</h1></v-flex>
      <v-flex md4 sm6 xs12>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Code + Brews: April 12th</div>
              <span>Join us virtually for the next Code + Brews session.</span>
            </div>
          </v-card-title>
          <v-card-actions class="pa-3">
            <v-btn flat dark>RSVP</v-btn>
            <v-spacer></v-spacer>
            <v-icon>group</v-icon>
            12
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12><h1>Past Events</h1></v-flex>
      <v-flex md4 sm6 xs12>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Code + Brews: April 1st</div>
              <span>Join us virtually for the next Code + Brews session.</span>
            </div>
          </v-card-title>
          <v-card-actions class="pa-3">
            <v-btn flat dark>View Projects</v-btn>
            <v-spacer></v-spacer>
            <v-icon>group</v-icon>
            12
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  components: {
  }
}
</script>
