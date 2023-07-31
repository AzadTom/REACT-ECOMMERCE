 import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import { Route, Routes } from 'react-router-dom';
  import Home from "./pages/Home"
  import Login from "./authentication/Login"

  import SignUp from "./authentication/SignUp"
  
  function App(){
   

    return (
      <>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>

      </Routes>
      </>
    );
  }

  export default App