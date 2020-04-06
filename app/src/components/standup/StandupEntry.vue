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
      <li>Let's chat count: {{letsChatCount}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StandupEntry.vue',
  props: [
    'owner',
    'text',
    'helpMe',
    'helpYou',
    'letsChatCount']
}
</script>

<style scoped>

</style>
