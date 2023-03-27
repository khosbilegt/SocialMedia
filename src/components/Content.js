
import React, {useEffect, useState} from 'react'
import { Post } from "./Post"
import { getDisplayName } from "../handlers/user"
import './Content.css';


export function Content({ user }) {

     const [userRef, setUserRef] = useState();
     const [displayName, setDisplayName] = useState("");

     /*
     const displayPosts = () => {
          return <Post user={userRef}/>
     }*/

     useEffect(() => {
          setUserRef(user);

          const fetchData = async () => {
               const data = await getDisplayName(user)
               .then((name) => {
                    setDisplayName(name);
                    //displayPosts();
               });
          }

          fetchData();
     }, [])

     return (
          <div className="Content">
               <Post user={user} displayName={displayName}/>
          </div>
     )
}