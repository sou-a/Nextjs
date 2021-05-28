import React from 'react'

import { Categories } from './presenter'

export default {
  component: Categories,
  title: 'organisms/categories',
}

const Template = (args) => <Categories {...args} />

export const Default = Template.bind({})
Default.args = {
  categories: [{ value: 'AWS' }, { value: 'Test' }, { value: 'PHP' }],
}
