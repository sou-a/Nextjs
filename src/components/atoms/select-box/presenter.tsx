import { FC } from 'react'
import styles from '/styles/select-box.module.css'

export interface SelectBoxProps {
  values: string[]
}

export const SelectBox: FC<SelectBoxProps> = ({ values }) => {
  return (
    <div>
      <select className={styles.selectBox}>
        {values.map((value) => {
          return <option>{value}</option>
        })}
      </select>
    </div>
  )
}
