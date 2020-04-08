/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { object, array, text, number, boolean } from '@storybook/addon-knobs'

import StandupEntry from './StandupEntry.vue'

storiesOf('StandupEntry', module)
  .add('Basic', () => ({
    components: { StandupEntry },
    methods: {
      viewLetsChatMessages: action('View Let\'s Chat Messages')
    },
    props: {
      standupEntryId: {
        default: text('Standup Entry ID', 'af3234swe3')
      },
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
      },
      editable: {
        default: boolean('Editable', false)
      }
    },
    template: `
      <StandupEntry
        :id="standupEntryId"
        :text="text"
        :helpMe="helpMe"
        :helpYou="helpYou"
        :owner="owner"
        :letsChatCount="letsChatCount"
        :viewLetsChatMessages="viewLetsChatMessages"
        :editable="editable"
      />`
  }))
