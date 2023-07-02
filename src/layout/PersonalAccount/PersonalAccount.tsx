import React from 'react'

import { Outlet } from 'react-router-dom'

import { useToggle } from 'usehooks-ts'

import { motion } from 'framer-motion'

import avatar from '../../assets/pictures/avatar-exmpl.png'

import { PlusIcon } from '../../assets/icons/PlusIcon'

import { BellIcon } from '../../assets/icons/BellIcon'
import { GlobeIcon } from '../../assets/icons/GlobeIcon'

import { ButtonWithBadge } from '../../components/UI/ButtonWithBadge/ButtonWithBadge'

import { Menu } from '../../components/APP/Menu/Menu'

import styles from './PersonalAccount.module.scss'

export const PersonalAccount = () => {
  const [isOpenMenu, toggleIsOpenMenu] = useToggle(true)

  const variants = {
    open: {
      marginLeft: 403,
      transition: {
        duration: 1
      }
    },
    closed: {
      marginLeft: 108,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  }

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

      <div className={styles.container}>
        <Menu isOpen={isOpenMenu} toggleIsOpen={toggleIsOpenMenu} />
        <motion.div
          className={isOpenMenu ? styles.content : styles.contentMax}
          initial="closed"
          exit="closed"
          animate={isOpenMenu ? 'open' : 'closed'}
          variants={variants}>
          <Outlet />
        </motion.div>
      </div>
    </div>
  )
}
