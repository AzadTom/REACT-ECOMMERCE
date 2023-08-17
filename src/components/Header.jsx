import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


function Header(){

  const navigator = useNavigate()
  return (
    <header className='  sticky top-0 bg-gradient-to-r from-sky-400 to-indigo-800  pb-2 z-[100]'>
        <nav className=' text-white flex  justify-between  items-center  px-2 pt-4 ' >

{/* left */}
            <div className='hidden sm:flex space-x-8'>
                {/* logo */}
                  <h1 className='text-3xl font-bold'>BOLDX</h1>
                  {/* menu */}
                  <ul className='flex space-x-4 items-center font-extralight '>
                    <li>Home</li>
                    <li>Buy Now</li>
                  </ul>
            </div>

            {/* right */}

            <div className='hidden sm:flex space-x-4 items-center'>

                <form className='flex flex-col '>
                    <input type="search"  placeholder='Search' className='px-4 py-2 rounded border-none outline-none text-black'/>
                </form>
                <div>
                    <ul className='md:flex space-x-4 items-center hidden font-extralight '>
                        <li  onClick={ ()=>  navigator("/account")}><PersonIcon/></li>
                        <li><FavoriteIcon/></li>
                        <li onClick={()=> navigator("/cart")}><LocalMallIcon/></li>
                    </ul>
                </div>
            </div>
           

   {/* mobile search */}
            <div className='sm:hidden flex    items-center w-full  justify-between'>
             
             <div className='flex items-center space-x-2 '>
             <MenuIcon/>
            <h1 className='text-xl font-bold'>BOLDX</h1>
             </div>

             
             <ul className='flex  space-x-2 items-center  font-extralight '>
                        <li  onClick={ ()=>  navigator("/account")}><PersonIcon/></li>
                        <li><FavoriteIcon/></li>
                        <li onClick={()=> navigator("/cart")}><LocalMallIcon/></li>
                    </ul>

           

            </div>


        </nav>
      
      

        

    </header>
  )
}

export default Header