import React from 'react'
import Counter from './Counter'

function CartItem({item}) {
  return (
    <div className='flex justify-between items-center'>

        <div>
            <img src={item.image}  alt="cart-img"  className='object-cover rounded p-4'   width={250} height={250} />
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