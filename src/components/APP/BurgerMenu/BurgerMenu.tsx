import React from 'react'

import { Link } from 'react-router-dom'

import { Variants, motion } from 'framer-motion'

import { CloseIcon } from '../../../assets/icons/CloseIcon'

import { menuItems } from '../../constants/constants'

import styles from './BurgerMenu.module.scss'

interface IProps {
  isOpen: boolean
  handleBurger: () => void
}

export const BurgerMenu = ({ isOpen, handleBurger }: IProps) => {
  const variantsMenu = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.3
      }
    },
    open: {
      scale: 1,
      transition: {
        type: 'spring',
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  } satisfies Variants

  const variantsItem = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }

  return (
    <div className={isOpen ? styles.wrapper : styles.closed}>
      <button type="button" onClick={handleBurger} className={styles.close}>
        <CloseIcon />
      </button>
      <motion.ul
        className={styles.list}
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
        exit="closed"
        variants={variantsMenu}>
        {menuItems.map(({ title, icon, route }) => (
          <motion.li variants={variantsItem} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to={route} className={styles.item} onClick={handleBurger}>
              {icon}
              {<span>{title}</span>}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
