import React from 'react'

import { Pagination } from './presenter'

export default {
  component: Pagination,
  title: 'molecules/pagination',
}

const Template = (args) => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'hoge',
}
