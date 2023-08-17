import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Carousel({images}) {

  const navigate = useNavigate();

  const[currentIndex,setCurrentIndex] = useState(0);
  useEffect(()=>{

      const interval = setInterval(() => {

          setCurrentIndex((previndex)=> (previndex+1) % images.length);

          
      }, 3000);

      return ()=> clearInterval(interval);

  },[images.length]);



  return (
    <section>
        <div style={{ backgroundImage: `url("${images[currentIndex]}")`}}
         className='bg-cover  bg-no-repeat  bg-top w-full h-[34rem] flex flex-col justify-end pb-24  items-center text-white gap-2   relative'>
        <h2 className='z-50'>Get 20% off on your first order!</h2>
          <p className='z-50'>Find your perfect shopping experience at ATTIREX</p>
          <button className='z-50 bg-red-600 rounded-[50px] text-white px-4 py-2' onClick={()=> navigate("/products") }>Shop Now</button>
          {/* <div className="h-full linear-left absolute w-1/2 top-0 left-0 z-10"></div> */}
      <div className="h-1/2  linear absolute w-screen left-0 bottom-0 z-10"></div>
      <div className="absolute z-50 bottom-4 flex gap-2 " >
          <span className={  images[currentIndex] == images[0] ? "bg-white rounded-[50px] w-3 h-3" : " border-white border-2 rounded-[50px] w-3 h-3" }></span>
          <span className={images[currentIndex] == images[1] ? "bg-white rounded-[50px] w-3 h-3" : " border-white border-2 rounded-[50px] w-3 h-3"}></span>
          <span className={images[currentIndex] == images[2] ? "bg-white rounded-[50px] w-3 h-3" : " border-white border-2 rounded-[50px] w-3 h-3"}></span>
      </div>

        
        </div>

        
    </section>
  )
}

export default Carousel

 

