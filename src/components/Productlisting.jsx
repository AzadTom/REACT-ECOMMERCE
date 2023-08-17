import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'


function Productlisting() {

    const[products,setProducts] = useState([]);

    async function getAllproducts(){

       try {

        const  data  = localStorage.getItem("login");
 
        const  {token} = JSON.parse(data);

        
      
        const response = await axios.get("api/auth/getproducts",{
            headers:{
                Authorization : token
            }
        })
      

        const  { products} = response.data

        setProducts(products)

      
     
       

        
       } catch (error) {

        console.log(error)
        
       }



    }

    useEffect(()=>{

        getAllproducts()
        
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