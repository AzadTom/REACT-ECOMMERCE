import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

function ProductCart() {


    const [carts,setCart] = useState([]);

    const navigate = useNavigate()


    const {   cartState:{cart} } = useCart();

    useEffect(()=>{

        setCart(cart);

    },[])


  return (
    <div className='bg-slate-950 text-white p-8' >

        <div className='sticky top-0 bg-slate-950 py-2'>
        <button className='text-red-600 font-extralight px-8' onClick={()=> navigate("/")}>Back</button>
        </div>
         {

            

            carts.map((item)=>
            ( 
                <div className='p-6'>
                    <CartItem item={item}/>
                </div>
             ))
           
           
         }
    </div>
  )
}

export default ProductCart