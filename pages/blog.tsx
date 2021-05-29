import { GetStaticProps } from 'next'
import { BlogPage } from '../src/components/pages/blog/presenter'

export const Blog = ({ blogData }) => {
  return <BlogPage blogData={blogData} />
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const blogData = mockData
  return {
    props: {
      blogData,
    },
  }
}

const mockData = {
  postList: {
    posts: [
      {
        postDate: 'Jun 1, 2020',
        title: 'Build Your New Idea with Laravel Freamwork.',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!',
        author: { author: 'Alex John', src: 'images/pikachu.png' },
        tag: { value: 'Laravel' },
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
