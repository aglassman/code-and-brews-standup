/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import 'vuetify/dist/vuetify.css'

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    // your colors
  }
})

addDecorator(() => ({
  template: '<v-app><story/></v-app>'
}))

addDecorator(withKnobs)

const events = require.context('../../src/components/events', true, /.stories.js$/)

function loadStories () {
  events.keys().forEach(filename => events(filename))
}

configure(loadStories, module)
