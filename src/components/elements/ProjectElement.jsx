import React from "react";
import img1 from "../assets/computer.jpg";

const ProjectElement = () => {
  return (
    <div className="h-fit p-2  w-full shadow-lg flex items-center gap-4 rounded-xl overflow-hidden">
      <img
        className=" h-[60%] w-[30%] object-cover shadow-md rounded-lg "
        src={img1}
        alt=""
      />
      <div className="flex w-full flex-col gap-2 justify-center items-center">
        <div className="flex flex-col w-full gap-4 p-4">
          <p className="text-2xl font-semibold">Project Title</p>
          <div className="flex flex-col gap-2">
            <p>Name : Dummy Name</p>
            <p>Institution : XYZ college of Engineering</p>
            <p>Status : Verified/Unverified</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            fugiat minima vel unde placeat aspernatur, ut iure nostrum facilis.
            Dolor amet ipsum officia nihil perferendis.
          </p>
        </div>
        <button className="outline outline-slate-300 hover:bg-blue-700 hover:text-white transition-all duration-200 text-lg font-semibold  w-full rounded-lg p-2">
          Read Project
        </button>
      </div>
    </div>
  );
};

export default ProjectElement;
