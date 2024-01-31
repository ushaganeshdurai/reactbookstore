import React, { useState } from "react";
import { auth, provider } from "../src/auth"; //the auth object that we created
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault(); //not to lose state of email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/home");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleGooglelogin = (e) => {
  //   e.preventDefault();
  //   signInWithPopup(auth, provider)
  //     .then((userCredential) => {
  //       navigate("/home");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
          <a
            href="#"
            className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-blue-600"
          >
            {" "}
            Book store .{" "}
          </a>
        </div>
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="mt-2 text-left text-gray-500">
            Welcome back, please enter your details.
          </p>
          {/* <button
            onChange={handleGooglelogin}
            className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white"
          >
            <img
              className="mr-2 h-5"
              src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
            />{" "}
            Log in with Google
          </button> */}
          
          <form onSubmit={handleLogin} className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="email"
                  id="login-email"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-12 flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="password"
                  id="login-pw"
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
            >
              Log in
            </button>
          </form>
          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Don't have an account?
              <a
                 onClick={() => navigate("/signUp")}
                className="underline-offset-4 font-semibold text-gray-900 underline"
              >
                Sign up for free.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-blue-600 md:block md:w-1/2  flex-col justify-center  text-center ">
        <img
          className=" abs flex items-center justify-center -z-1 mx-auto w-11/12 max-w-lg rounded-lg object-contain"
          src="https://media1.giphy.com/media/ZcdDG0yjF6XmoQ2xLD/giphy.gif?cid=6c09b952szi4ie05cx82twsxcqyjussp31o33lda8rei8kaw&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        />
      </div>
    </div>
  );
};

export default SignIn;
