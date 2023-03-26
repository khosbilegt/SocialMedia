
import React, { useState } from 'react'
import { ReactComponent as IconLogo } from '../logo.svg'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../handlers/firebase"
import './Login.css';


export function Login() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [loggedIn, setLoggedIn] = useState(false);
     const [user, setUser] = useState(null);

     const login = (e) => {
          e.preventDefault();
          signInWithEmailAndPassword(auth, email, password)
               .then((userCredentials) => {
                    const user = userCredentials.user;
                    setLoggedIn(true);
               })
               .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
               });
     }

     if(loggedIn) {
          return <p>Logged in</p>
     }
     return (
          <div className="Login" >
               <div className="leftColor"></div>
               <div className="loginCard">
                    <div className="leftCard">
                         <IconLogo className="logo top"/>
                    </div>
                    <form>
                         <h1>LOGIN</h1>
                         <label className="top">Email</label>
                         <input name="email" type="text" placeholder="email@gmail.com" onChange={(e) => {
                              setEmail(e.target.value);
                         }}/>
                         <label>Password</label>
                         <input name="password" type="text" placeholder="Enter your password" onChange={(e) => {
                              setPassword(e.target.value);
                         }}/>
                         <button onClick={login}>Login</button>
                    </form>
               </div>
          </div>
     )
}