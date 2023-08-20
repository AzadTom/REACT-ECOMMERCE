 import React, { Suspense, lazy } from 'react';
  import { Route, Routes } from 'react-router-dom';

const Home = lazy(()=> import('./pages/Home'));
const Login = lazy(()=> import("./authentication/Login"));

  const  SignUp  = lazy(()=> import('./authentication/SignUp'));
  const  Account = lazy(()=> import('./pages/Account'));
  
  const ProductCart =  lazy(()=> import('./pages/ProductCart'));
  const Products =  lazy(()=> import('./pages/Products'));

  const ProductDetail  =  lazy(()=> import('./pages/ProductDetail'));

  import Header from './components/Header';
  import Footer from './components/Footer';
  import ScrollToTop from './components/ScrollToTop';
  import Loading from './components/Loading';

  function App(){
   

    return (
      <>
      
        <Header/>
        <ScrollToTop/>
      <Routes>

        <Route path='/' element={<Suspense fallback={<Loading/>}><Home/></Suspense>}/>
        <Route path='/signup' element={<Suspense fallback={<Loading/>}><SignUp/></Suspense>}/>
        <Route path='login' element={<Suspense fallback={<Loading/>}><Login/></Suspense>}/>
        <Route path='/account' element={ <Suspense fallback={<Loading/>}><Account/></Suspense>}/>
        <Route path='/cart' element={<Suspense fallback={<Loading/>}><ProductCart/></Suspense>}/>
        <Route path='/products' element={<Suspense fallback={<Loading/>}><Products/></Suspense>}/>
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