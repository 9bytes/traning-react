import React, { useRef } from 'react'
import "./LoginForm.css"

function LoginForm(props) {
    
    const refUserName = useRef(null);
    const refPassWrd = useRef(null);
    
    const { loginHandler, loginError } = props;



    return (
        <div className="login-form">
            <input ref={refUserName} placeholder="User Name"></input>
            <input ref={refPassWrd} placeholder="Password">
            </input>
            
            <input type="checkbox"></input>
            <span>Remember</span>
            <button onClick={ () =>  loginHandler(refUserName.current.value, refPassWrd.current.value)  }>Login</button>
            
            {
                loginError && 
                    <span className="error-text">Login failed, Please check your credentials</span>
            }
            
        </div>
    )
}

export default LoginForm
