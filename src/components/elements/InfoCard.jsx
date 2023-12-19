import React from "react";
import info from "../assets/info.jpg";
import { HashLink } from "react-router-hash-link";

const InfoCard = () => {
  return (
    <div className="h-fit w-full p-4 shadow-xl rounded-xl mt-16 flex justify-left gap-8">
      <div className="w-[50%]">
        <img className=" rounded-md" src={info} alt="" />
      </div>
      <div className="flex flex-col h-full w-[60%] tracking-wide">
        <p className="text-5xl font-semibold font-serif text-slate-600">
          News, Information and More!
        </p>
        <p className="mt-8 text-xl">
          Get information on most viewed projects and many more informations.Be
          updated about various project competitions around the globe.
        </p>
        <HashLink to={"/explore"}>
          <button className="h-12 w-48 outline mt-8 rounded-xl hover:bg-blue-700 duration-300 hover:text-white outline-slate-200 text-slate-600 font-semibold text-xl">
            Explore !
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default InfoCard;
