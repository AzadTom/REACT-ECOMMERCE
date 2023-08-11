import React, { createContext ,useContext,useReducer } from 'react'
import { useNavigate } from 'react-router-dom';

import {
  LOGIN,
  LOGOUT,
  loginService,
  signupService,
} from "../utils/authservice"


  const AuthContext = createContext();

export default function AuthProvider({children}) {


  const navigator = useNavigate();

  const localStorageToken = JSON.parse(localStorage.getItem("login"));

  const initialState = {
    token: localStorageToken?.token || null,
    currentUser: localStorageToken?.user || null,
    isLoggedIn: false,
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          token: action.payload.token,
          currentUser: action.payload.user,
          isLoggedIn: true,
        };
      case LOGOUT:
        return {
          ...state,
          token: null,
          currentUser: null,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const signupHandler = async ({ firstName, lastName, email, password }) => {
    try {
      const response = await signupService(
        firstName,
        lastName,
        email,
        password
      );
      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "login",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );

        dispatch({
          type: LOGIN,
          payload: { user: createdUser, token: encodedToken },
        });

        navigator("/")

      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async ({ email, password }) => {
    try {
      const response = await loginService(email, password);
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "login",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        dispatch({
          type: LOGIN,
          payload: { user: foundUser, token: encodedToken },
        });

        navigator("/")

   
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("login");
    dispatch({ type: LOGOUT });
  
  };


  const home = ( ) => {


    navigator("/")


  }

  
  



  return (
    <AuthContext.Provider  value={ {
      signupHandler,
      loginHandler,
      logoutHandler,
      home,
      token : state.token,
      isLoggedIn: state.isLoggedIn,
      currentUser: state.currentUser,
     
    }}>
        {children}
    </AuthContext.Provider>
   
  )
}

export const useAuth = ( )=> useContext(AuthContext);

