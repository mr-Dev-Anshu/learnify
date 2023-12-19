import React from "react";
import { HashLink } from "react-router-hash-link";
import college from "../assets/college.jpg"
import domain from "../assets/domain.jpg"
import professor from "../assets/professor.jpg"


const CardThree = () => {
  return (
    <div className="mt-12 p-4 flex h-fit w-full gap-4 justify-between">
      <div className="h-fit w-[30%] shadow-xl p-4 rounded-xl mt-8 flex flex-col justify-left gap-8">
        <div >
          <img className=" h-60 rounded-md" src={college} alt="" />
        </div>
        <div className="flex flex-col h-full  tracking-wide justify-center items-center">
          <p className="text-xl font-semibold font-serif text-slate-600">
            College Specific Projects
          </p>
          <p className="mt-2">explore colleges and their projects.</p>
          <HashLink to={"/explore"}>
            <button className="h-12 w-48 outline mt-8 rounded-xl hover:bg-blue-700 duration-300 hover:text-white outline-slate-200 text-slate-600 font-semibold text-xl">
              Explore !
            </button>
          </HashLink>
        </div>
      </div>
      <div className="h-fit w-[30%] p-4 shadow-xl rounded-xl mt-8 flex flex-col justify-left gap-8">
        <div>
          <img className=" h-60 rounded-md" src={domain} alt="" />
        </div>
        <div className="flex flex-col h-full tracking-wide justify-center items-center">
          <p className="text-xl font-semibold font-serif text-slate-600">
            Domain Specific Projects
          </p>
          <p className="mt-2">See projects from each domain.</p>
          <HashLink to={"/explore"}>
            <button className="h-12 w-48 outline mt-8 rounded-xl hover:bg-blue-700 duration-300 hover:text-white outline-slate-200 text-slate-600 font-semibold text-xl">
              Explore !
            </button>
          </HashLink>
        </div>
      </div>
      <div className="h-fit w-[30%] p-4 shadow-xl rounded-xl mt-8 flex flex-col justify-left gap-8">
        <div>
          <img className=" h-60 rounded-md" src={professor} alt="" />
        </div>
        <div className="flex flex-col h-full tracking-wide justify-center items-center">
          <p className="text-xl font-semibold font-serif text-slate-600">
            Expert's Projects
          </p>
          <p className="mt-2">Projects by experts and professors.</p>
          <HashLink to={"/explore"}>
            <button className="h-12 w-48 outline mt-8 rounded-xl hover:bg-blue-700 duration-300 hover:text-white outline-slate-200 text-slate-600 font-semibold text-xl">
              Explore !
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
