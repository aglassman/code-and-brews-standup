/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { object, array, text, number } from '@storybook/addon-knobs'

import StandupEntry from './StandupEntry.vue'

storiesOf('StandupEntry', module)
  .add('Basic', () => ({
    components: { StandupEntry },
    methods: {
      rsvp: action('RSVP')
    },
    props: {
      owner: {
        default: object('Owner', {
          username: 'gnutrino',
          imageUrl: 'https://lh3.googleusercontent.com/-UZmVbzWNUXQ/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJOOB4nwfIqr5lS7GFVKZ1NNyc9hhA.CMID/s32-c/photo.jpg',
          id: '123124xfsdf3'
        })
      },
      text: {
        default: text('Text', 'I\'m working on ..., I need help ..., I can help...')
      },
      helpMe: {
        default: array('Help Me', ['CSS', 'JavaScript'])
      },
      helpYou: {
        default: array('Help You', ['Java', 'Firebase'])
      },
      letsChatCount: {
        default: number('Let\'s Chat Count', 3)
      }
    },
    template: `
      <StandupEntry
        :text="text"
        :helpMe="helpMe"
        :helpYou="helpYou"
        :owner="owner"
        :letsChatCount="letsChatCount"
      />`
  }))
