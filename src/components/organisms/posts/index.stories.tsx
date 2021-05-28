import React from 'react'

import { Posts } from './presenter'

export default {
  component: Posts,
  title: 'organisms/posts',
}

const Template = (args) => <Posts {...args} />

export const Default = Template.bind({})
Default.args = {
  posts: [
    {
      postDate: '2021/5/21',
      title: 'Title',
      text: 'Text',
      author: { author: 'Author', src: 'images/pikachu.png' },
      tag: { value: 'Tag' },
    },
    {
      postDate: '2021/5/02',
      title: 'Title2',
      text: 'Text2',
      author: { author: 'Author2', src: 'images/pikachu.png' },
      tag: { value: 'Tag2' },
    },
  ],
  selectBox: {
    values: ['Latest', 'Last Week'],
  },
}
