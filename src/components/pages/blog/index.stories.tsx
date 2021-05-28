import React from 'react'

import { BlogPage } from './presenter'

export default {
  component: BlogPage,
  title: 'pages/blogPage',
}

const Template = (args) => <BlogPage {...args} />

export const Default = Template.bind({})
Default.args = {
  postList: {
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
  },
  authorList: {
    authors: [
      {
        src: '/images/pikachu.png',
        name: 'avatar',
        date: '2020 10 12',
      },
      {
        src: '/images/pikachu.png',
        name: 'avatar2',
        date: '2020 10 13',
      },
    ],
  },
  categoryList: {
    categories: [{ value: 'AWS' }, { value: 'Test' }, { value: 'PHP' }],
  },
  recentPost: {
    tag: { value: 'Tag' },
    title: 'Title',
    author: { author: 'Author', src: 'images/pikachu.png' },
  },
}
