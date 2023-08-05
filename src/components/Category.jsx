import React from "react";

function Category() {
  const category = [
    {
      img: "https://res.cloudinary.com/dptfwcnro/image/upload/v1684160993/E-comm%20ATTIREX/Mens-Fashion/istockphoto-1251683479-612x612_fl1ar5.jpg",
      title :"Men's"
    },
    {
        img:"https://res.cloudinary.com/dptfwcnro/image/upload/v1684231299/E-comm%20ATTIREX/Mens-Fashion/pexels-photo-5753204_nei74i.webp",
        title:"FreeStyle"
    },
    {
        img:"https://res.cloudinary.com/dptfwcnro/image/upload/v1684156820/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1366038769-612x612_pa4c9e.jpg",
        title :"Women's"
    },
    {
        img:"https://res.cloudinary.com/dptfwcnro/image/upload/v1684232697/E-comm%20ATTIREX/Womens-Fashion/pexels-photo-11772316_qj6ma3.webp",
        title:"Dress"
    }
    ,{
        img:"https://res.cloudinary.com/dptfwcnro/image/upload/v1684160313/E-comm%20ATTIREX/Womens-Fashion/istockphoto-1421800979-612x612_jhezda.jpg",
        title:"Office"
    },
    
  ];
  return <section>
    <div className="flex justify-center gap-8 flex-wrap overflow-x-auto bg-black text-white text-center pb-8">
        {
            category.map((item)=>(

                <div>
                    <img src={item.img}     alt="category-img"  className=" bg-cover bg-center w-[150px] h-[150px] object-cover rounded-[50%]"/>
                    <p>{item.title}</p>
                </div>

            ))
        }
    </div>
  </section>;
}

export default Category;
