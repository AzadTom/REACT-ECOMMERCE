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
        <table cellPadding="2" className="">
                   
              
                <th className="font-normal text-center">ProductName</th>
                <th className="font-normal text-center">Price</th>
                <th className="font-normal text-center">Counter</th>

          {carts.map((item) => (
            
               
                <tr>
                   <td className="p-2" >
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

                   <td className="p-2">
                      <p>{`$${item.price}`}</p>
                   </td>

                   <td className="p-2">
                    <Counter/>
                   </td>
                </tr>
              
           
          ))}
        </table>

        <div>
          
            <h3 className="m-4 text-2xl">Total Price </h3>
            <table cellPadding={2} className="bg-white  text-black  rounded text-start">

              {
                carts.map((item)=>
                (

                  <tr>
                     <td className="p-2">{item.name}</td>
                     <td  className="p-2">{`${1}`}</td>
                     <td  className="p-2">{`$${item.price}`}</td>
                     <td  className="p-2">{`$${item.price}`}</td>
                  </tr>
                  

                ))

              }
            </table>

            <div className="bg-white text-black  p-4 rounded  my-4 mx-2">
               <p>{`SubTotal :  $${getTotal()}`}</p>
               <p>{`Shipping charge : $200`}</p>
               <p>{`Total : $${total+200}`}</p>
               <button className="py-2 px-4 rounded bg-black text-white ">Proceed To Checkout</button>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
