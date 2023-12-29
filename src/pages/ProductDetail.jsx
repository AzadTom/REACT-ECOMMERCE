import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useProductsData} from '../context/productdata';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Productlisting from '../components/Productlisting';
import Counter from '../components/Counter';
import { useCart } from '../context/CartContext';
import { useAuth } from "../context/AuthContext";


function ProductDetail() {


  const {productId} = useParams();

  const navigate = useNavigate();

  const {productsData} = useProductsData();


  const { cartState, addToCartHandler } = useCart();
  const { cart } = cartState;
  const { isLoggedIn } = useAuth();


  const isAddedToCart = cart && cart.find((cartProduct) => cartProduct._id === productId);

  const toggleCart = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    addToCartHandler(item);
    console.log("cart in done")

  };

  const item = productsData?.find((it)=>
  {
     return it._id ===productId;
  })

  const similarProducts = productsData?.filter((it)=> it._id != productId);

 
  useEffect(()=>{

    console.log(productsData);

  },[])

  return (
    <>
    

          
         
    <section key={`${item._id}`}>

    
    <div className='flex justify-center items-center'>

     

<div className='flex flex-col sm:flex-row justify-around gap-8  p-8 lg:p-16'>
<div>
  <img src={item?.image}  alt="image" className='w-[16rem]' />
</div>
<div className='flex flex-col gap-4 justify-start items-start'>
     
     <h3 className='font-semibold text-2xl'>{item?.name}</h3>
     <p>{item?.description}</p>
     <p>{`$${item?.price}`}</p>
    

     <div>
     {
            isAddedToCart ? (<button className="text-white rounded bg-slate-950 w-full text-center py-2 px-4 " onClick={()=> navigate("/cart")}>Go To Cart</button>)
            :(<button  onClick={toggleCart} className={item.isOutOfStock ?  "text-white rounded bg-slate-600 w-full text-center py-2 px-4": "text-white rounded bg-slate-950 w-full text-center py-2 px-4" } disabled={item.isOutOfStock ? true : false}>
            {item.isOutOfStock ? "Out of Stock " :"Add to Cart"}
          </button>)
           
          
          }
     </div>

</div>
 
</div>
</div>

<h3 className='font-semibold text-2xl px-2 lg:px-16'>Similar Products</h3>

  {
   

    <Productlisting/>
    
  }



  

    </section>
       
    
    </>
  )
}

export default ProductDetail