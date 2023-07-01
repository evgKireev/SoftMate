import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './scss/app.scss'
import { Provider } from 'react-redux'

import { useLayoutEffect, useState } from 'react'

import Router from './pages/Router/Router'

import { store } from './redux/store'
import { Theme } from './theme/themeType'

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer position="bottom-right" />
    </div>
  )
}

const AppWithStore = () => {
  const [themeMode, setThemeMode] = useState<Theme>('dark') //TODO: theme will come from user state

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode)
  }, [themeMode])

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWithStore
