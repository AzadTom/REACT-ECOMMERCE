import React from 'react'
import Productlisting from '../components/Productlisting'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Filter from '../components/Filter'

function Products() {
  return (
    <>
    <Header/>
    <section  className='flex'>

     <Filter/>
    <Productlisting/>

   </section>
    <Footer/>
    </>
   
  )
}

export default Products