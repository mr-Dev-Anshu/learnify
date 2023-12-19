import React from "react";

const PostProjectForm = () => {
  return (
    <div className="pl-40 pr-40 w-full flex justify-center items-center p-4 ">
      <form
        className="w-[40%] flex flex-col justify-center items-center shadow-xl p-4 gap-4 rounded-xl"
        action=""
      >
        <p className="w-full p-2 text-center rounded-xl outline outline-slate-300 text-lg font-semibold text-white bg-blue-700 ">
          Provide project details
        </p>
        <div className=" w-full flex flex-col gap-4">
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="text"
            placeholder="Title of project"
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="text"
            placeholder="Short description"
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="text"
            placeholder="Start Date"
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="text"
            placeholder="Expected duration"
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="text"
            placeholder="Describe your requirements"
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="email"
            placeholder="Enter your valid email address"
          />
        </div>
        <button className="outline p-2 w-full rounded-xl outline-slate-300 text-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300 ">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostProjectForm;