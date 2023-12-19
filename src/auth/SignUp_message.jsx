import React from "react";
import { useEffect } from "react";
import { HiBellAlert } from "react-icons/hi2";

 import { verifyContext } from "../AppContext";
 import { useContext } from "react";
 import { useNavigate } from "react-router-dom";

const SignUp_message = () => {
 
   const {verify,setVeriry} = useContext(verifyContext);
   const navigate =useNavigate();
   
  useEffect(()=>{
       console.log(verify);
       if (verify){
         navigate("/");
       }
  },[verify])
  return (
    <div className="flex justify-center  items-center text-red-600 text-2xl    ">
      <HiBellAlert size={80} />

      <div className="p-20 w-[60%]">
        We've sent you an email for the verification , Once you find the email,
        open it to find a verification link. Click on the provided link !{" "}
      </div>
    </div>
  );
};
export default SignUp_message;
