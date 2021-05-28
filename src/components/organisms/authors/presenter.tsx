import { FC } from 'react'
import Img from '../../atoms/img/presenter'
import styles from '/styles/authors.module.css'

export interface AuthorsProps {
  authors: AuthorProps[]
}

export const Authors: FC<AuthorsProps> = ({ authors }) => {
  return (
    <div className={styles.padding}>
      <h1 className={styles.h1}>Authors</h1>
      <div className={styles.layout}>
        <ul className={styles.ul}>
          {authors.map((author) => {
            return (
              <Author src={author.src} name={author.name} date={author.date} />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

interface AuthorProps {
  src: string
  name: string
  date: string
}

// TODO: PostのAuthorと微妙に違うから作り直さないといけない...
const Author: FC<AuthorProps> = ({ src, name, date }) => {
  return (
    <li className={styles.li}>
      <Img src={src} name={name} />
      <p>
        <a className={styles.a}>{name}</a>
        <span className={styles.span}>{date}</span>
      </p>
    </li>
  )
}
