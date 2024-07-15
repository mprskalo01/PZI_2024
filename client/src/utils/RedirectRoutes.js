import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RedirectRoutes = () => {
  //only when logged in as Admin
  //show only the admin routes and its outlet's
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return userInfo && userInfo.isAdmin ? <Navigate to="admin" /> : <Outlet />
}

export default RedirectRoutes
