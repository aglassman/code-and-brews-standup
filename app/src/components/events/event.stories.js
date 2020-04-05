/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, number } from '@storybook/addon-knobs'

import Event from './Event.vue'

storiesOf('Event', module)
  .add('Basic', () => ({
    components: { Event },
    methods: {
      rsvp: action('RSVP')
    },
    props: {
      title: {
        default: text('Title', 'Code + Brews')
      },
      date: {
        default: text('Date', 'April 12th')
      },
      description: {
        default: text('Description', 'Join us virtually for the next Code + Brews session.')
      },
      rsvpCount: {
        default: number('RSVP Count', 12)
      }
    },
    template: `<Event
      :title="title"
      :date="date"
      :description="description"
      :rsvpCount="rsvpCount"
      :rsvp="rsvp"/>`
  }))
