 import React from 'react';
  import { Route, Routes } from 'react-router-dom';
  import Home from "./pages/Home"
  import Login from "./authentication/Login"

  import SignUp from "./authentication/SignUp"
  import Account from './pages/Account'
  
  function App(){
   

    return (
      <>
      

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/account' element={ <Account/>}/>

      </Routes>
      
     
      </>
    );
  }

  export default App