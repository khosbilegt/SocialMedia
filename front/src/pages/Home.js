import React, {useState} from 'react'
import { Navbar } from "../components/Navbar"
//import { Link, useNavigate } from "react-router-dom";
//import axios from 'axios'
import './Home.css';

export function Home() {
     return (
          <div className="Home" >
               <Navbar />
               <p>Hello</p>
          </div>
     )
}