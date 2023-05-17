import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const auth = false
  //сюда присобачь флаг проверки залогинен или нет
  return auth ? <Outlet /> : <Navigate to="/signin" />
}
export default PrivateRoutes
