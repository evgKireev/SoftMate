import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, SignIn, SignUp } from '../importFilePages'
import { Main } from '../../components/importFileComponents'

import PrivateRoutes from './PrivateRoutes'

export enum PathNames {
  Home = '/',
  SignIn = '/signin',
  SignUp = '/signup'
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<Home />}>
          <Route index element={<Main />} />
        </Route>
        <Route path={PathNames.SignUp} element={<SignUp />} />
        <Route path={PathNames.SignIn} element={<SignIn />} />
        <Route element={<PrivateRoutes />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
