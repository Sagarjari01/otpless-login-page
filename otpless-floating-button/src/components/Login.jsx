import React, { useEffect } from 'react'
import { initOTPless } from '../utills/initOtTPless'

const Login = () => {

  useEffect(initOTPless, [])

  return (
    <div>
        <div>Login page</div><br/><br/>
        <button id="otpless" data-custom="true">Login</button>
    </div>
  )
}

export default Login