<template>
  <v-card color="blue-grey darken-2" class="white--text">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{title}}: {{date}}</div>
        <span>{{description}}</span>
      </div>
    </v-card-title>
    <v-card-actions class="pa-3">
      <v-btn
        flat
        dark
        @click="rsvp"
      >RSVP</v-btn>
      <v-spacer></v-spacer>
      <v-icon dark>group</v-icon>
      <span style="padding-left: 5px">{{rsvpCount}}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Event',
  props: [
    'title',
    'date',
    'description',
    'rsvpCount',
    'rsvp']
}
</script>

<style scoped>

</style>
