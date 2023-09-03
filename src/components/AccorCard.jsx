import React, { useState } from 'react'

function AccorCard({item,index}) {

    const[isopen,setopen] = useState(false);

  return (
    <div key={item.title} onClick={()=> setopen( prev => !prev)} className="bg-white text-black px-4 py-2 rounded cursor-pointer ">
    <h3 className="text-xl ">{` ${index+1}. ${item.title}`}</h3>
    <p className={isopen? "text-xl font-thin " : "hidden"}>{item.overview}</p>
</div>
  )
}

export default AccorCard