import React from 'react'
import { useAuth } from '../context/authContext'



function Profile() {


  const { logoutHandler,home ,currentUser}  = useAuth();

  return (
    <>
  <div className='border-black p-8  bg-gray-900 text-white rounded-lg text-center flex flex-col gap-6'>
  <h1 className='font-semibold'>{currentUser.firstName +  " " + currentUser.lastName}</h1>
              <p className='font-light'>{currentUser?.email}</p>
             <div className='flex gap-2 justify-center'>
             <button className='px-4 text-sm py-2 rounded-[50px] bg-red-600 text-white hidden' onClick={home}>Home</button>
              <button className='px-4 text-sm py-2 rounded-[50px] bg-red-600 text-white' onClick={logoutHandler }>Sign Out</button>
             </div>
  </div>
    </>
  )
}

export default Profile