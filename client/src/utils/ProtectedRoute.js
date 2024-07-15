import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/sign-in" />
}

export default ProtectedRoute
