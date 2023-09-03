import React from "react";

function WhyBuy() {
  return (

   <>
    <h1 className="font-semibold text-2xl  text-center">Benifit why buy from us?</h1>
    <div className=" flex flex-col sm:flex-row overflow-auto gap-4 justify-center items-center m-8">
      
      <div className=" bg-white p-4 rounded text-black">
        <h3 className="font-semibold text-2xl ">Uncompromising Quality and Craftsmanship</h3>
        <p>
          Our clothing is meticulously crafted with an unwavering commitment to
          quality. Each stitch, fabric choice, and design detail is carefully
          considered to ensure that you receive apparel that not only looks
          stunning but also feels comfortable and enduring. We prioritize
          sourcing materials that stand the test of time, allowing you to build
          a wardrobe that's as enduring as it is fashionable.
        </p>
      </div>
      <div className=" bg-white rounded p-4 text-black">
        <h3 className="font-semibold text-2xl ">Fashion-forward Diversity for Every Style</h3>
        <p>
          Embrace your individuality with our diverse range of styles that cater
          to every taste and occasion. From elegant formal wear to laid-back
          casual outfits, our curated collection ensures that you'll find pieces
          that resonate with your unique personality and fashion preferences. We
          believe that everyone deserves to express themselves through clothing
          that speaks to who they are.
        </p>
      </div>

      <div className=" bg-white p-4 rounded text-black">
        <h3 className="font-semibold text-2xl ">Exceptional Value and Affordability</h3>
        <p>
          Elevate your wardrobe without straining your budget. We're committed
          to offering remarkable value by providing high-quality clothing at
          prices that won't break the bank. We believe that looking stylish and
          feeling confident shouldn't come with a hefty price tag. Shop with us
          and experience the joy of discovering affordable fashion that doesn't
          compromise on style or substance.
        </p>
      </div>
    </div>
   </>
  );
}

export default WhyBuy;
