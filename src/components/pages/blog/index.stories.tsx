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
      {
        postDate: '2021/5/02',
        title: 'Title3',
        text: 'Text3',
        author: { author: 'Author3', src: 'images/pikachu.png' },
        tag: { value: 'Tag3' },
      },
      {
        postDate: '2021/5/02',
        title: 'Title4',
        text: 'Text4',
        author: { author: 'Author4', src: 'images/pikachu.png' },
        tag: { value: 'Tag4' },
      },
      {
        postDate: '2021/5/02',
        title: 'Title5',
        text: 'Text5',
        author: { author: 'Author5', src: 'images/pikachu.png' },
        tag: { value: 'Tag5' },
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
