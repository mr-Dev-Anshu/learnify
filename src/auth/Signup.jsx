import React, { useEffect, useState } from "react";
import logo from "../components/assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase-config";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userContext } from "../AppContext";
import { useContext } from "react";
export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passMatch, setPassMach] = useState(false);
  const [passMessage, setPassMessage] = useState(false);
  const navigate = useNavigate();
  const {user , setUser } = useContext(userContext);
      // useEffect(()=>{
      //   if(user?.isVerified){
      //        console.log("its verified ");
      //   }else {
      //       console.log ("this is not verified !!");
      //   }
      // })
  const notify = () => {
    toast.success("Sign-Up Successfully !");
  };
  const notifyError = () => {
    toast.error("Sign_Up failed !!");
  };
  const register = async () => {
    if (confirmPassword !== registerPassword) {
      setPassMach(true);
      return;
    } else {
      setPassMach(false);
    }
    if (registerPassword.length < 6) {
      setPassMessage(true);
      return;
    } else {
      setPassMessage(false);
    }
    try {
      const userCredentioal  = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      await sendEmailVerification(userCredentioal.user);
    //  if(user?.emailVerified){
    //   notify();
    //   setTimeout(() => {
    //     navigate("/dashboard");
    //   }, 2000);
    //  }else{
    //    console.log(false);
    //  }
    //   console.log(user);
    navigate("/SignUp_message");
    } catch (error) {
      notifyError();
    }
  };
  return (
    <div>
      <form action="" className="w-full flex items-center justify-center">
        <div className=" h-fit w-[30%] shadow-2xl rounded-xl flex flex-col justify-center items-center p-4">
          <p className="text-2xl font-semibold p-8">Sign Up</p>
          <img className="h-12" src={logo} alt="" />
          <div className="p-4 mt-4 w-full flex flex-col gap-8 font-medium">
            <input
              required
              className=" border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
              type="email"
              placeholder="Email Address"
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
            <div className="flex justify-center items-center ">
              <input
                className="border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />
            </div>
            {passMessage ? (
              <span className="text-red-400">
                Password Should be have atleast 6 Charaters{" "}
              </span>
            ) : null}
            <input
              required
              className="border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            {passMatch ? (
              <span className="text-red-400">
                Password Confirmation Mismatch
              </span>
            ) : null}
          </div>
          <HashLink>
            <button
              type="submit"
              className="h-12 w-56 shadow-inner shadow-blue-800 rounded-xl text-xl font-semibold mt-8"
              onClick={register}
            >
              Sign Up
            </button>
            <Toaster />
          </HashLink>
        </div>
      </form>
    </div>
  );
}
