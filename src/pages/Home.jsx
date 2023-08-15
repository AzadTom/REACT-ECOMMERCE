import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Acta from '../components/Acta'
import HeroSection from '../components/HeroSection'
import Productlisting from '../components/Productlisting'
import Category from '../components/Category'
import CategoryBanner from '../components/CategoryBanner'


function Home() {


  

 

  return (

    <>
    <HeroSection/>
    <Category/>
     <CategoryBanner/>
     <Acta/>
     <CategoryBanner/>
     <Footer/>
    </>
    
  )
}

export default Home