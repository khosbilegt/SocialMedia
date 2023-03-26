
import React, {useState} from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"
import { ReactComponent as IconLogo } from '../logo.svg'
import { FaRegUser, FaRegEnvelope, FaRegBell } from "react-icons/fa"


export function Navbar() {

     return (
          <div className="Navbar" >
               <IconLogo />
               <input type="text" placeholder="Search"/>
               <ul>
                    <li><Link to={"test"}>
                         <FaRegBell />
                    </Link></li>
                    <li><Link to={"test"}>
                         <FaRegEnvelope />
                    </Link></li>
                    <li><Link to={"test"}>
                         <FaRegUser />
                    </Link></li>
               </ul>
          </div>
     )
}