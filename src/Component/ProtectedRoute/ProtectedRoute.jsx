import { Navigate } from "react-router-dom"

export default function ProtectedRoute({children}) {
    if(localStorage.getItem("tkn")==null){
        return <>
        <Navigate to="/signin"/>
        </>
    }
  return (
    <>
    {children}
    </>
  )
}
