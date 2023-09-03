import React from 'react'
import { useWishlist } from '../context/wishlistContext'
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { useAuth } from '../context/AuthContext';





function Wishlist() {

    const { wishlistState, removeFromWishlistHandler } = useWishlist();
    const { wishlist } = wishlistState;

    const { isLoggedIn }  = useAuth()


    const { cartState, addToCartHandler } = useCart();
    const { cart } = cartState;


    const handleMoveToCart = (e, product) => {
        e.stopPropagation();
        addToCartHandler(product);
       
      };
    
      const handleRemoveFromWishlist = (e, product) => {
        e.stopPropagation();
        removeFromWishlistHandler(product._id);
       
      };


  return (
    <div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
            { isLoggedIn && wishlist.map((item)=>(
               <div className='p-2 sm:p-6 w-full h-full'>
                 <ProductCard  item={item}/>
               </div>
            ))}
        </div>

    </div>
  )
}

export default Wishlist