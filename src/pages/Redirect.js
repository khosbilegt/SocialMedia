
import React, { useState, useEffect } from 'react'
import { Login } from "./Login"
import { Home } from "./Home"
import { auth } from "../handlers/firebase"
import './Login.css';
import '../components/Spinner.css'


export function Redirect() {
     const [loggedIn, setLoggedIn] = useState(false);
     const [loaded, setLoaded] = useState(false);
     const [user, setUser] = useState(null);

     auth.onAuthStateChanged(function(user) {
          setUser(user);
          if (user !== null) {
               console.log('User is logged in');
               console.log(auth.currentUser.email);
               setUser(user);
               setLoggedIn(true);
          }
          setLoaded(true);
     });

     if(loggedIn && loaded) {
          return <Home user={user} />
     }
     if(!loggedIn && loaded) {
          return <Login />
     }
     return (
          <div className="Redirect">
               <div className="spinner">

               </div>
          </div>
     )
}