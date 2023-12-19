import React from "react";
import phone from "../assets/phone.jpg";

const Upcoming = () => {
  return (
    <div className="mt-16">
      <div className="h-fit w-full shadow-xl p-4 rounded-xl mt-8 flex  justify-center items-center gap-8">
        <div>
          <img className=" h-96 rounded-xl shadow-xl" src={phone} alt="" />
        </div>
        <div className="flex flex-col h-full  tracking-wide justify-center items-center">
          <p className="text-6xl font-semibold font-serif text-slate-600">
            Coming Soon !
          </p>
          <p className="mt-2">
            Upload and explore projects from the ease of your smartphone.
          </p>
          <button className="h-12 w-56 outline mt-8 rounded-xl hover:bg-blue-700 duration-300 hover:text-white outline-slate-200 text-slate-600 font-semibold text-xl">
            Hang on with us !
          </button>
        </div>
      </div>
      <div className=" w-full outline outline-1 outline-slate-50 mt-12"></div>
    </div>
  );
};

export default Upcoming;
