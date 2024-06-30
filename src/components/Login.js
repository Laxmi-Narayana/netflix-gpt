import { useRef, useState } from "react";
import Header from "./Header";
import {
  checkValidSignInData,
  checkValidSignUpData,
} from "../utils/validateForm";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  // can create state variables for inputs or references, useRef hook
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleForm = () => {
    if (isSignInForm) {
      const message = checkValidSignInData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
    } else {
      console.log(
        fullName.current.value,
        email.current.value,
        password.current.value
      );
      const message = checkValidSignUpData(
        fullName.current.value,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative flex items-center justify-center flex-grow">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md p-12 bg-black bg-opacity-85 text-white rounded-lg"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            autoComplete="email"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            autoComplete="password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
          <button className="p-4 my-6 bg-red-700 w-full" onClick={handleForm}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
