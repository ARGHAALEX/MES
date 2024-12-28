import React, { useEffect } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

const AuthContext = ({children}) => {
  // useEffect(() => {
  //   //setLocalStorage()
  //   getLocalStorage()
  // },)
  return (
    <div>{children}</div>
  )
}

export default AuthContext