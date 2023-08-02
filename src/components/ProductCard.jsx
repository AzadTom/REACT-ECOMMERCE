import React from 'react'

function ProductCard({item}) {
  

  return (
    <section className='cursor-move shadow md:shadow-md lg:shadow-lg' id={item._id}  key={item._id} >
        <div>
        <img src={item.image} alt="hero-img"  className=' w-full h-full object-cover card-img'/>

<div className='p-2 bg-white' >
<h3 className='text-slate-900 text-xl font-semibold'>{item.name}</h3>
<p className='overflow-hidden text-ellipsis whitespace-nowrap text-slate-400'>{item.description}</p>
 <p className='text-slate-900'>{`$${item.price}`}</p>
  {/* <button className='text-white rounded bg-slate-900 w-full text-center py-2'>Add to cart</button> */}
</div> 
        </div>
          
    </section>
  )
}

export default ProductCard



