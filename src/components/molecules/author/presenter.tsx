import Img from '../../atoms/img/presenter'
import H1 from '../../atoms/h1/presenter'
import styles from '/styles/author.module.css'
import { FC } from 'react'

export interface AuthorProps {
  src: string
  author: string
}

export const Author: FC<AuthorProps> = ({ src, author }) => {
  return (
    <div>
      <a className={styles.author}>
        <Img src={src} name={author} />
        <H1 value={author} />
      </a>
    </div>
  )
}
