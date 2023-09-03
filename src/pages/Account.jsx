import React from 'react'
import { useState } from 'react';
import Profile from '../components/Profile'
import Login from '../authentication/Login';
import { useAuth } from '../context/AuthContext';
function Account() {

    
   

   const {isLoggedIn }  = useAuth()

  

  return (
    <section className='flex  bg-gray-950  flex-col gap-8 justify-center items-center h-screen'>
        
            {
              isLoggedIn ? (<Profile/>) : ( <Login/>)
            }

    </section>
  )
}

export default Account