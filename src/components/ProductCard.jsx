import React  from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from '../context/CartContext';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useWishlist} from '../context/wishlistContext'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


function ProductCard({ item }) {

  const navigate = useNavigate();

  const { cartState, addToCartHandler } = useCart();
  const { cart } = cartState;
  const { isLoggedIn } = useAuth();


  const {
    wishlistState,
    removeFromWishlistHandler,
    addToWishlistHandler,
  } = useWishlist();


  const { wishlist } = wishlistState;

   //--------------For Wishlist----------------------//

  // Check if the product is in the wishlist
  const isFavorite =
    isLoggedIn &&
    wishlist &&
    wishlist.find((wishlistProduct) => wishlistProduct._id === item._id);

  const toggleWishlist = (e) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (isFavorite) {
      removeFromWishlistHandler(item._id);
    } else {
      addToWishlistHandler(item);
      
    }
  };

  



  const {
    _id,
    name,
    rating,
    price,
    originalPrice,
    isTrending,
    isOutOfStock,
    description,
    image,
  } = item;


   //--------------For Cart----------------------//

  // Check if the product is in the cart
  const isAddedToCart = cart && cart.find((cartProduct) => cartProduct._id === _id);

  const toggleCart = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    addToCartHandler(item);
    console.log("cart in done")

  };
  


    const handleRating= (num)=>
    {
          
       let rating = "";

       for (let index = 0; index < num; index++) {
        
            rating += "⭐";
        
       }

       return rating;


    }
  


  return (
    <section
      className="cursor-pointer shadow md:shadow-md lg:shadow-lg"
      id={item._id}
      key={item._id}>
           
      <div className="relative w-full h-full ">
        <div className="absolute top-2 right-2  w-auto h-auto bg-white rounded-[50px] p-2"  onClick={toggleWishlist}  key={item._id}>
          {isFavorite? (<div className="text-black"> <FavoriteIcon/> </div>) : (<div className="text-black"><FavoriteBorderOutlinedIcon/></div>)}
            
        </div>
       <div className=" w-full h-full">
       <img
          src={item.image}
          alt="hero-img"
          onClick={() => navigate(`/productDetails/${item._id}`)}
          className="object-cover rounded rounded-b-none w-full  h-full"
        />
       </div>

        <div className="p-2 text-white rounded rounded-se-none rounded-ss-none bg-gray-900">
          <h3 className=" text-xl font-semibold">{item.name}</h3>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-slate-400">
            {item.description}
          </p>
          <div className="flex gap-3 m-2 ">
          <p >{`$${item.price}`}</p>
          <p className="line-through text-gray-400">{`$${item.originalPrice}`}</p>
         
          </div>
          <p className="py-2 px-2">{`${handleRating(item.rating)}` }</p>
          <>

          {
            isAddedToCart ? (<button className="text-white rounded bg-slate-950 w-full text-center py-2">Go To Cart</button>)
            :(<button  onClick={toggleCart} className={item.isOutOfStock ?  "text-white rounded bg-slate-600 w-full text-center py-2": "text-white rounded bg-slate-950 w-full text-center py-2" } disabled={item.isOutOfStock ? true : false}>
            {item.isOutOfStock ? "Out of Stock " :"Add to Cart"}
          </button>)
           
          
          }
          
          </>
        
        </div>

        <div className={ item.isTrending ? "absolute top-2 text-white z-50 bg-red-600 p-2" : "hidden"}>
          Trending
        </div>

      </div>
    </section>
  );
}

export default ProductCard;
