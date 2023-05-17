import { Outlet } from 'react-router-dom'

import { Header } from '../../components/importFileComponents'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  )
}

export default Home
