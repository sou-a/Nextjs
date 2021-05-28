import { FC } from 'react'
import styles from '/styles/recentPost.module.css'

export interface RecentPostProps {
  tag: TagProps
  title: string
  author: AuthorProps
}

export const RecentPost: FC<RecentPostProps> = ({ tag, title, author }) => {
  return (
    <div className={styles.padding}>
      <h1 className={styles.h1}>Recent Post</h1>
      <div className={styles.layout}>
        <div className={styles.head}>
          <Tag value={tag.value} />
        </div>
        <div className={styles.contents}>
          <Title value={title} />
        </div>
        <Author src={author.src} name={author.name} date={author.date} />
      </div>
    </div>
  )
}

interface TagProps {
  value: string
}

const Tag: FC<TagProps> = ({ value }) => {
  return <a className={styles.tag}>{value}</a>
}

const Title = ({ value }) => {
  return <a className={styles.title}>{value}</a>
}

interface AuthorProps {
  src: string
  name: string
  date: string
}

const Author: FC<AuthorProps> = ({ src, name, date }) => {
  return (
    <div className={styles.bottom}>
      <div className={styles.author}>
        <img className={styles.img} src={src} />
        <a className={styles.name}>{name}</a>
      </div>
      <span className={styles.date}>{date}</span>
    </div>
  )
}
