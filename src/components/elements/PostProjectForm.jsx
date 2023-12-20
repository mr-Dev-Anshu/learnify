import React, { useEffect, useState } from "react";
import IdeaServices from "../../services/IdeaServices";
import {toast , Toster } from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
const PostProjectForm = () => {
  const [formData, setFormData] = useState({});
  const navigate  = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord = formData;
   
    try {
      await IdeaServices.addIdea(formData);
     navigate("/postProject");
    } catch (e) {
      alert("!Project uploaded");
    }
  };
  useEffect(() => {
    console.log(formData);
  });
  return (
    <div className="pl-40 pr-40 w-full flex justify-center items-center p-4 ">
      <form onSubmit={handleSubmit}
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
            id="title"
            onChange={handleChange}
            required
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="text"
            placeholder="Short description"
            id="description"
            onChange={handleChange}
            required={true}
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="date"
            placeholder=" Expected start date"
            id="date"
            onChange={handleChange}
            required
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="text"
            placeholder="Expected duration"
            id="duration"
            onChange={handleChange}
            required
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="text"
            placeholder="Describe your requirements"
            id="requirements"
            onChange={handleChange}
            required
          />
          <input
            className=" shadow-inner rounded-xl w-full p-2"
            type="email"
            placeholder="Enter your valid email address"
            id="email"
            onChange={handleChange}
            required
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
