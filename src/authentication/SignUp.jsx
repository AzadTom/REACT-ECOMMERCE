import React, { useContext, useState } from 'react'
import InputField from './InputField';
import OAuth from './OAuth';
import { Link} from 'react-router-dom';
import { validateSignupForm } from './validatecredential';
import { AuthContext }from '../context/AuthContext'


function SignUp( ) {



        
 
       const {signupHandler} = useContext(AuthContext);



      const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        passwordMatch: true,
        hide: { password: true, confirmPassword: true },
        errors: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      });


      // form submit handler
      const signupFormSubmitHandler =  async(event) => {
        event.preventDefault();
        const { isValid, errors } = validateSignupForm(userDetails);
    
        if (isValid) {
             signupHandler(userDetails)
      }
        else
         {
          setUserDetails({ ...userDetails, errors });
        }
      };

      // handle inputFocus
      const handleInputFocus = (field) => {
        setUserDetails((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [field]: "", // Clear the corresponding error when the input field is focused
          },
        }));
      }





    return (
      <section className='bg-no-repeat object-cover bg-gradient-to-r from-cyan-500 to-blue-800   h-screen  w-full text-white flex justify-center items-center shadow'>
        <div className=" flex flex-col justify-center  gap-8     text-center p-8 rounded bg-white text-black  " >
      <h2 className="text-3xl">Sign Up With</h2>

        <OAuth/>

        
     
      <form  onSubmit={signupFormSubmitHandler}  className="flex flex-col gap-4">

        {/* Firstname */}
        <InputField 
        field="FirstName"
        id="FirstName"
         type="text"
          value={userDetails.firstName}
          onChange={(event) =>
            setUserDetails({
              ...userDetails,
              firstName: event.target.value,
            })
          }
          onFocus={() => handleInputFocus("firstName")}
          error={userDetails.errors.firstName}
          />


          {/* lastname */}
        <InputField 
        field={"Lastname"}
        id="lastName"
        type="text"
        value={userDetails.lastName}
        onChange={(event) =>
          setUserDetails({
            ...userDetails,
            lastName: event.target.value,
          })
        }
        onFocus={() => handleInputFocus("lastName")}
        error={userDetails.errors.lastName}

        />
        
        {/* email */}
        <InputField 
        field={"Email"}
        id="email"
        type="email"
        value={userDetails.email}
        onChange={(event) =>
          setUserDetails({
            ...userDetails,
            email: event.target.value,
          })
        }
        onFocus={() => handleInputFocus("email")}
        error={userDetails.errors.email}
        />


{/* password */}
        <InputField
        field={"Password"}
          id="password"
          type={userDetails.hide.password ? "password" : "text"}
          value={userDetails.password}
          onChange={(event) =>
            setUserDetails({
              ...userDetails,
              password: event.target.value,
            })
          }
          onFocus={() => handleInputFocus("password")}
          error={userDetails.errors.password}
          toggleHide={() =>
            setUserDetails((prevState) => ({
              ...prevState,
              hide: {
                ...prevState.hide,
                password: !prevState.hide.password,
              },
            }))
          }
          hidePassword={userDetails.hide.password}
        />

           {/* comfirm password */}
        <InputField
         field={"Comfirm Password"}
         id="confirmPassword"
         type={userDetails.hide.confirmPassword ? "password" : "text"}
         value={userDetails.confirmPassword}
         onChange={(event) =>
           setUserDetails({
             ...userDetails,
             confirmPassword: event.target.value,
             passwordMatch: event.target.value === userDetails.password,
           })
         }
         onFocus={() => handleInputFocus("confirmPassword")}
         error={userDetails.errors.confirmPassword}
         toggleHide={() =>
           setUserDetails((prevState) => ({
             ...prevState,
             hide: {
               ...prevState.hide,
               confirmPassword: !prevState.hide.confirmPassword,
             },
           }))
         }
         hidePassword={userDetails.hide.confirmPassword}
        />

        <button type='submit' className='bg-slate-900 hover:bg-slate-950 px-4 py-2 rounded text-white'>SignUp</button>
      </form>

      <p className='text-slate-400'>
        Already a member?
        <span className=" border-slate-400 border-b-2 cursor-pointer hover:text-black hover:border-black">
         <Link to="/login">
         SignIn
         </Link>
        </span>
      </p>
     
    </div>
      </section>
      );
}

export default SignUp