import React, { useState } from 'react'

function Filter() {

  const[mobilefilter,setMobilefilter] = useState(false);

  return (
    <>
    <section className={mobilefilter ? `sm:block  fixed  z-[100] bg-black  top-0   min-w-full  h-full   items-start text-white p-4 overflow-scroll border border-white `:`  bg-black hidden sm:block  sticky top-0    min-w-[12rem]  h-screen   text-white p-4 overflow-scroll border  border-white`}>

       
              
              {/* Header */}
            <div className='flex justify-between mb-2'>
              {
                 mobilefilter? 
                 (<span className='text-xl font-semibold' onClick={()=> setMobilefilter(false)}>
                    Apply
                 </span> ) :
                 (<span className='text-xl font-semibold'>
                   Filter
                 </span> )
    
                 
              }
              <span className='text-xl font-semibold'>Clear</span>
            </div>
            <hr />

             {/*--------------------------------- Sort By filters----------------------------------------- */}
        <div className=" flex flex-col gap-2 mt-2 mb-2">
          <span className="">SORT BY</span>
          <div className='flex gap-2'>
            <input
              type="radio"
              id="highToLow"
              name="priceSort"
              value="highToLow"
              checked={false}
              onChange={ ()=> console.log('click')}
            />
            <label htmlFor="highToLow">Price: High to Low</label>
          </div>

          <div className='flex gap-2'>
            <input
              type="radio"
              id="lowToHigh"
              name="priceSort"
              value="lowToHigh"
              checked={false}
             
            />
            <label htmlFor="lowToHigh">Price: Low to High</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="radio"
              id="aToz"
              name="priceSort"
              value="aToz"
              checked={false}
            
            />
            <label htmlFor="aToz">Category: A to Z</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="radio"
              id="zToa"
              name="priceSort"
              value="zToa"
              checked={false}
             
            />
            <label htmlFor="zToa">Category: Z to A</label>
          </div>
          <hr />
        </div>
         {/*--------------------------------- Price Slider----------------------------------------- */}
         <div className="flex flex-col gap-2 mt-2 mb-2">
          <span className="">SLIDER</span>
          <input
            type="range"
            min="0"
            max={6000}
            />

             <hr />
        </div>

         {/*--------------------------------- Filter By Rating----------------------------------------- */}
         <div className="flex flex-col gap-2 mt-2 mb-2">
          <span className="">RATINGS</span>
          <div className='flex gap-2'>
            <input
              id="4stars"
              type="checkbox"
              name="4stars"
              value="4stars"
              checked={false}
            />
            <label htmlFor="4stars">4 ⭐️ and above</label>
          </div>
          <div className='flex gap-2'>
            <input
              id="3stars"
              type="checkbox"
              name="3stars"
              value="3stars"
              checked={true}
            
            />
            <label htmlFor="3stars">3 ⭐️ and above</label>
          </div>
          <div className='flex gap-2'>
            <input
              id="2stars"
              type="checkbox"
              name="2stars"
              value="2stars"
              checked={false}
              
            />
            <label htmlFor="2stars">2 ⭐️ and above</label>
          </div>
          <div className='flex gap-2'>
            <input
              id="1stars"
              type="checkbox"
              name="1star"
              value="1star"
              checked={false}
             
            />
            <label htmlFor="1stars">1 ⭐️ and above</label>
          </div>
          <hr />
        </div>
         {/*--------------------------------- Sort By Section----------------------------------------- */}
         <div className="flex flex-col gap-2 mt-2 mb-2">
          <span className="">SECTION</span>
          <div className='flex gap-2'>
            <input
              id="Womens"
              type="checkbox"
              name="Womens"
              value="Womens"
            />
            <label htmlFor="Womens"> Women's</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              id="Mens"
              name="Mens"
              value="Mens"
            />
            <label htmlFor="Mens"> Men's</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              id="Kids"
              name="Kids"
              value="Kids"
            />
            <label htmlFor="Kids"> Kid's</label>
          </div>
          <hr />
        </div>
        
        {/*--------------------------------- Sort By Categories----------------------------------------- */}
        <div className="flex flex-col gap-2 mt-2 mb-2">
          <span className="">CATEGORIES</span>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              id="activeWear"
              name="activeWear"
              value="activeWear"
            />
            <label htmlFor="activeWear">Active Wear</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              id="dresses"
              name="dresses"
              value="dresses"
            />
            <label htmlFor="dresses">Dresses</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              id="tops"
              name="tops"
              value="tops"
            />
            <label htmlFor="tops">Tops</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              id="officeWear"
              name="officeWear"
              value="officeWear"
            />
            <label htmlFor="officeWear">Office Wear</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              id="casual"
              name="casual"
              value="casual"
            />
            <label htmlFor="casual">Casual</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              id="freestyle"
              name="freestyle"
              value="freestyle"
            />
            <label htmlFor="freestyle">Freestyle</label>
          </div>
          <div className='flex gap-2'>
            <input
              type="checkbox"
              id="formal"
              name="formal"
              value="formal"
            />
            <label htmlFor="formal">Men's Formal</label>
          </div>
        </div>
        

    </section>

    {/* mobile filter */}
    <div>

        <div className='z-[80] bg-black text-white rounded flex flex-row items-center justify-between  bottom-0 fixed  w-full px-4 py-4  sm:hidden'>
            <h3 onClick={()=> setMobilefilter(!mobilefilter)}>Filter</h3>
            <h3>Clear</h3>
        </div>

    </div>
    
    </>
  )
}

export default Filter