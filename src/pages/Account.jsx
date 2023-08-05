import React from 'react'
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import Profile from '../components/Profile'
function Account() {

    
   

   const {  currentUser}  = useContext(AuthContext)

    const [user,setUser] = useState({
      firstname :currentUser.firstName ,
      lastname :currentUser.lastName,
      email :currentUser.email,
      date :currentUser.createdAt
    })

  return (
    <section className='flex  bg-gray-950  flex-col gap-8 justify-center items-center h-screen'>
        
            {
              currentUser &&(<Profile user={user}/>)
            }

    </section>
  )
}

export default Account