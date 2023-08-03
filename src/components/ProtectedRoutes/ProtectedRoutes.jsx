
import { useAuth } from "../../contexts/authProvider"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({children}) => {
  const {userLog,loadingLog} = useAuth()

  if(!userLog) return <Navigate to="/login" />


  return (
    <>{children}</>
  )
}

export default ProtectedRoutes