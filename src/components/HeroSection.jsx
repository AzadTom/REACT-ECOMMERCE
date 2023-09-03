import React from 'react'
import Header from "./Header"
import Carousel from "./Carousel"

function HeroSection({imges}) {

    

  return (
   <section>
     <Carousel images={imges}/>
   </section>
  )
}

export default HeroSection
