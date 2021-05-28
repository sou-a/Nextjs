import React from 'react'

import { SelectBox } from './presenter'

export default {
  component: SelectBox,
  title: 'atoms/select-box',
}

const Template = (args) => <SelectBox {...args} />

export const Default = Template.bind({})
Default.args = {
  values: ['hoge', 'fuga'],
}
