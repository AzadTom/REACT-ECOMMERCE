import React from 'react'
import Counter from './Counter'

function CartItem({item}) {
  return (
    <div className='flex justify-around items-center'>

        <div className='flex flex-col justify-center items-center'>
            <img src={item.image}  alt="cart-img"  className='object-cover rounded p-4'   width={150} height={150} />
            <p>{item.name}</p>
        </div>
        <div className='flex flex-col sm:flex-row items-center sm:gap-8'>
        <h3 className='font-semibold'>{item.name}</h3>
         <span>{`$${item.price}`}</span>
         <Counter/>
        </div>
    </div>
  )
}

export default CartItem