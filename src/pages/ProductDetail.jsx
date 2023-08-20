import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useProductsData} from '../context/productdata';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Productlisting from '../components/Productlisting';
import Counter from '../components/Counter';


function ProductDetail() {


  const {productId} = useParams();

  const {productsData} = useProductsData();


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
     <Counter/>

     <div>
      <button className='bg-white text-black px-8 py-2 rounded'>Add To Bag</button>
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