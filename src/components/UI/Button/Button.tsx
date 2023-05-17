import { FC, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './ButtonNew.module.scss'

export enum ButtonNewTypes {
  Primary = 'primary',
  Secondary = 'secondary'
}

type ButtonNewProps = {
  title: string | ReactNode
  type: ButtonNewTypes
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const ButtonNew: FC<ButtonNewProps> = (props) => {
  const { type, title, onClick, className, disabled } = props
  const buttonClassName = styles[type]
  return (
    <button className={classNames(styles.button, buttonClassName, className)} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

export default ButtonNew
