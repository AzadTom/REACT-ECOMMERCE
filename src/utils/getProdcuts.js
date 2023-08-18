import axios from "axios"

export async function getAllproducts(){

    try {

    

     
   
     const response = await axios.get("api/auth/getproducts")
   

     const  { products} = response.data

    

     return products;

   
  
    

     
    } catch (error) {

     console.log(error)
     alert(`${error}`)
     
    }



 }