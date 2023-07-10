/* eslint-disable max-len */
import { type } from 'os'

import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'

import { useToggle, useWindowSize } from 'usehooks-ts'

import { motion } from 'framer-motion'

import avatar from '../../assets/pictures/avatar-exmpl.png'

import { PlusIcon } from '../../assets/icons/PlusIcon'

import { BellIcon } from '../../assets/icons/BellIcon'
import { GlobeIcon } from '../../assets/icons/GlobeIcon'

import { ButtonWithBadge, ButtonWithBadgeTypes } from '../../components/UI/ButtonWithBadge/ButtonWithBadge'

import { Menu } from '../../components/APP/Menu/Menu'

import { Button } from '../../components/importFileComponents'

import { ButtonTypes } from '../../components/UI/Button/Button'

import { Breackpoint } from '../../scss/media'

import { Burger } from '../../assets/icons/Burger'

import { BurgerMenu } from '../../components/APP/BurgerMenu/BurgerMenu'

import styles from './PersonalAccount.module.scss'

export const PersonalAccount = () => {
  const [isOpenMenu, toggleIsOpenMenu] = useToggle(true)
  const [isOpenBurger, setIsOpenBurger] = useToggle(false)

  const variantsXXXL = {
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

  const variantsXXL = {
    open: {
      marginLeft: 297,
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

  const variantsSM = {
    open: {
      marginLeft: 0,
      transition: {
        duration: 1
      }
    },
    closed: {
      marginLeft: 0,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  }

  const [variants, setVariants] = useState(variantsXXXL)
  const { width } = useWindowSize()

  useEffect(() => {
    width >= Breackpoint.XXXL
      ? setVariants(variantsXXXL)
      : width >= Breackpoint.SM
      ? setVariants(variantsXXL)
      : setVariants(variantsSM)
  }, [width])

  const handleBurger = () => {
    setIsOpenBurger()
  }

  return (
    <div className={styles.wrapper}>
      <BurgerMenu isOpen={isOpenBurger} handleBurger={handleBurger} />
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <img className={styles.avatar} src={avatar} alt="user-avatar" />
            <h2 className={styles.title}>Привет, Pavel</h2>
          </div>
          <div className={styles.buttonContainer}>
            <button type="button" onClick={handleBurger} className={styles.burgerButton}>
              <Burger />
            </button>
            <Button
              title={
                <>
                  <PlusIcon />
                  Создать проект
                </>
              }
              type={ButtonTypes.Primary}
              onClick={() => {}}
              className={styles.button}
            />
            <ButtonWithBadge
              type={ButtonWithBadgeTypes.Medium}
              icon={<BellIcon />}
              onClick={() => {}}
              numberOfNotices={12}
            />
            <ButtonWithBadge
              type={ButtonWithBadgeTypes.Medium}
              icon={<GlobeIcon />}
              onClick={() => {}}
              numberOfNotices={0}
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <Menu isOpen={isOpenMenu} toggleIsOpen={toggleIsOpenMenu} className={styles.menu} />
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
