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
      date: '2020/10/12',
    },
    {
      src: '/images/pikachu.png',
      name: 'avatar2',
      date: '2020/10/13',
    },
  ],
}
