import React from 'react'

import { Blog } from './presenter'

export default {
  component: Blog,
  title: 'templates/blog',
}

const Template = (args) => <Blog {...args} />

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
        postCount: '22',
      },
      {
        src: '/images/pikachu.png',
        name: 'avatar2',
        postCount: '23',
      },
    ],
  },
  categoryList: {
    categories: [{ value: 'AWS' }, { value: 'Test' }, { value: 'PHP' }],
  },
  recentPost: {
    tag: { value: 'Tag' },
    title: 'Title',
    author: {
      src: '/images/pikachu.png',
      name: 'author',
      date: '2020/10/12',
    },
  },
}
