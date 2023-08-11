import React  from "react";
import { useAuth} from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from "react-router-dom";


function ProductCard({ item }) {

  const navigate = useNavigate();

  const { cartState, addToCartHandler } = useCart();
  const { cart } = cartState;
  const { isLoggedIn } = useAuth();



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
  


  


  return (
    <section
      className="cursor-pointer shadow md:shadow-md lg:shadow-lg"
      id={item._id}
      key={item._id}>
      <div className="relative w-full h-full ">
        <img
          src={item.image}
          alt="hero-img"
          className="object-cover rounded rounded-b-none w-full h-full"
        />

        <div className="p-2 text-white rounded rounded-se-none rounded-ss-none bg-gray-900">
          <h3 className=" text-xl font-semibold">{item.name}</h3>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-slate-400">
            {item.description}
          </p>
          <div className="flex gap-3 m-2 ">
          <p >{`$${item.price}`}</p>
          <p className="line-through text-gray-400">{`$${item.originalPrice}`}</p>
          </div>
          
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
