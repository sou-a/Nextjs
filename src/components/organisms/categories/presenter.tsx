import { FC } from 'react'
import styles from '/styles/authors.module.css'

export interface CategoriesProps {
  categories: CategoryProps[]
}

export const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.padding}>
      <h1 className={styles.h1}>Categories</h1>
      <div className={styles.layout}>
        {/* TODO: user agent stylesheetが効いているので表示が正しくない */}
        {/* <ul className={styles.ul}> */}
        <ul>
          {categories.map((category) => {
            return <Category value={category.value} />
          })}
        </ul>
      </div>
    </div>
  )
}

export interface CategoryProps {
  value: string
}

const Category: FC<CategoryProps> = ({ value }) => {
  return (
    <li className={styles.li}>
      <a className={styles.a}>- {value}</a>
    </li>
  )
}
