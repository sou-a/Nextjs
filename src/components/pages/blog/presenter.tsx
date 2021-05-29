import { Blog, BlogProps } from '../../templates/blog/presenter'

export interface BlogPageProps {
  blogData: BlogProps
}

export const BlogPage = ({ blogData }) => {
  return (
    <Blog
      postList={blogData.postList}
      authorList={blogData.authorList}
      categoryList={blogData.categoryList}
      recentPost={blogData.recentPost}
    />
  )
}
