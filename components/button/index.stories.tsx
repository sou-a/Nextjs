import Button from './presenter'

export default {
  component: Button,
  title: 'button',
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'hoge',
}

export const Story1 = Template.bind({})
Story1.args = {
  color: 'blue',
  children: '応募する',
  size: 'medium',
  disabled: false,
  onClick: onclick,
}

export const Story2 = Template.bind({})
Story2.args = {
  color: 'red',
  children: '削除する',
  size: 'small',
  disabled: false,
  onClick: onclick,
}

export const Story3 = Template.bind({})
Story3.args = {
  color: 'red',
  children: '削除する',
  size: 'small',
  disabled: true,
  onClick: onclick,
}
