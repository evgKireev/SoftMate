import React from 'react'

import classNames from 'classnames'

import styles from './ButtonWithBadge.module.scss'

export enum ButtonWithBadgeTypes {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

interface IProps {
  icon: JSX.Element
  onClick: () => void
  numberOfNotices?: number
  type: ButtonWithBadgeTypes
}

export const ButtonWithBadge = ({ type, icon, onClick, numberOfNotices }: IProps) => {
  const buttonClassName = styles[type]

  return (
    <div className={classNames(styles.container, buttonClassName)}>
      <button type="button" onClick={onClick}>
        {icon}
      </button>
      {numberOfNotices ? <div className={styles.badge}>{numberOfNotices}</div> : null}
    </div>
  )
}
