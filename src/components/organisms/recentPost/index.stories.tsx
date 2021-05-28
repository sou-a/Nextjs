import { RecentPost } from './presenter'

export default {
  component: RecentPost,
  title: 'organisms/recentPost',
}

const Template = (args) => <RecentPost {...args} />

export const Default = Template.bind({})
Default.args = {
  tag: { value: `Tag` },
  title: 'Title',
  author: {
    src: '/images/pikachu.png',
    name: 'author',
    date: '2020/10/12',
  },
}
