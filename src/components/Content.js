
import React, {useState} from 'react'
import { Post } from "./Post"
import './Content.css';
import { Link } from "react-router-dom"
import { ReactComponent as IconLogo } from '../logo.svg'
import { FaRegUser, FaRegEnvelope, FaRegBell } from "react-icons/fa"


export function Content() {

     return (
          <div className="Content">
               <Post />
          </div>
     )
}