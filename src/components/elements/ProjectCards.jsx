import React from "react";
import i1 from "../assets/computer.jpg";
import i2 from "../assets/artificial.jpg";
import i3 from "../assets/civil.jpg";
import i4 from "../assets/datascience.jpg";
import i5 from "../assets/mechanical.jpg";
import i6 from "../assets/physics.jpg";
import i7 from "../assets/chemistry.jpg";
import { ChevronRight, FileUp } from "lucide-react";
import { HashLink } from "react-router-hash-link";
const ProjectCards = () => {
  return (
    <div className="mt-12 p-4 shadow-xl rounded-xl">
      <p className=" text-2xl font-bold font-serif text-slate-600">
        Popular Projects
      </p>
      <div className=" flex flex-col w-full gap-12 p-4 mt-8">
        <div className="w-full flex justify-between">
          <HashLink to={"/projectdisplay"}>
            <div className="h-56 w-56 outline rounded-md outline-slate-400 group relative">
              <img src={i1} alt="" />
              <div className="absolute h-full w-full rounded-md bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                {" "}
                <p className="text-white font-semibold">
                  Computer Science Projects
                </p>
              </div>
            </div>
          </HashLink>
          <HashLink to={"/artificial"}>
            <div className="h-56 w-56 outline rounded-md outline-slate-400 group relative">
              <img className="h-full object-cover" src={i2} alt="" />
              <div className="absolute h-full w-full rounded-md bg-black/30 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <p className="text-white font-semibold text-center">
                  Artificial intelligence <br /> projects
                </p>
              </div>
            </div>
          </HashLink>
          <HashLink to={"/civil"}>
            <div className="h-56 w-56 outline rounded-md outline-slate-400 relative group ">
              <img className=" object-cover h-full" src={i3} alt="" />
              <div className="absolute h-full w-full flex items-center justify-center bg-black/30 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <p className="text-white font-semibold">
                  Civil Engineering projects
                </p>
              </div>
            </div>
          </HashLink>
          <HashLink to={"/datascience"}>
            <div className="h-56 w-56 outline rounded-md outline-slate-400 relative group  ">
              <img className="h-full object-cover" src={i4} alt="" />
              <div className="absolute h-full w-full rounded-md bg-black/30 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <p className="text-white font-semibold">
                  Data Science Projects
                </p>
              </div>
            </div>
          </HashLink>
        </div>
        <div className=" w-full flex justify-between">
          <HashLink to={"/mechanical"}>
            <div className="h-56 w-56 outline rounded-md outline-slate-400 relative group ">
              <img className="h-full object-cover" src={i5} alt="" />
              <div className="absolute h-full w-full rounded-md bg-black/30 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <p className="text-white font-semibold text-center">
                  Mechanical Engineering <br /> Projects
                </p>
              </div>
            </div>
          </HashLink>
          <HashLink to={"/physics"}>
            <div className="h-56 w-56 outline rounded-md outline-slate-400 relative group ">
              <img src={i6} alt="" />
              <div className="absolute h-full w-full rounded-md bg-black/30 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <p className="text-white font-semibold">Physics Projects</p>
              </div>
            </div>
          </HashLink>
          <HashLink to={"/chemistry"}>
            <div className="h-56 w-56 outline rounded-md outline-slate-400 relative group ">
              <img src={i7} alt="" />
              <div className="absolute h-full w-full rounded-md bg-black/30 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <p className="text-white font-semibold">Chemistry Projects</p>
              </div>
            </div>
          </HashLink>
          <HashLink to={"/more"}>
            <div className="h-56 w-56 outline rounded-md outline-slate-400 flex justify-center items-center relative group">
              <p className="font-bold text-2xl uppercase transition-all duration-300 group-hover:text-white z-20">
                view more
              </p>
              <ChevronRight className=" group-hover:text-white duration-300 z-20" />
              <div className="absolute h-full w-full rounded-md bg-black/50 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </HashLink>
        </div>
      </div>
      <HashLink to={"/upload"}>
        <button className="flex outline w-full justify-center items-center mt-12 h-12 rounded-xl font-semibold gap-4 outline-slate-200 text-slate-600 hover:bg-blue-700 transition-all duration-500 hover:text-white">
          Upload Your Project
          <FileUp />
        </button>
      </HashLink>
    </div>
  );
};

export default ProjectCards;
