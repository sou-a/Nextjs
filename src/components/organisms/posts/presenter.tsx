import styles from '/styles/post.module.css'
import { Author, AuthorProps } from '../../molecules/author/presenter'
import { Tag, TagProps } from '../../atoms/tag/presenter'
import { SelectBox, SelectBoxProps } from '../../atoms/select-box/presenter'
import { Pagination } from '../../molecules/pagination/presenter'
import { FC } from 'react'

export interface PostListProps {
  posts: PostProps[]
  selectBox: SelectBoxProps
}

export const Posts: FC<PostListProps> = ({ posts, selectBox }) => {
  return (
    <div className={styles.div}>
      <div className={styles.between}>
        <h1 className={styles.h1}>Post</h1>
        <SelectBox values={selectBox.values} />
      </div>
      {posts.map((post) => {
        return (
          <div className={styles.mt}>
            <Post
              postDate={post.postDate}
              title={post.title}
              text={post.text}
              author={post.author}
              tag={post.tag}
            />
          </div>
        )
      })}
      <div className={styles.pagination}>
        <Pagination />
      </div>
    </div>
  )
}

interface PostProps {
  postDate: string
  title: string
  text: string
  author: AuthorProps
  tag: TagProps
}

const Post: FC<PostProps> = ({ postDate, title, text, author, tag }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.head}>
        <PostDate value={postDate} />
        <Tag value={tag.value} />
      </div>
      <div className={styles.contents}>
        <Title value={title} />
        <Text value={text} />
      </div>
      <div className={styles.bottom}>
        <ReadMore />
        <Author src={author.src} author={author.author} />
      </div>
    </div>
  )
}

const PostDate = ({ value }) => {
  return <div className={styles.postDate}>{value}</div>
}

const Title = ({ value }) => {
  return <a className={styles.title}>{value}</a>
}

const Text = ({ value }) => {
  return <div className={styles.text}>{value}</div>
}

const ReadMore = () => {
  return <div className={styles.readMore}>Read more</div>
}
