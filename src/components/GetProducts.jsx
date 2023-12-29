import React from "react";
import { useProductsData } from "../context/productdata";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';  
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";


function GetProducts() {
  const { productsData } = useProductsData();

 


   const navigate = useNavigate();

   const[current,setCurr] = useState(0);

   const leftScroll = ()=>{


    setCurr((prev)=> (prev>=0?0:prev+100));

   }


   const RightScroll = ()=>{


   
    setCurr((prev)=> (prev<-3600?0:prev-100));

   }
  


  return (

     <div className=" w-full">
         <h1 className="font-semibold text-center text-xl">All Products</h1>
           
    
      <div  className="flex justify-center relative">
        
        <div className="overflow-clip">
        <div className="flex flex-no-wrap overflow-x-auto scroll-smooth scrollbar-hide  gap-6  m-8   ">
        {productsData.map((item) => ( <div className="w-[250px]"> <ProductCard item={item} current={current} /></div>))}
      </div>
      <button  onClick={()=> leftScroll()} className="bg-white p-2 m-2 text-black rounded absolute top-1/3 left-0"> <ArrowCircleLeftIcon/></button>
     <button   onClick={()=> RightScroll()}  className="bg-white p-2 m-2 text-black rounded absolute top-1/3 right-0"><ArrowCircleRightIcon/></button>

        </div>
      
     
    </div>
    </div>

     
  
   
  );
}

export default GetProducts;
