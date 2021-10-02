import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
// import { auth } from '../../firebase'

function Login({ match }) {
    console.log(match)
    return (
        <div className="loginpage">
            <div className="login">
                <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" /></Link>
            </div>
            <input type="text" placeholder="your email" />
            <input type="text" placeholder="your password" />
        </div>
    )
}

export default Login
