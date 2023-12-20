import React, { useEffect } from "react";
import i1 from "./assets/home-illustration.svg";
import Search from "./elements/Search";
import ProjectCards from "./elements/ProjectCards";
import InfoCard from "./elements/InfoCard";
import CardThree from "./elements/CardThree";
import Upcoming from "./elements/Upcoming";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { userContext } from "../AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
const Home = () => {
   const {user,setUser} = useContext(userContext);
   onAuthStateChanged( auth,(curr)=>{
    if(curr?.emailVerified){
        console.log ("verified :true ");
        setUser(curr);
        console.log (user?.emailVerified);
    }else {
       console.log ("!verified");
    }
})
  return (
    <div className="pl-40 pr-40 ">
      <div className=" w-full pt-12 h-full flex justify-between">
        <div className=" p-4 flex justify-center items-center  w-[50%]">
          <div className="flex flex-col">
            <p className=" text-4xl font-serif leading-relaxed font-bold text-slate-600">
              Empower Your Ideas, <br /> Elevate Your Projects, <br /> Seamless
              Uploading,
              <br />
              Limitless Possibilities!
            </p>
            <p className=" text-xl tracking-wide select-none mt-4">
              Showcase your
              <span className=" text-green-500"> projects</span> to all the
              enthusiasts out there.
            </p>
            <div className="mt-16 flex flex-col w-full gap-8">
              {user?null:<div className="flex w-full gap-12">
                <HashLink to={"/signin"}>
                  <button className="h-12 w-60 font-bold tracking-wider text-slate-600 outline outline-slate-500  text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 hover:text-white duration-100">
                    Login
                  </button>
                </HashLink>
                <HashLink to={"/signup"}>
                  <button className="h-12 w-60 font-bold tracking-wider text-slate-600  outline text-lg rounded-xl flex items-center justify-center gap-2 outline-slate-500 hover:bg-blue-700 hover:text-white duration-100">
                    Sign Up
                  </button>
                </HashLink>
              </div>}
              <div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src={i1} alt="" />
        </div>
      </div>
      <Search />
      <ProjectCards />
      <InfoCard />
      <CardThree />
      <Upcoming />
    </div>
  );
};

export default Home;
