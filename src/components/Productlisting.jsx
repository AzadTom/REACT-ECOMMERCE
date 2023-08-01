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
     
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   gap-6 p-6 '>
                

                  {

                    products.map((item)=>(

                        <div>
                            <ProductCard item={item}/>
                        </div>
                    ))

                       

                  }

                       

                
            </div>

   </section>
  )
}

export default Productlisting