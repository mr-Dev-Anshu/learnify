import React from "react";
import profile from "../components/assets/profile pic.jpg";
import { BookUser, PenBoxIcon } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Dashboard = () => {
  return (
    <div className="pl-40 pr-40 ">
      <div className=" w-full h-fit shadow-xl rounded-xl flex justify-between">
        <div className=" h-fit w-[50%] p-2 ">
          <div className="p-4 flex justify-between shadow-xl rounded-md">
            <div>
              <img
                className="h-20 w-20 object-cover rounded-full"
                src={profile}
                alt=""
              />
              <p>userName</p>
            </div>
            <div className="flex gap-6 justify-start pt-20 ">
              <HashLink to={"/editProfile"} className="group">
                <PenBoxIcon />
                <p className="opacity-0 w-20 flex justify-center items-center text-xs font-medium group-hover:opacity-100 fixed transition-all duration-300  outline-1 rounded-xl p-1 mt-2 bg-slate-400 text-white">
                  Edit profile
                </p>
              </HashLink>
              <HashLink to={"/createNewSet"} className="group">
                <BookUser />
                <p className="opacity-0 w-20 flex justify-center items-center text-xs font-medium group-hover:opacity-100 fixed transition-all duration-300  outline-1 rounded-xl p-1 mt-2 bg-slate-400 text-white">
                  Upload
                </p>
              </HashLink>
            </div>
          </div>
          <div className="p-1 shadow-xl mt-4 font-medium rounded-xl text-slate-500">
            <div className="flex w-full gap-8 p-1">
              <p className="w-40">Name : </p>
              <p>Fetch name</p>
            </div>
            <div className="outline outline-1 w-full outline-slate-300"></div>
            <div className="flex w-full gap-8 p-1">
              <p className="w-40">University : </p>
              <p>Fetch name</p>
            </div>
            <div className="outline outline-1 w-full outline-slate-300"></div>
            <div className="flex w-full gap-8 p-1">
              <p className="w-40">Course : </p>
              <p>Fetch name</p>
            </div>
            <div className="outline outline-1 w-full outline-slate-300"></div>
            <div className="flex w-full gap-8 p-1">
              <p className="w-40">No. of projects : </p>
              <p>Fetch name</p>
            </div>
            <div className="outline outline-1 w-full outline-slate-300"></div>
            <div className="flex w-full gap-8 p-1">
              <p className="w-40">Profession : </p>
              <p>Fetch name</p>
            </div>
            <div className="outline outline-1 w-full outline-slate-300"></div>
            <div className="flex w-full gap-8 p-1">
              <p className="w-40">Collaborations : </p>
              <p>Fetch name</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] p-2 ">
          <div className=" w-full h-full rounded-xl shadow-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
