import { Navbar } from "../components/Navbar"
import { Content } from "../components/Content"
import { signOut } from "firebase/auth"
import { auth } from "../handlers/firebase"
import React, {useState} from 'react'
import './Login.css';


export function Home() {
     const logout = () => {
          signOut(auth).then(() => {
               window.location.reload(false);
          })
     }

     return (
          <div className="Home" >
               <Navbar />
               <Content />

               <button onClick={logout}>Logout</button>
          </div>
     )
}