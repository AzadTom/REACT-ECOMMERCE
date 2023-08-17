import React from 'react'

function Footer() {
  return (
    <footer className='bg-black text-blue-400 p-6 cursor-pointer flex flex-col gap-2'>
         
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4'>
              <ul className='flex flex-col gap-2'>
                  <li className='flex flex-col text-white'>
                     <span className='text-xl font-semibold'>SHOP</span>
                     <span className='text-xl font-semibold'>By Category</span>
                  </li>
                 <li>Shop Home</li>
                 <li>Mens</li>
                 <li>Womens</li>
                 <li>Kids</li>
                 <li>Classics</li>
              </ul>

              <ul className='flex flex-col gap-2'>
                 <li className='text-xl font-semibold text-white'>SPORTS</li>
                 <li>Skate</li>
                 <li>Surf</li>
                 <li>Wome's Surf</li>
                 <li>Snow</li>
                 <li>BMX</li>       
              </ul>

              <ul className='flex flex-col gap-2'>
                <li className='text-xl font-semibold text-white'>SUPPORT</li>
                <li>Store Locator</li>
                <li>Order Status</li>
              </ul>

              <ul className='flex flex-col gap-2'>
                <li className='text-xl font-semibold text-white'>COMPANY</li>
                <li>Customer Service</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Career</li>
                <li>About</li>
                <li>Sustainability</li>
                <li>Affiliates</li>
                <li>Recall Info</li>
              </ul>

              <ul className='flex flex-col gap-2'>
                 <li className='text-xl font-semibold text-white'>CONTACT</li>
                 <li className='flex flex-col'>
                     <span className='font-semibold text-white'>Email</span>
                     <span>Contact Us</span>
                 </li>
                 <li className='flex flex-col'>
                    <span className='font-semibold text-white'>Telephone</span>
                    <span>855-909-8267</span>
                 </li>
                 <li className='flex flex-col'>
                    <span className='font-semibold text-white'>Address</span>
                    <span>1588 South Coast Dr Coast</span>
                    <span> CA 92626</span>
                 </li>
              </ul>
         </div>

         <div className='flex'>
            <div className='flex flex-col item-start justify-start gap-2'>
                <span className='text-2xl font-semibold text-white'>STORE LOCATION</span>
                <span>Find a Vans store near you</span>
                <button className='text-white bg-red-600 px-4 py-2 rounded '>FIND A STORE</button>
            </div>
         </div>

    </footer>
  )
}

export default Footer