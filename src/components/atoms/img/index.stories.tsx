import React from 'react'
import Img from './presenter'

export default {
  component: Img,
  title: 'atoms/img',
}

const Template = (args) => <Img {...args} />

export const Default = Template.bind({})
Default.args = {
  src: '/images/pikachu.png',
  name: 'avatar',
}
