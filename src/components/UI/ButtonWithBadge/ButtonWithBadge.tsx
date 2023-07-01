import React from 'react'

import styles from './ButtonWithBadge.module.scss'

interface IProps {
  icon: JSX.Element
  onClick: () => void
  numberOfNotices?: number
}

export const ButtonWithBadge = ({ icon, onClick, numberOfNotices }: IProps) => {
  return (
    <div className={styles.container}>
      <button type="button" onClick={onClick}>
        {icon}
      </button>
      {numberOfNotices ? <div className={styles.badge}>{numberOfNotices}</div> : null}
    </div>
  )
}
