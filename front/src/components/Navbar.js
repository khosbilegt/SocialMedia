import React, { useState, useEffect } from 'react'
import './Navbar.css';
import { ReactComponent as IconLogo } from '../logo.svg'
import { Link } from "react-router-dom";
import { FaHome, FaBell } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import { RiMessageFill } from 'react-icons/ri'

export function Navbar() {
     return (
          <div className="Navbar" >
               <div className="SearchBar">
                    <Link to="/home"><IconLogo id="Logo"/></Link>
                    <input type="text" placeholder="Search"/>
               </div>
               <ul>
                    <li><Link to="/home"><FaHome /></Link></li>
                    <li><button><RiMessageFill /></button></li>
                    <li><button><FaBell /></button></li>
                    <li><button><BsFillGearFill /></button></li>
               </ul>
          </div>
     )
}