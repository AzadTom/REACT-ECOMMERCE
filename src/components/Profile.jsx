import React from 'react'
import {AuthContext} from '../context/AuthContext'
import { useContext } from 'react'


function Profile({user}) {


  const { logoutHandler,home}  = useContext(AuthContext)

  return (
    <>
  <div className='border-black p-8  bg-gray-900 text-white rounded-lg text-center flex flex-col gap-6'>
  <h1 className='font-semibold'>{user.firstname +  " " + user.lastname}</h1>
              <p className='font-light'>{user.email}</p>
              <p className='font-light'>{user.date}</p>
             <div className='flex gap-2 justify-center'>
             <button className='px-4 text-sm py-2 rounded-[50px] bg-red-600 text-white' onClick={()=> home()}>Home</button>
              <button className='px-4 text-sm py-2 rounded-[50px] bg-red-600 text-white' onClick={()=> logoutHandler() }>Sign Out</button>
             </div>
  </div>
    </>
  )
}

export default Profile