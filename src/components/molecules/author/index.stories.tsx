import React from 'react'

import { Author } from './presenter'

export default {
  component: Author,
  title: 'molecules/author',
}

const Template = (args) => <Author {...args} />

export const Default = Template.bind({})
Default.args = {
  src: '/images/pikachu.png',
  author: 'avatar',
}
