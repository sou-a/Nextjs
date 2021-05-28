import styles from '/styles/bar.module.css'

export const Bar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.between}>
        <Button />
        <Link />
      </div>
    </nav>
  )
}

function Link() {
  return (
    <div className={styles.linkLayout}>
      <a href="#" className={styles.link}>
        Home
      </a>
      <a href="#" className={styles.link}>
        Blog
      </a>
      <a href="#" className={styles.link}>
        About us
      </a>
    </div>
  )
}

function Button() {
  return (
    <div className={styles.buttonLayout}>
      <div>
        <a href="#" className={styles.buttonAnchor}>
          Brand
        </a>
      </div>
      {/* TODO: レスポンシブ対応？ */}
      {/* <div>
        <button type="button" className={styles.button}>
          <svg viewBox="0 0 24 24" className={styles.svg}>
            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div> */}
    </div>
  )
}
