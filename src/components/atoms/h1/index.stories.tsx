import React from 'react'

import H1 from './presenter'

export default {
  component: H1,
  title: 'atoms/h1',
}

const Template = (args) => <H1 {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'hoge',
}
