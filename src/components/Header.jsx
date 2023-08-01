import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';

function Header(){
  return (
    <header className='  bg-gradient-to-r from-sky-400 to-indigo-800 z-20 pb-2'>
        <nav className='  sticky top-0 text-white flex  justify-between  items-center  px-2 pt-4 ' >

{/* left */}
            <div className='hidden sm:flex space-x-8'>
                {/* logo */}
                  <h1 className='text-3xl font-semibold'>MerchantX</h1>
                  {/* menu */}
                  <ul className='flex space-x-4 items-center font-extralight '>
                    <li>Home</li>
                    <li>Buy Now</li>
                  </ul>
            </div>

            {/* right */}

            <div className='hidden sm:flex space-x-4 items-center'>

                <form className='flex flex-col '>
                    <input type="search"  placeholder='Search' className='px-4 py-2 rounded border-none outline-none'/>
                </form>
                <div>
                    <ul className='md:flex space-x-4 items-center hidden font-extralight '>
                        <li ><PersonIcon/></li>
                        <li><FavoriteIcon/></li>
                        <li><LocalMallIcon/></li>
                    </ul>
                </div>
            </div>
           

   {/* mobile search */}
            <div className='sm:hidden flex flex-col gap-2  items-center w-full '>
            <h1 className='text-2xl font-semibold'>MerchantX</h1>
                <input type="search"  placeholder='Search' className='text-black  px-4 py-2 border-none outline-none rounded  w-full '/>
            </div>


        </nav>
      

        

    </header>
  )
}

export default Header