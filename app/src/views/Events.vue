<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout row wrap>
      <v-flex xs12><h1>Upcoming Events</h1></v-flex>
      <v-flex md4 sm6 xs12 v-for="event in events" :key="event.eventId">
        <Event v-bind="event" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Event from '../components/events/Event'

export default {
  components: {
    Event
  },
  data () {
    return {
      events: [
        {
          eventId: '1234',
          title: 'Code + Brews',
          description: 'Join us at the next virtual Code + Brews',
          date: 'April 21st',
          rsvpCount: 23
        }
      ]
    }
  }
}
</script>
