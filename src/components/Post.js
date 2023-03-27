
import React, {useState} from 'react'
import './Post.css';


export function Post({ user, displayName }) {

     return (
          <div className="Post">
               <div className="user">
                    <img src="http://cdn.onlinewebfonts.com/svg/img_237553.png"/>
                    <p>{displayName}</p>
               </div>
               <div className="textContent">
                    <p>50 hilarious workplace memes that may help you get through your workday better:</p>
               </div>
          </div>
     )
}