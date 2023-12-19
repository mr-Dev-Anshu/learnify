import React from "react";
import image from "../assets/info.jpg"
const NewsCard = () => {
  return (
    <div className="h-fit w-56 outline outline-slate-300 p-2 rounded-xl flex flex-col gap-2">
      <img className="rounded-xl" src={image} alt="" />
      <p className="text-md font-bold text-slate-600">
        PhD Sponsorships and Cash Rewards in Offer
      </p>

      <button className="p-1 outline outline-slate-300 rounded-md hover:bg-blue-700 transition-all duration-200 hover:text-white font-semibold">
        Paritcipate
      </button>
    </div>
  );
};

export default NewsCard;