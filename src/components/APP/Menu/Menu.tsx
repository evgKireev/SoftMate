/* eslint-disable indent */
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import classNames from 'classnames'

import { useWindowSize } from 'usehooks-ts'

import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon'

import { ArrowRightIcon } from '../../../assets/icons/ArrowRightIcon'

import { Breackpoint } from '../../../scss/media'

import { menuItems } from '../../constants/constants'

import styles from './Menu.module.scss'

interface IProps {
  isOpen: boolean
  toggleIsOpen: () => void
  className: string
}

export const Menu = ({ isOpen, toggleIsOpen, className }: IProps) => {
  const variantsMenuXXXL = {
    open: {
      width: 383,
      transition: {
        duration: 1
      }
    },
    closed: {
      width: 88,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  }

  const variantsMenuXXL = {
    open: {
      width: 277,
      transition: {
        duration: 1
      }
    },
    closed: {
      width: 88,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  }

  const variantsItemXXXL = {
    open: {
      display: 'flex',
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.45
      }
    },
    closed: {
      display: 'none',
      opacity: 0,
      transition: {
        duration: 2,
        delay: 0.2
      },
      transitionEnd: {
        display: 'none',
        opacity: 0
      }
    }
  }

  const variantsItemXXL = {
    open: {
      display: 'flex',
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.87
      }
    },
    closed: {
      display: 'none',
      opacity: 0,
      transition: {
        duration: 2,
        delay: 0.2
      },
      transitionEnd: {
        display: 'none',
        opacity: 0
      }
    }
  }

  const [variantsMenu, setVariantsMenu] = useState(variantsMenuXXXL)
  const [variantsItem, setVariantsItem] = useState(variantsItemXXXL)

  const { width } = useWindowSize()

  useEffect(() => {
    if (width >= Breackpoint.XXXL) {
      setVariantsMenu(variantsMenuXXXL)
      setVariantsItem(variantsItemXXXL)
    } else {
      setVariantsMenu(variantsMenuXXL)
      setVariantsItem(variantsItemXXL)
    }
  }, [width])

  const currentUrl = window.location.pathname

  return (
    <motion.ul
      className={isOpen ? classNames(styles.wrapper, className) : classNames(styles.wrapperMini, className)}
      initial="closed"
      exit="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variantsMenu}>
      {menuItems.map(({ title, icon, route }) => (
        <li
          className={
            currentUrl === route && title === 'Настройки'
              ? classNames(styles.itemActive, styles.itemBig)
              : currentUrl === route
              ? styles.itemActive
              : title === 'Настройки'
              ? styles.itemBig
              : ''
          }>
          <Link to="" className={styles.item}>
            {icon}
            {isOpen && (
              <motion.span initial="closed" exit="closed" animate={isOpen ? 'open' : 'closed'} variants={variantsItem}>
                {title}
              </motion.span>
            )}
          </Link>
        </li>
      ))}

      <li className={styles.buttonLeft}>
        <button type="button" onClick={toggleIsOpen}>
          {isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </button>
      </li>
    </motion.ul>
  )
}
