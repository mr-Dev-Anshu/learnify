import React, { useEffect, useState } from "react";
import logo from "../components/assets/logo.png";
import { FolderUp } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {  userContext } from "../AppContext";
import {toast , Toaster} from 'react-hot-toast'
const Header = () => {
  const { user, setUser } = useContext(userContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
   const notify = () => {
       toast.success("Log-out Successful");
   }
  const logout =  async () => {
       try {
         await auth.signOut();
         notify();
         console.log("LogOut in SignIn page !!");
       } catch (error) {
        console.log("There is some error in the logOut !!");
       }
  };
  return (
    <>
      <div className="w-full pr-40 pl-40 h-20  text-black flex justify-between">
        <div className="flex h-full justify-center   items-center">
          <HashLink to={"/"}>
            <img className="h-12" src={logo} alt="" />
          </HashLink>
        </div>
        <div className="flex justify-center  items-center gap-40">
          {user?null:
            <HashLink to={"/welcome"}>
              <button className=" h-10 w-32 font-semibold outline outline-2 rounded-xl outline-black text-black">
                Log In
              </button>{" "}
            </HashLink>
          }
          <HashLink to={"/mentor"}>
            <button className="h-10 w-36 bg-slate-800 font-bold tracking-wider text-white  text-sm rounded-xl flex items-center justify-center gap-2 outline-black hover:bg-red-700 duration-100">
              Find Mentor
              <FolderUp />
            </button>
          </HashLink>
        </div>
        <div className="flex justify-center items-center gap-20">
          {user ? (
            <HashLink to={"/upload"}>
              <button className="h-10 w-32 bg-slate-800 font-bold tracking-wider text-white  text-sm rounded-xl flex items-center justify-center gap-2 outline-black hover:bg-blue-700 duration-100">
                Upload
                <FolderUp />
              </button>
            </HashLink>
          ) : null}
          {user ? (
            <Link>
              <button
                onClick={logout}
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Log-Out
              </button>
              <Toaster/>
            </Link>
          ) : null}
          {user ? (
            <Link to={"/dashboard"}>
              <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span class="font-medium text-gray-600 dark:text-gray-300">
                  {(user?.email[0] + user?.email[1]).toUpperCase()}
                </span>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
      <div className=" w-full outline outline-1 outline-slate-200"></div>
      
    </>
  );
};
export default Header;
