import React from "react";
import image from "../assets/civil.jpg"


const NewsCardTwo = () => {
  return (
    <div className="mt-12 w-full shadow-xl flex gap-4 rounded-xl p-4">
      <div className=" h-fit rounded-xl w-[20%]">
        <img className="h-36 rounded-xl" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-semibold">
          Project from the Harvard University got selected by HEXA.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          illo voluptatem in quod maiores adipisci eligendi quis non doloribus,
          repellat, voluptatum error totam, voluptates sapiente.
        </p>
        <button className="p-1 outline outline-slate-300 rounded-md hover:bg-blue-700 transition-all duration-200 hover:text-white font-semibold">
          Read full article
        </button>
      </div>
    </div>
  );
};

export default NewsCardTwo;