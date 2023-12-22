import React from 'react'
import { initOTPless } from '../utills/initOtTPless'

const Login = () => {
  return (
    <div>
        <div>Login page</div><br/><br/>
        <button onClick={initOTPless}>Login</button>
    </div>
  )
}

export default Login