import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import {useProductsData} from '../context/productdata';


function Productlisting() {

    const[products,setProducts] = useState([]);


    const {productsData} = useProductsData();

    useEffect(()=>
    {
        setProducts(productsData);

    },[])
    
    

  return (
   <section className='sm:p-8  bg-black'>
     
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
                

                  {

                    products.map((item)=>(

                        <div className='p-2 sm:p-6 w-full h-full'>
                            <ProductCard item={item}/>
                        </div>
                    ))

                       

                  }

                       

                
            </div>

   </section>
  )
}

export default Productlisting