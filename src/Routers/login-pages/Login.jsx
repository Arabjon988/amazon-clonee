import React, { useState } from 'react';
import './Login.css';
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { auth, provider, firebase } from '../../firebase';

function Login({ match }) {
    const history = useHistory("")
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const registerUser = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                if(user){
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }

    const loginUser = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                if(user){
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }

    const singInWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then((user) => ((user) =>{
                if(user){
                    history.push("/")
                }
            }))
            .catch(error => console.log(error.message))
    }

    const registerPhoneNumber = () => {
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha)
            .then((e) => {
                let code = prompt("Enter Code");
                if (code === null) {
                    return
                }
                e.confirm(code).then((response) => {
                    history.push("/")
                })
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="loginpage">
            <div className="login">
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
                </Link>
                <input type="text" placeholder="your email" value={email} onChange={e => setEmail(e.target.value)} />
                <button onClick ={() => setShow(!show)}>{show ? "hide" : "show"}</button>
                <input type={show ? "text" : "password"} placeholder="your password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="text" placeholder="telphone" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                <button onClick={registerUser}>Create an account</button>
                <button onClick={loginUser}>Login</button>
                <button onClick={singInWithGoogle}>Sign in With Google</button>
                <button onClick={registerPhoneNumber}>Register with phone number</button>
            </div>
            <div id="recaptcha-container"></div>
        </div>
    )
}

export default Login





























// import React from 'react'
// import { useState } from 'react'
// import "./Login.css"
// import { Link } from 'react-router-dom'
// import { auth, provider, app } from '../../firebase'

// function Login() {
//     const [email, setEmail] = useState("")
//     const [phoneNumber, setPhoneNumber] = useState("")
//     const [password, setPassword] = useState("")
//     const registerUser =()=>{
//         auth.createUserWithEmailAndPassword(email, password)
//         .then(user => console.log(user))
//         .catch( err => alert(err.message))
//     }

//     const loginUser =()=>{
//         auth.signInWithEmailAndPassword(email, password)
//         .then(user => console.log(user))
//         .catch( err => alert(err.message))
//     }

//     const signInWithGoogle=()=>{
//         auth.signInWithPopup(provider)
//         .then( user => console.log(user))
//         .catch(err => alert(err.message))

//     }


//     const registerPhoneNumber = () =>{
//     let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container'); 
//     app.auth().signInWithPhoneNumber(phoneNumber, recaptcha) 
//     .then((e) => { 
//       let code = prompt("Enter Code"); 
//       if(code === null){ 
//         return 
//       } 
//       e.confirm(code).then((response) => { 
//         console.log(response) 
//       }) 
//     }).catch((error) => { 
//       console.log(error) 
//     })

//     return (
//         <div className="loginpage">
//             <div className="login">
//                 <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" /></Link>
//             </div>
//             <input type="email" placeholder="your email" value={email} onChange={ e => setEmail(e.target.value) } />
//             <input type="password" placeholder="your password" value={password} onChange={ e => setPassword(e.target.value) } />
//             <input type="text" placeholder="telephone" value={phoneNumber} onChange ={e => setPhoneNumber(e.target.value)} />
//             <button onClick = {registerUser}>Create an Account</button>
//             <button onClick={loginUser}></button>
//             <button onClick={signInWithGoogle}>Sign In With Google</button>
//             <button onClick={registerPhoneNumber}>Register with Phone Number</button>
//         </div>
//     )
// }

// export default Login
