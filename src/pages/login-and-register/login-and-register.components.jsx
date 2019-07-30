import React from 'react'

import Login from '../../components/login/login.components'
import Register from '../../components/register/register.components'
import './login-and-register.styles.scss'

const LoginAndRegister = () => {
    return (
        <div className="login-and-register">
            <Login/>
            <Register/>
        </div>
    )
}

export default LoginAndRegister
