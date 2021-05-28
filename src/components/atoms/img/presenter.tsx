import Image from 'next/image'
import styles from '/styles/img.module.css'

export default function Img({ src, name }) {
  return (
    // TODO: Image from 'next/image' で表示したい...
    <img src={src} className={styles.img} height={108} width={108} alt={name} />
  )
}
