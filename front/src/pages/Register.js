import React from 'react'
import './Register.css';

export function Register() {
     return (
          <div className="Register">
               <div className="left-part">
                    <img 
                    src="https://5.imimg.com/data5/CN/NH/MY-2/wallpaper1-jpg-500x500.jpg"
                    />
               </div>
               <form className="right-part">
                    <label>Hello</label>
                    <input type="text" />

                    <label>Hello</label>
                    <input type="text" name="username"/>
               </form>
          </div>
     )
}