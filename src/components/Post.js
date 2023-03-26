
import React, {useState} from 'react'
import './Post.css';


export function Post() {

     return (
          <div className="Post">
               <div className="user">
                    <img src="http://cdn.onlinewebfonts.com/svg/img_237553.png"/>
                    <p>Xocoo</p>
               </div>
               <div className="textContent">
                    <p>50 hilarious workplace memes that may help you get through your workday better:</p>
               </div>
          </div>
     )
}