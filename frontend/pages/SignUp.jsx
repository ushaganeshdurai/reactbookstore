import React, { useState } from "react";
import {
  // GoogleAuthProvider,
  createUserWithEmailAndPassword,
  // signInWithPopup,
} from "firebase/auth";

import { auth } from "../src/auth";
import { useNavigate } from "react-router-dom";
const Alert = ({ color, withBorderAccent, children }) => (
  <div className={`alert ${color} ${withBorderAccent ? 'border-accent' : ''}`}>
    {children}
  </div>
);

const SignUp = () => {
  const navigate = useNavigate();
  const [error,setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const provider = new GoogleAuthProvider();
  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/home");
        console.log(userCredential);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  // const handleGooglesignup = () => {
  //   signInWithPopup(auth, provider)
  //     .then(() => {
  //       navigate("/home");
  //     })
  //     .then((error) => {
  //       console.log(error);
  //       navigate("/");
  //     });
  // };

  return (
    
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
        <img
          className="mx-auto w-11/12 max-w-lg rounded-lg object-cover"
          src="https://media1.giphy.com/media/ZcdDG0yjF6XmoQ2xLD/giphy.gif?cid=6c09b952szi4ie05cx82twsxcqyjussp31o33lda8rei8kaw&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        />
      </div>
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="#" className="text-2xl font-bold text-blue-600">
            {" "}
            Book store .{" "}
          </a>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already using Book store?&nbsp;
            <a
              className="whitespace-nowrap font-semibold text-blue-700 cursor-pointer"
              onClick={() => navigate("/signIn")}
            >
              Login here
            </a>
          </p>
          {/* <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <img
              className="mr-2 h-5"
              onChange={handleGooglesignup}
              src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
            />{" "}
            Get started with Google
          </button> */}
          {/* <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
              Or use email instead
            </div>
          </div> */}
          <form
            onSubmit={handleSignup}
            className="flex flex-col items-stretch pt-3 md:pt-8"
          >
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="login-name"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="login-email"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  id="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password (minimum 8 characters)"
                />
              </div>
            </div>
            <div className="block">
              <input
                className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
                type="checkbox"
                id="remember-me"
              />
              <label className="inline-block" htmlFor="remember-me">
                {" "}
                I agree to the{" "}
                <a className="underline" href="#">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
            >
              Sign Up
            </button>
          </form> 
          {error && (
        <Alert color="info" withBorderAccent>
          <span>
            <span className="font-medium">Info alert!</span> {error}
          </span>
        </Alert>,
        <Alert  color="info">
      Change a few things up and try submitting again.
    </Alert>
      )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
