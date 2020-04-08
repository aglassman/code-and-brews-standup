<template>
  <div>
    <h1>Standup Entry</h1>
    <ul>
      <v-img :src="owner.imageURL"/>
      <li>Owner Username: {{owner.username}}</li>
      <li>Owner Id: {{owner.id}}</li>
      <li><p>text: {{text}}</p></li>
      <li v-for="helpMeTag in helpMe" :key="helpMeTag">Help Me: {{helpMeTag}}</li>
      <li v-for="helpYouTag in helpYou" :key="helpYouTag">Help You: {{helpYouTag}}</li>
      <li><v-btn @click="viewLetsChatMessages">Let's chat count: {{letsChatCount}}</v-btn></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StandupEntry',
  props: [
    'id', // (string) The unique key for this standup entry
    'owner', // (object) The owner object (see README for schema)
    'text', // (string) The text of he standup the owner enters.
    'helpMe', // (array of strings) HelpMe Tags (User looking for help)
    'helpYou', // (array of strings) HelpYou Tags (User can offer this help)
    'letsChatCount', // (number) Count of Let's Chat messages this user has gotten for this standup
    'viewLetsChatMessages', // (function) callback when Let's Chat button is clicked
    'addTag', // (function) callback when add tag plus sign is clicked
    'removeTag', // (function(tag)) to trigger when removeTag is clicked, argument should include tag to remove
    'editable' // (boolean)  Should edit functions be shown (text edit, and tag edit.
  ],
  data () {
    return {
      // Store internal state here.
    }
  },
  methods: {
    // Any methods internal to component here
  },
  computed: {
    // Any computed value functions can go here
  }
}
</script>

<style scoped>

</style>
