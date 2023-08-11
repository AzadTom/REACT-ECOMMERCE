import React from 'react'
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Profile from '../components/Profile'
import Login from '../authentication/Login';
function Account() {

    
   

   const {  currentUser}  = useAuth()

    const [user,setUser] = useState({
      firstname :currentUser?.firstName ,
      lastname :currentUser?.lastName ,
      email :currentUser?.email ,
      date :currentUser?.createdAt 
    })

  return (
    <section className='flex  bg-gray-950  flex-col gap-8 justify-center items-center h-screen'>
        
            {
              currentUser ? (<Profile user={user}/>) : ( <Login/>)
            }

    </section>
  )
}

export default Account