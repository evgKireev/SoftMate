import React from 'react'

import { Outlet } from 'react-router-dom'

import avatar from '../../assets/pictures/avatar-exmpl.png'

import { PlusIcon } from '../../assets/icons/PlusIcon'

import { BellIcon } from '../../assets/icons/BellIcon'
import { GlobeIcon } from '../../assets/icons/GlobeIcon'

import { ButtonWithBadge } from '../../components/UI/ButtonWithBadge/ButtonWithBadge'

import styles from './PersonalAccount.module.scss'

export const PersonalAccount = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <img className={styles.avatar} src={avatar} alt="user-avatar" />
          <h2 className={styles.title}>Привет, Pavel</h2>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonAddProject} type="button" onClick={() => {}}>
              <PlusIcon />
              Создать проект
            </button>
            <ButtonWithBadge icon={<BellIcon />} onClick={() => {}} numberOfNotices={12} />
            <ButtonWithBadge icon={<GlobeIcon />} onClick={() => {}} numberOfNotices={0} />
          </div>
        </div>
      </div>

      <div className={styles.container} style={{ background: 'blue' }}>
        container
        <div className={styles.asideNav} style={{ background: 'green' }}>
          asideNav
        </div>
        <Outlet />
      </div>
    </div>
  )
}
