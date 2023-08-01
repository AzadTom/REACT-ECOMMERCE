import React from 'react'
import Header from "./Header"
import Carousel from "./Carousel"

function HeroSection() {

    const imges = ["https://images.pexels.com/photos/4199346/pexels-photo-4199346.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    "https://images.pexels.com/photos/4046986/pexels-photo-4046986.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    "https://images.pexels.com/photos/4198972/pexels-photo-4198972.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
  ]

  return (
   <section>
    <Header/>
     <Carousel images={imges}/>
   </section>
  )
}

export default HeroSection