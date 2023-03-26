
import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../handlers/firebase"
import { ReactComponent as IconLogo } from '../logo.svg'
import './Login.css';


export function Register() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const registerAccount = (e) => {
          e.preventDefault();
          
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredentials) => {
                    const user = userCredentials.user;
          })
          .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
          })
     }

     return (
          <div className="Login" >
               <div className="leftColor"></div>
               <div className="loginCard">
                    <div className="leftCard">
                         <IconLogo className="logo"/>
                    </div>
                    <form>
                         <label className="top">Email</label>
                         <input name="email" type="text" placeholder="email@gmail.com" onChange={(e) => {
                              setEmail(e.target.value);
                         }}/>
                         <label>Password</label>
                         <input name="password" type="text" placeholder="Enter your password" onChange={(e) => {
                              setPassword(e.target.value);
                         }}/>
                         <label>Repeat Password</label>
                         <input type="text" placeholder="Enter your password"/>
                         <button onClick={registerAccount}>Register</button>
                    </form>
               </div>
          </div>
     )
}