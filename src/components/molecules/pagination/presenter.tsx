import styles from '/styles/pagination.module.css'

export const Pagination = () => {
  return (
    <div className={styles.flex}>
      <a href="#" className={styles.previous}>
        previous
      </a>

      <a href="#" className={styles.pagination}>
        1
      </a>

      <a href="#" className={styles.pagination}>
        2
      </a>
      <a href="#" className={styles.pagination}>
        3
      </a>

      <a href="#" className={styles.next}>
        Next
      </a>
    </div>
  )
}
