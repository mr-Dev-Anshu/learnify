import React from "react";
import { HashLink } from "react-router-hash-link";

const Upcoming = () => {
  return (
    <div className="mt-16">
      <div className="h-fit w-full p-4 shadow-xl rounded-xl mt-8 flex  justify-between items-center gap-8">
        <div className=" h-fit object-contain">
          <img
            className=" h-80 rounded-xl shadow-xl"
            src="https://cdn3.vectorstock.com/i/1000x1000/02/67/professionals-businessman-discussing-project-work-vector-43350267.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col h-full  tracking-wide justify-center items-center">
          <p className="text-6xl font-semibold font-serif text-slate-600">
            Bring your ideas to life!
          </p>
          <p className="mt-2">
            Collaborate with students, reseachers and like-minded people and
            shape your ideas to real life.
          </p>
          <HashLink to={'/postproject'}>
            <button className="p-3 outline mt-8 rounded-xl hover:bg-blue-700 duration-300 hover:text-white outline-slate-200 text-slate-600 font-semibold text-xl">
              Post your project
            </button>
          </HashLink>
        </div>
      </div>
      <div className=" w-full outline outline-1 outline-slate-50 mt-12"></div>
    </div>
  );
};

export default Upcoming;