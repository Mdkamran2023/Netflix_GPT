// rafce -- react arrow function component export
import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import checkValidData from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const email = useRef(null);
  const password = useRef(null);
  // const name= useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    // 
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="">
        <img
          className="absolute h-[90vh] w-full object-fill object-center max-sm:h-[80vh]"
          alt=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
      </div>
      <form
        className="p-12  bg-black absolute w-4/12 my-36 mx-auto left-0 right-0 flex flex-col justify-center items-center max-lg:w-5/12 max-md:w-6/12 max-sm:w-8/12 rounded-md bg-opacity-80 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-white font-semibold text-2xl p-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 rounded-md max-sm:p-2 max-sm:my-2 bg-gray-700 w-full"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 rounded-md max-sm:p-2 max-sm:my-2 bg-gray-700 w-full"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4   rounded-md  bg-gray-700 w-full max-sm:p-2 max-sm:my-2"
        ></input>
        <p className="text-red-500">{errorMessage}</p>
        <button
          type="submit"
          className="p-4 my-6  rounded-md bg-red-600 max-sm:p-2 max-sm:my-2 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="text-white font-light">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}
          <span
            className="font-bold hover:underline hover:underline-offset-2 hover:cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? " Sign up now" : " Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
