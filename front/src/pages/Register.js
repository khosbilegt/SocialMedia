import React, {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import './Register.css';

export function Register() {
     const wrongColor = "#fc929e"
     const rightColor = "#8dc891"

     const [email, setEmail] = useState('')
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')
     const [alertOpacity, setAlertOpacity] = useState(0)
     const [alertColor, setAlertColor] = useState(wrongColor)
     const [alertString, setAlertString] = useState('')

     const validatePassword = () => {
          console.log(password)

          if(password.length < 8) {
               setAlertColor(wrongColor)
               setAlertOpacity(1)
               setAlertString("Password must have more than 8 characters!")
               return false
          }

          if(confirmPassword != password) {
               setAlertColor(wrongColor)
               setAlertOpacity(1)
               setAlertString("Password doesn't match!")
               return false
          }

          if(password.toLowerCase() == password) {
               setAlertColor(wrongColor)
               setAlertOpacity(1)
               setAlertString("Password must contain at least 1 uppercase letter!")
               return false
          }

          if(password.toUpperCase() == password) {
               setAlertColor(wrongColor)
               setAlertOpacity(1)
               setAlertString("Password must contain at least 1 lowercase letter!")
               return false
          }

          if(!/[^a-zA-Z]/.test(password)) {
               setAlertColor(wrongColor)
               setAlertOpacity(1)
               setAlertString("Password must contain at least 1 number!")
               return false
          }
          
          const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`
          const specialCharExists = specialChars.split('').some(char => password.includes(char))
          if(specialCharExists) {
               setAlertColor(rightColor)
               setAlertOpacity(1)
               setAlertString("Password is valid!")
               return true
          } else {
               setAlertColor(wrongColor)
               setAlertOpacity(1)
               setAlertString("Password must contain at least 1 special character!")
               return false
          }
     }

     const submitHandler = (e) => {
          e.preventDefault()
          
          if(!validatePassword()) {
               return
          }

          var data = JSON.stringify({
          "Username": username,
          "Password": password,
          "Email": email
          });

          var config = {
          method: 'post',
          url: 'http://192.168.1.32:4000/users',
          headers: { 
          'Content-Type': 'application/json'
          },
          data : data
          };

          axios(config)
          .then(function (response) {
               if(JSON.stringify(response.data) === "User created successfully") {
                    setAlertColor(rightColor)
                    setAlertOpacity(1)
                    setAlertString("Account created successfully!")
               } else {
                    setAlertColor(wrongColor)
                    setAlertOpacity(1)
                    setAlertString("Account creation failed!")
               }
          })
          .catch(function (error) {
               setAlertColor(wrongColor)
               setAlertOpacity(1)
               setAlertString("Account creation failed!")
               console.log(error);
          });

     }

     const deleteAlert = (e) => {
          e.preventDefault()
          setAlertOpacity(0)
     }

     const alertStyle = {
          backgroundColor: alertColor,
          opacity: alertOpacity
     }

     return (
          <div className="Register">
               <form id="RegisterCard" onSubmit={submitHandler}>
                    <div id="Alert" style={alertStyle}>
                         <button onClick={deleteAlert}>x</button>
                         <p>{alertString}</p>
                    </div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => {
                         setEmail(e.target.value)
                    }}/>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => {
                         setUsername(e.target.value)
                    }}/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Choose Password" value={password} onChange={(e) => {
                         setPassword(e.target.value)
                    }}/>
                    <label>Confirm Password</label>
                    <input type="password" name="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => {
                         setConfirmPassword(e.target.value)
                    }}/>
                    <button type="submit">Sign Up</button>
                    <p>Already have an account? Login <Link to={"/register"}>here</Link>!</p>
               </form>
          </div>
     )
}