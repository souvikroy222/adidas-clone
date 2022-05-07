import React from 'react'
import { useAuth } from '../auth'
import { Navigate } from 'react-router-dom'


export const RequireAuth = ({children}) => {
    const auth=useAuth()
    if(!auth.user){
        return <Navigate to='/register'/>
    }
  return children  
}

