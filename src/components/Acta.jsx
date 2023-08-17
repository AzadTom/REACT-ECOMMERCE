import React from 'react'
import { useNavigate } from 'react-router-dom'

function Acta() {

  const navigator = useNavigate();
  return (
    
        <div className='flex bg-black w-full justify-center '>
          <div className='flex flex-col justify-center  items-center  gap-2 p-4 bg-blue-600 rounded'>
                <span className='text-2xl font-semibold text-white mt-4'>Store Location</span>
                <input type="em"className='py-2 px-4 text-center rounded-[50px] border-none outline-none' placeholder='Enter Email' />
                <button className='text-white bg-red-600 px-4 py-2 rounded-[50px] ' onClick={()=> navigator("signup")}>SignUp</button>
            </div>
        </div>
    
  )
}

export default Acta