// import React, { useContext, useEffect, useState } from "react";
// import logo from "../components/assets/logo.png";
// import eye from "../components/assets/eye.png";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
// import LoadingPage from "../Pages/LoadingPage";
// import { auth } from "../firebase-config";
// import { useNavigate } from "react-router-dom";
// import { loadingContext, userContext } from "../AppContext";
// import hide from "../components/assets/hide.png";
// import { auth } from "../firebase-config";
// import toast, { Toaster } from "react-hot-toast";
// // This is register page. Named mistakenly to Login
// const Login = () => {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passMatch, setPassMach] = useState(false);
//   const [passMessage, setPassMessage] = useState(false);
//   const [errror, setErrror] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();
//   const [user, setUser] = useState();
//   const [showPassword, setShowPassword] = useState(true);
//   const { loading, setLoading } = useContext(loadingContext);
//   <userContext.Provider value={{ user, setUser }} />;
//   useEffect(() => {
//     // console.log(user?.email);
//   const [user, setUser] = useState({});
//   // Toast
//   const notify = () => toast.success("You are registered in successfully !");
//   onAuthStateChanged(auth, (currentUser) => {
//     if (currentUser) {
//       setUser(currentUser);
//     }
//   });

//   const ShownPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const register = async () => {
//     if (confirmPassword !== registerPassword) {
//       setPassMach(true);
//       return;
//     } else {
//       setPassMach(false);
//     }

//     if (registerPassword.length < 6) {
//       setPassMessage(true);
//       return;
//     } else {
//       setPassMessage(false);
//     }
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       setErrorMessage(false);
//       navigate("/");
//       console.log(user);

//       notify();
//       // console.log(user);
//     } catch (error) {
//       setErrror(true);
//       setErrorMessage(error.message);
//     } finally {
//       setLoading(true);
//       console.log(loading);
//     }
//   };
//   return (
//     <div className="h-screen flex flex-col items-center mt-4">
//       <form action="" className="w-full flex items-center justify-center">
//         <div className=" h-fit w-[30%] shadow-2xl rounded-xl flex flex-col justify-center items-center p-4">
//           <p className="text-2xl font-semibold p-8">Sign Up</p>
//           <img className="h-12" src={logo} alt="" />
//           <div className="p-4 mt-4 w-full flex flex-col gap-8 font-medium">
//             <input
//               required
//               className=" border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
//               type="email"
//               placeholder="Email Address"
//               onChange={(e) => {
//                 setRegisterEmail(e.target.value);
//               }}
//             />
//             <div className="flex justify-center items-center ">
//               <input
//                 className="border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e) => {
//                   setRegisterPassword(e.target.value);
//                 }}
//               />
//               {showPassword ? (
//                 <span>
//                   <img
//                     onClick={ShownPassword}
//                     className="corsor-pointer "
//                     src={hide}
//                     alt=""
//                     srcset=""
//                   />
//                 </span>
//               ) : (
//                 <span>
//                   <img
//                     onClick={showPassword}
//                     className="cursor-pointer "
//                     src={eye}
//                     alt=""
//                   />
//                 </span>
//               )}
//             </div>
//             <input
//               required
//               className="border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
//               type="password"
//               placeholder="Password"
//               onChange={(e) => {
//                 setRegisterPassword(e.target.value);
//               }}
//             />
//             {passMessage ? (
//               <span className="text-red-400">
//                 Password Should be have atleast 6 Charaters{" "}
//               </span>
//             ) : null}
//             <input
//               required
//               className="border-none outline-none shadow-inner shadow-red-700 rounded-xl h-12 w-full p-4 "
//               type="password"
//               placeholder="Confirm Password"
//               onChange={(e) => {
//                 setConfirmPassword(e.target.value);
//               }}
//             />
//             {passMatch ? (
//               <span className="text-red-400">
//                 Password Confirmation Mismatch
//               </span>
//             ) : null}
//           </div>
//           <HashLink>
//             <button
//               type="submit"
//               className="h-12 w-56 shadow-inner shadow-blue-800 rounded-xl text-xl font-semibold mt-8"
//               onClick={register}
//             >
//               Sign Up
//             </button>
//             <Toaster />
//           </HashLink>
//         </div>
//       </form>
//       <div className="text-red-500 text-xl font-bold ">
//         {errror ? <div>{errorMessage}</div> : null}
//       </div>
//       <div className="mt-5 shadow-2xl  ">
//         <span className="text-xl ">Have an Account {"  "} </span>
//       <div className="mt-4">{`User logged in as ${user.email}`}</div>
//       <div className="mt-5 shadow-2xl outline outline-slate-300 text-slate-500 w-[30%] rounded-xl p-2 flex justify-center items-center gap-4">
//         <span className="text-xl "> Already have an Account? {"  "} </span>
//         <Link to={"/login"}>
//           {" "}
//           <span className="text-xl text-blue-600  font-bold   ">Log In </span>
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default Login;
