import React from 'react'

import { Footer } from './presenter'

export default {
  component: Footer,
  title: 'atoms/footer',
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'hoge',
}
