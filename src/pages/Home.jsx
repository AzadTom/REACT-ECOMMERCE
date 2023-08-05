import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Acta from '../components/Acta'
import HeroSection from '../components/HeroSection'
import Productlisting from '../components/Productlisting'
import Category from '../components/Category'


function Home() {


  

 

  return (

    <>
    <HeroSection/>
    <Category/>
    <Acta/>
     <Productlisting/>
     <Footer/>
    </>
    
  )
}

export default Home