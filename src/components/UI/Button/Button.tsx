import { FC, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'

export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary'
}

type ButtonProps = {
  title: string | ReactNode
  type: ButtonTypes
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const Button: FC<ButtonProps> = (props) => {
  const { type, title, onClick, className, disabled } = props
  const buttonClassName = styles[type]
  return (
    <button className={classNames(styles.button, buttonClassName, className)} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button
