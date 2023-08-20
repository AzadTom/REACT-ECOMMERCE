import React, { useEffect, useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Counter from "../components/Counter";

function ProductCart() {
  const [carts, setCart] = useState([]);
  let total =0;


  const {
    cartState: { cart },
    removeFromCartHandler
  } = useCart();



  const getTotal = ( )=>
  {
   
     
    
    cart.forEach((item)=>{

       total= total+item.price;

    })

    return total;

  }
   

  useEffect(() => {
   
    setCart(cart);
  
   
  }, [total,cart]);

  return (
    <div>
     
     {

        carts.length == 0 ? (
          <div className="w-full h-[32rem] flex justify-center items-center">Empty Cart...</div>
        ) :(
          <div className="flex justify-center items-center">
      <div className="flex flex-col sm:flex-row justify-center sm:gap-8 ">
       
                   
              

         
            
               

            <div>

              <table cellPadding={16}>

                    <thead>
                      <tr>
                        <td></td>
                        <td>PRODUCT</td>
                        <td>PRICE</td>
                        <td>QUANTITY</td>
                      </tr>
                    </thead>

                    <tbody>
                        
                        { carts.map((item)=>(

                           <tr>
                            <td>
                            <div className="cursor-pointer" onClick={()=> removeFromCartHandler(item._id)}>
                               <HighlightOffIcon/>
                            </div>
                            </td>
                          <td>
                          <div>
                                <div className="flex flex-col justify-center items-center w-full h-full">
                                 <img src={item.image} alt="hero-img"  width={100}/>
                                  <p>{item.name}</p>
                                </div>
                           </div>
                          </td>
                          <td>{item.price}</td>
                          <td>
                           <Counter/>
                          </td>
                       </tr>
                        ))
                         
                      }
                    </tbody>

              </table>
              
            </div>
                
                   
                  
              
           
        
        

        <div  className="flex flex-col  " >
          
            <h3 className="m-4 font-semibold bg-white text-black rounded px-4 py-2">Total Price </h3>
            <div  className="bg-white  text-black  rounded text-start flex flex-col m-4">

              {
                carts.map((item)=>
                (

                <div className="flex justify-between p-2 gap-2 ">
                    
                    <p>{item.name}</p>
                    <p>{`$${item.price}`}</p>
                   
                </div>
                  

                ))

              }
            </div>

            <div className="bg-white text-black  p-4 rounded  m-4">
               <p>{`SubTotal :  $${getTotal()}`}</p>
               <p>{`Shipping charge : $200`}</p>
               <p>{`Total : $${total+200}`}</p>
               <button className="py-2 px-4 rounded bg-black text-white ">Proceed To Checkout</button>
            </div>
          
        </div>

      </div>
      </div>
        )
     }

      

      
    </div>
  );
}

export default ProductCart;
