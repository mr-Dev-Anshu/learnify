import React from "react";
import { HashLink } from "react-router-hash-link";

const Admin = () => {
  return (
    <div className="pl-40 pr-40 flex flex-col gap-4 mt-12">
      <div className="p-12 w-full flex outline justify-center items-center text-4xl font-bold text-white shadow-xl rounded-xl bg-purple-300">
        <p>Admin</p>
      </div>
      <div className="p-12  flex flex-col gap-12 rounded-xl justify-center outline items-center outline-slate-100 w-full bg-cyan-100">
        <HashLink to={"/projects"}>
          <button className="p-3 text-2xl font-semibold outline outline-4 w-40 outline-slate-300 rounded-xl">
            Projects
          </button>
        </HashLink>
        <HashLink to={"/ideas"}>
          <button className="p-3 text-2xl font-semibold outline outline-4 w-40 outline-slate-300 rounded-xl">
            Ideas
          </button>
        </HashLink>
        <HashLink to={"/users"}>
          <button className="p-3 text-2xl font-semibold outline outline-4 w-40 outline-slate-300 rounded-xl">
            Users
          </button>
        </HashLink>
        
        
      </div>
    </div>
  );
};

export default Admin;
