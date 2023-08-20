 import React from 'react';
  import { Route, Routes } from 'react-router-dom';
  import Home from "./pages/Home"
  import Login from "./authentication/Login"

  import SignUp from "./authentication/SignUp"
  import Account from './pages/Account'
  
  import ProductCart from './pages/ProductCart';
  import Products from './pages/Products';
  import ProductDetail from './pages/ProductDetail'
  import Header from './components/Header';
  import Footer from './components/Footer';
  import ScrollToTop from './components/ScrollToTop';

  function App(){
   

    return (
      <>
      
        <Header/>
        <ScrollToTop/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/account' element={ <Account/>}/>
        <Route path='/cart' element={<ProductCart/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route
          path="/productDetails/:productId"
          element={<ProductDetail/>}
        />

      </Routes>
      <Footer/>
     
      </>
    );
  }

  export default App