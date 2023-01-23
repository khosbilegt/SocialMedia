import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { ReactComponent as IconLogo } from '../logo.svg'
import './Login.css';

export function Login() {
     const navigate = useNavigate()
     const wrongColor = "#fc929e"
     const rightColor = "#8dc891"

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [alertOpacity, setAlertOpacity] = useState(0)
     const [alertColor, setAlertColor] = useState(wrongColor)
     const [alertString, setAlertString] = useState('')

     const submitHandler = (e) => {
          e.preventDefault()

          var data = JSON.stringify({
               "Email": email,
               "Password": password
          });
          
          var config = {
          method: 'post',
          url: 'http://127.0.0.1:4000/auth/login',
          headers: { 
               'Content-Type': 'application/json'
          },
          data : data
          };

          axios(config).then(function (response) {
          console.log(JSON.stringify(response.data));
          if(!JSON.stringify(response.data).includes("token"))  {
               setAlertColor(wrongColor)
               setAlertOpacity(1)
               setAlertString("Email or password is wrong!")
          } else {
               setAlertColor(rightColor)
               setAlertOpacity(1)
               setAlertString("Successfully logged in!")
               navigate('/goodbye')
          }
          })
          .catch(function (error) {
          console.log(error);
          });
     }

     const alertStyle = {
          backgroundColor: alertColor,
          opacity: alertOpacity
     }

     return (
          <div className="Login" >
               <form id="LoginCard" onSubmit={submitHandler}>
                    <div id="Alert" style={alertStyle}>
                         <p>{alertString}</p>
                    </div>
                    <IconLogo id="Logo"/>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => {
                         setEmail(e.target.value)
                    }}/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => {
                         setPassword(e.target.value)
                    }}/>
                    <button type="submit">Login</button>
                    <p>Don't have an account? Register <Link to={"/register"}>here</Link>!</p>
               </form>
          </div>
     )
}