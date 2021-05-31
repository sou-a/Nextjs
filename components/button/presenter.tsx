import { FC, MouseEventHandler, ReactNode } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

type color = 'red' | 'blue' | 'green'
type size = 'small' | 'medium' | 'large'

interface ButtonProps {
  color: color
  children: ReactNode
  size: size
  disabled: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({
  color,
  children,
  size,
  disabled,
  onClick,
  ...props
}) => {
  const className = classNames(styles, {
    [styles.red]: color === 'red',
    [styles.blue]: color === 'blue',
    [styles.green]: color === 'green',
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large',
    [styles.disabled]: disabled === true,
  })
  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
