import React , {useEffect, useState} from "react";
import PostProjectCard from "../chunks/PostProjectCard";
import { HashLink } from "react-router-hash-link";
import IdeaServices from "../../services/IdeaServices";
const PostProjectPage =  () => {
  
  return (
    <div className="pl-40 pr-40 flex flex-col gap-4">
      <div className="w-full mt-8">
        <HashLink to={"/postprojectform"}>
          <button className=" w-full outline p-2 hover:bg-blue-700 hover:text-white transition-all duration-300 rounded-xl outline-slate-300 text-lg font-semibold">
            Post your project here
          </button>
        </HashLink>
      </div>
      <PostProjectCard />
    </div>
  );
};
export default PostProjectPage;