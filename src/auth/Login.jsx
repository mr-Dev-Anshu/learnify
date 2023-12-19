// import React, { useState } from "react";
// import logo from "../components/assets/logo.png";
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase-config";
// import toast from "react-hot-toast";

// const Login = () => {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPass, setLoginPass] = useState("");
//   const navigate = useNavigate();

//   // const notify = () => toast.success("Logged in successfully !");
//   // const notifyError = () => toast.error("Login Failed ! ");

//   // const login = async () => {
//   //   try {
//   //     // // const loginUser = await signInWithEmailAndPassword(
//   //     //   auth,
//   //     //   loginEmail,
//   //     //   loginPass
//   //     // );
//   //     // navigate("/dashboard");
//   //     //  console.log("Sign up successfully ::");
//   //     // notify();
//   //   } catch (error) {
//   //     // notifyError();
//   //     // console.log("error in sign ");
//   //   }
//   // };

//    const login = () =>{
//      alert("fuck ");
//    }

//   return (
//     <div className="pl-40 pr-40 flex justify-center items-center">
//       <div className=" w-[30%] shadow-2xl rounded-xl flex flex-col justify-center items-center p-4 mt-20w-full h-fit">
//         <p>Login</p>
//         <img src={logo} alt="" />
//         <div className="p-4 mt-4 w-full flex flex-col gap-8">
//           <input
//             required
//             className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
//             type="email"
//             placeholder="Email Address"
//             onChange={(e) => setLoginEmail(e.target.value)}
//           />
//           <input
//             required
//             className="shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setLoginPass(e.target.value)}
//           />
//         </div>

//         <button onClick={login} className="h-12 w-56 shadow-inner shadow-blue-800 rounded-xl text-xl font-semibold mt-8">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;