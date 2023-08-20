import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import './index.css'
import makeServer from "./server.js"
import AuthProvider from '../src/context/AuthContext.jsx'
import CartContextProvider from '../src/context/CartContext.jsx';
import ProductsDataProvider from '../src/context/productdata.jsx';
import FilterContextProvider from './context/FilterContext.jsx';




makeServer()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<BrowserRouter>
   
 

 <AuthProvider>
  <ProductsDataProvider>
  <CartContextProvider>
    <FilterContextProvider>
    <App/>
    </FilterContextProvider>
  </CartContextProvider>
  </ProductsDataProvider>
  
   </AuthProvider>
 
  
  
  

   
     
</BrowserRouter>
  
     
     
    
  </React.StrictMode>
)
