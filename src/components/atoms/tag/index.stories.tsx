import React from 'react'

import { Tag } from './presenter'

export default {
  component: Tag,
  title: 'atoms/tag',
}

const Template = (args) => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'hoge',
}
