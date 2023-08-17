import React, { useState } from 'react'

function Counter() {

    const[quantity,setQuantity]  = useState(1)

    const increment  = ()=>{

    setQuantity((prev)=> prev+1);

    }


    const decrement  = ()=>{

        setQuantity((prev)=> prev>0 ? prev-1 : prev)

    }
  return (
    <div className='bg-slate-900 rounded-[50px] flex gap-2 items-center'>
        <button className='bg-slate-200 text-black rounded-[50px] w-[42px] h-[42px] m-2' onClick={increment}>+</button>
        <span className='text-white'>{quantity}</span>
        <button className='bg-slate-200 text-black rounded-[50px] w-[42px] h-[42px] m-2' onClick={decrement}>-</button>
    </div>
  )
}

export default Counter