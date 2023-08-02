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
   <section className='lg:p-12 bg-black'>
     
            <div className='columns-2 sm:columns-3 md:columns-4'>
                

                  {

                    products.map((item)=>(

                        <div className='p-2'>
                            <ProductCard item={item}/>
                        </div>
                    ))

                       

                  }

                       

                
            </div>

   </section>
  )
}

export default Productlisting