import React from 'react'

import { Authors } from './presenter'

export default {
  component: Authors,
  title: 'organisms/authors',
}

const Template = (args) => <Authors {...args} />

export const Default = Template.bind({})
Default.args = {
  authors: [
    {
      src: '/images/pikachu.png',
      name: 'avatar',
      postCount: '20',
    },
    {
      src: '/images/pikachu.png',
      name: 'avatar2',
      postCount: '13',
    },
  ],
}
