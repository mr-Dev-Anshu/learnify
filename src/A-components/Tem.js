import React, { useState } from "react";
import { CardInfo } from "./Data-A/Card";
import { HashLink } from "react-router-hash-link";

export default function Tem() {
  const [cardData, setCardData] = useState(CardInfo);

  return (
    <div className="min-w-full ">
      <div className="pl-40 pr-40  flex gap-12 ">
        {cardData.map((card) => (
          <div key={card.name}>
            <HashLink>
              <div className="h-56 w-56 outline rounded-md outline-slate-400 group relative">
                <img src={card.img} alt="" />
                <div className="absolute h-full w-full rounded-md bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                  {" "}
                  <p className="text-white font-semibold">{card.data}</p>
                </div>
              </div>
            </HashLink>
          </div>
        ))}
      </div>
    </div>
  );
}
