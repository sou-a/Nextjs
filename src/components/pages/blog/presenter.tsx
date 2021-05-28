import { Blog } from '../../templates/blog/presenter'

export const BlogPage = ({
  postList,
  authorList,
  categoryList,
  recentPost,
}) => {
  return (
    <Blog
      postList={postList}
      authorList={authorList}
      categoryList={categoryList}
      recentPost={recentPost}
    />
  )
}
