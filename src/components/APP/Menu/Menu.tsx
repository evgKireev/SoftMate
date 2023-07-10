import React from 'react'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import classNames from 'classnames'

import { UserIcon } from '../../../assets/icons/UserIcon'

import { FilesIcon } from '../../../assets/icons/FilesIcon'

import { FileCheckIcon } from '../../../assets/icons/FileCheckIcon'

import { PersonCheckIcon } from '../../../assets/icons/PersonCheckIcon'

import { ChatIcon } from '../../../assets/icons/ChatIcon'
import { QuestionIcon } from '../../../assets/icons/QuestionIcon'
import { SettingsIcon } from '../../../assets/icons/SettingsIcon'

import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon'

import { ArrowRightIcon } from '../../../assets/icons/ArrowRightIcon'

import styles from './Menu.module.scss'

interface IProps {
  isOpen: boolean
  toggleIsOpen: () => void
  className: string
}

export const Menu = ({ isOpen, toggleIsOpen, className }: IProps) => {
  // TODO: add links
  const variantsMenu = {
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

  const variantsItem = {
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

  return (
    <motion.ul
      className={isOpen ? classNames(styles.wrapper, className) : classNames(styles.wrapperMini, className)}
      initial="closed"
      exit="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variantsMenu}>
      <li className={styles.itemActive}>
        <Link to="" className={styles.item}>
          <UserIcon />
          {isOpen && (
            <motion.span initial="closed" exit="closed" animate={isOpen ? 'open' : 'closed'} variants={variantsItem}>
              Личная информация
            </motion.span>
          )}
        </Link>
      </li>
      <li>
        <Link to="" className={styles.item}>
          <FilesIcon />
          {isOpen && (
            <motion.span initial="closed" exit="closed" animate={isOpen ? 'open' : 'closed'} variants={variantsItem}>
              Список проектов
            </motion.span>
          )}
        </Link>
      </li>
      <li>
        <Link to="" className={styles.item}>
          <FileCheckIcon />
          {isOpen && (
            <motion.span initial="closed" exit="closed" animate={isOpen ? 'open' : 'closed'} variants={variantsItem}>
              Сохраненные проекты
            </motion.span>
          )}
        </Link>
      </li>
      <li>
        <Link to="" className={styles.item}>
          <PersonCheckIcon />
          {isOpen && (
            <motion.span initial="closed" exit="closed" animate={isOpen ? 'open' : 'closed'} variants={variantsItem}>
              Мои специалисты
            </motion.span>
          )}
        </Link>
      </li>
      <li>
        <Link to="" className={styles.item}>
          <ChatIcon />
          {isOpen && (
            <motion.span initial="closed" exit="closed" animate={isOpen ? 'open' : 'closed'} variants={variantsItem}>
              Чат
            </motion.span>
          )}
        </Link>
      </li>
      <li>
        <Link to="" className={styles.item}>
          <QuestionIcon />
          {isOpen && (
            <motion.span initial="closed" exit="closed" animate={isOpen ? 'open' : 'closed'} variants={variantsItem}>
              Информация
            </motion.span>
          )}
        </Link>
      </li>
      <li className={styles.itemBig}>
        <Link to="" className={styles.item}>
          <SettingsIcon />
          {isOpen && (
            <motion.span initial="closed" exit="closed" animate={isOpen ? 'open' : 'closed'} variants={variantsItem}>
              Настройки
            </motion.span>
          )}
        </Link>
      </li>

      <li className={styles.buttonLeft}>
        <button type="button" onClick={toggleIsOpen}>
          {isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </button>
      </li>
    </motion.ul>
  )
}
