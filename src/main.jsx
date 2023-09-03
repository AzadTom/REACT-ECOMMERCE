import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import './index.css'
import makeServer from "./server.js"
import AuthProvider from './context/AuthContext.jsx';
import CartContextProvider from '../src/context/CartContext.jsx';
import ProductsDataProvider from '../src/context/productdata.jsx';
import FilterContextProvider from './context/FilterContext.jsx';
import WishlistContextProvider from './context/wishlistContext.jsx';




makeServer()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<BrowserRouter>
   
 

 <AuthProvider>
  <ProductsDataProvider>
  <CartContextProvider>
    <FilterContextProvider>
      <WishlistContextProvider>
      <App/>
      </WishlistContextProvider>
    </FilterContextProvider>
  </CartContextProvider>
  </ProductsDataProvider>
  
   </AuthProvider>
 
  
  
  

   
     
</BrowserRouter>
  
     
     
    
  </React.StrictMode>
)
