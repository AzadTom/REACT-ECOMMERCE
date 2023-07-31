import { useState } from "react";
import React from "react";
import InputField from "./InputField";
import OAuth from "./OAuth";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Login() {

  const  navigator = useNavigate();
 
  
 async function loginService(info)
 {

  try {

    const  response = await axios.post("/api/auth/login",{...info})

    const {status, data: { createdUser, encodedToken }} = response;

    if (status === 200 || status === 201) {
     
      localStorage.setItem("login",JSON.stringify({ user: createdUser, token: encodedToken }));
      navigator("/");
      
    }

        
  } 
  catch (error) {

    console.log(error)
    
  }
 }


  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
    hidePassword: true
  });


  const guestUserDetails = {
    email: "daisykhurana@gmail.com",
    password: "Daisy@789",
  };

  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log('login')
    loginService(userLoginDetails);
  };

  const handlePasswordToggle = () => {
    setUserLoginDetails((prevState) => ({
      ...prevState,
      hidePassword: !prevState.hidePassword,
    }));
  };


  const loginAsGuestHandler = () => {
    setUserLoginDetails({
      email: guestUserDetails.email,
      password: guestUserDetails.password,
      hidePassword: true, 
    });
    loginService(guestUserDetails);
  };

  return (
    <section className=" bg-no-repeat object-cover bg-gradient-to-r from-cyan-500 to-blue-800   h-screen  w-full  flex justify-center items-center shadow">
      <div className="flex flex-col justify-center text-center gap-8  bg-white p-8 drop-shadow text-black rounded">
        <h2 className="text-3xl">Sign In With</h2>

        <OAuth />

        <form onSubmit={loginFormSubmitHandler} className="flex flex-col gap-2">
          <InputField
           field={"Email"}
           type="email"
           id="email"
           value={userLoginDetails.email}
           onChange={(event) =>
             setUserLoginDetails({
               ...userLoginDetails,
               email: event.target.value,
             })
           }
           />
          <InputField
           field={"Password"}
           type={userLoginDetails.hidePassword ? "password" : "text"}
           id="password"
           value={userLoginDetails.password}
           onChange={(event) =>
             setUserLoginDetails({
               ...userLoginDetails,
               password: event.target.value,
             })
           }
           toggleHide={handlePasswordToggle}
           hidePassword={userLoginDetails.hidePassword}
           />
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-950 px-4 py-2 rounded text-white"
          >
            SignIn
          </button>
          <button onClick={loginAsGuestHandler}>LogIn As Guest</button>
        </form>

        <p className="text-slate-400">
          Not a member?
          <span className=" border-slate-400 border-b-2 cursor-pointer hover:text-black hover:border-black">
            <Link to="/signup" >
            Sign up now
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Login;
