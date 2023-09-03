import React, { useContext } from "react";
import Footer from "../components/Footer";
import Acta from "../components/Acta";
import HeroSection from "../components/HeroSection";
import Productlisting from "../components/Productlisting";
import Category from "../components/Category";
import CategoryBanner from "../components/CategoryBanner";
import Header from "../components/Header";
import GetProducts from "../components/GetProducts";
import WhyBuy from "../components/WhyBuy";
import Accordation from "../components/Accordation";

function Home() {
  const imges1 = [
    "https://images.pexels.com/photos/4199346/pexels-photo-4199346.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    "https://images.pexels.com/photos/4046986/pexels-photo-4046986.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    "https://images.pexels.com/photos/4198972/pexels-photo-4198972.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  ];

  const imges2 = [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
  ];

  const imges3 = [
    "https://images.unsplash.com/photo-1605518215584-5ba74df5dfd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGplYW5zfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1612126751929-0c13b9e667c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1612126752400-082fdc78756d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
  ];

  const imges4 = ["https://images.unsplash.com/photo-1618333262686-d0bdf1e9089f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1618333826210-34c62badc237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1618333258404-f509733839c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG9vZGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=60"
];

  return (
    <>
    <HeroSection imges={imges1} />
      <Category />
      <GetProducts />
      <HeroSection imges={imges2} />
      <WhyBuy />
      <HeroSection imges={imges3} />
      <Accordation/>
    </>
  );
}

export default Home;
