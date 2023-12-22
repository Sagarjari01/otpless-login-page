import React from 'react'
import { initOTPless } from '../utills/initOtTPless'

const Login = () => {

  useEffect(initOTPless, [])

  return (
    <div>
        <div>Login page</div><br/><br/>
        <div id="otpless" data-custom="true">Login</div>
    </div>
  )
}

export default Login
