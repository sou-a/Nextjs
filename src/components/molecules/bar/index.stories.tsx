import React from 'react'

import { Bar } from './presenter'

export default {
  component: Bar,
  title: 'molecules/bar',
}

const Template = (args) => <Bar {...args} />

export const Default = Template.bind({})
Default.args = {}
