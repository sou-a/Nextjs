import styles from '/styles/h1.module.css'

export default function H1({ value }) {
  return <h1 className={styles.h1}>{value}</h1>
}
