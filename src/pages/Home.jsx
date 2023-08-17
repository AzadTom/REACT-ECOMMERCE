import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Acta from '../components/Acta'
import HeroSection from '../components/HeroSection'
import Productlisting from '../components/Productlisting'
import Category from '../components/Category'
import CategoryBanner from '../components/CategoryBanner'
import Header from '../components/Header'


function Home() {


  

 

  return (

    <>
    <Header/>
    <HeroSection/>
    <Category/>
     <Acta/>
     <Footer/>
    </>
    
  )
}

export default Home