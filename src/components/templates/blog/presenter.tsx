import { FC } from 'react'
import { Footer } from '../../atoms/foooter/presenter'
import { Khatabwedaa } from '../../atoms/khatabwedaa/presenter'
import { Bar } from '../../molecules/bar/presenter'
import { Authors, AuthorsProps } from '../../organisms/authors/presenter'
import {
  Categories,
  CategoriesProps,
} from '../../organisms/categories/presenter'
import { Posts, PostListProps } from '../../organisms/posts/presenter'
import {
  RecentPost,
  RecentPostProps,
} from '../../organisms/recentPost/presenter'
import styles from '/styles/templates/blog.module.css'

export interface BlogProps {
  postList: PostListProps
  authorList: AuthorsProps
  categoryList: CategoriesProps
  recentPost: RecentPostProps
}

export const Blog: FC<BlogProps> = ({
  postList,
  authorList,
  categoryList,
  recentPost,
}) => {
  return (
    <body className={styles.bg}>
      <Khatabwedaa />
      <div className={styles.bg2}>
        <Bar />

        <div className={styles.padding}>
          <div className={styles.container}>
            <Posts posts={postList.posts} selectBox={postList.selectBox} />
            <div className={styles.sideBar}>
              <Authors authors={authorList.authors} />

              <Categories categories={categoryList.categories} />

              <RecentPost
                tag={recentPost.tag}
                title={recentPost.title}
                author={recentPost.author}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </body>
  )
}
