import React from 'react'
import {  useNavigate } from 'react-router-dom'


function CategoryBanner() {

   const navigate = useNavigate();

  return (
    <>

   <section className='bg-black flex p-8'>

    <div className=' relative flex flex-col bg-center rounded text-white justify-center items-center w-full bg-cover h-[32rem] object-cover bg-no-repeat  bg-[url("https://images.pexels.com/photos/4046986/pexels-photo-4046986.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load")]'>
    <h2 className='z-50'>Get 20% off on your first order!</h2>
          <p className='z-50'>Find your perfect shopping experience at ATTIREX</p>
          <button className='z-50 bg-red-600 rounded-[50px] text-white px-4 py-2' onClick={ ()=> navigate("/products")}>Shop Now</button>
          {/* <div className="h-1/2  linear absolute w-screen left-0 bottom-0 z-10"></div>
          <div className="h-1/2  linear-up absolute w-screen left-0 top-0 z-10"></div> */}
    </div>

   </section>

   
       

    </>
  )
}

export default CategoryBanner