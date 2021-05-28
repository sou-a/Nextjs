import { FC } from 'react'
import styles from '/styles/tag.module.css'

export interface TagProps {
  value: string
}

export const Tag: FC<TagProps> = ({ value }) => {
  return (
    <a href="#" className={styles.tag}>
      {value}
    </a>
  )
}
