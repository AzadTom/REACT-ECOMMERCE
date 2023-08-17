import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Counter from "../components/Counter";

function ProductCart() {
  const [carts, setCart] = useState([]);
  let total =0;


  const {
    cartState: { cart },
  } = useCart();



  const getTotal = ( )=>
  {
   
     
    
    carts.forEach((item)=>{

       total= total+item.price;

    })

    return total;

  }
   

  useEffect(() => {
   
    setCart(cart);
  
   
  }, [total,cart]);

  return (
    <div className="bg-black text-white ">
      <Header />

      <h2 className="text-xl sm:text-2xl text-center m-6 mb-8">
        Shopping cart
      </h2>

      <div className="flex flex-col  sm:flex-row sm:justify-around items-center sm:items-start">
        <table cellPadding="16" className="m-2 bg-white p-4 rounded text-black ">
                   
              
                <th className="font-normal text-center">ProductName</th>
                <th className="font-normal text-center">Price</th>
                <th className="font-normal text-center">Counter</th>

          {carts.map((item) => (
            
               
                <tr>
                   <td>
                   <div className="flex flex-col justify-center items-center">
                    <img
                      src={item.image}
                      alt="cart-img"
                      className="object-cover rounded"
                      width={100}
                      height={100}
                    />
                    <p>{item.name}</p>
                  </div>
                   </td>

                   <td>
                      <p>{`$${item.price}`}</p>
                   </td>

                   <td>
                    <Counter/>
                   </td>
                </tr>
              
           
          ))}
        </table>

        <div>
          
            <h3 className="m-4 text-xl">SubTotal</h3>
            <table cellPadding={16} className="bg-white p-4 text-black rounded">

            
              <th className="font-normal text-start">Product</th>
              <th className="font-normal text-start">Quantity</th>
              <th className="font-normal text-start" >Price</th>
              <th className="font-normal text-start">SubTotal</th>
              {
                carts.map((item)=>
                (

                  <tr>
                     <td>{item.name}</td>
                     <td>{1}</td>
                     <td>{`$${item.price}`}</td>
                     <td>{`$${item.price}`}</td>
                  </tr>
                  

                ))

              }
            </table>

            <div className="bg-white p-4 rounded text-black my-4 mx-2">
               <p>{`SubTotal :  $${getTotal()}`}</p>
               <p>{`Shipping charge : $200`}</p>
               <p>{`Total : $${total+200}`}</p>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
