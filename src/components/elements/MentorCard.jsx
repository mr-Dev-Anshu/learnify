import React from "react";
import img1 from "../assets/person.jpg";

const MentorCard = () => {
  return (
    <div className="h-fit p-2  w-60 shadow-lg flex flex-col items-center gap-4 rounded-xl overflow-hidden">
      <img
        className="w-full object-cover shadow-md rounded-lg h-[60%]"
        src={img1}
        alt=""
      />
      <div className="flex w-full flex-col gap-2 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-semibold">Dummy Mentor</p>
          <p>Designation</p>
          <p>7+ projects</p>
        </div>
        <button className="outline outline-slate-300 hover:bg-blue-700 hover:text-white transition-all duration-200 text-lg font-semibold  w-full rounded-lg p-2">
          Contact
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
