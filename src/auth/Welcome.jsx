import React from "react";
import logo from "../components/assets/logo.png";
import { HashLink } from "react-router-hash-link";

const Welcome = () => {
  return (
    <div className="h-screen ">
      <div className=" h-full flex flex-col justify-center items-center">
        <p className="text-3xl font-semibold">Welcome To</p>
        <img className="h-36 mt-20" src={logo} alt="" />
        <div className="flex gap-16 pt-32">
          <HashLink to={"/signup"}>
            <button className=" text-2xl tracking-wider font-semibold shadow-inner shadow-red-700 hover:shadow-blue-700 duration-300 h-16 w-64 rounded-xl ">
              Sign Up
            </button>
          </HashLink>
          <HashLink to={"/signin"}>
            <button className=" text-2xl tracking-wider font-semibold shadow-inner shadow-red-700 hover:shadow-blue-700 duration-300 h-16 w-64 rounded-xl">
              Login
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
