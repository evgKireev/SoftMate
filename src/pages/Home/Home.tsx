import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../../components/importFileComponents'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home
