import React, { useEffect, useState } from "react";
import img1 from "../assets/computer.jpg";
import ProjectServices from "../../services/ProjectServices";

const ProjectElement = () => {

  const [project,setProject] = useState([]);
  useEffect(()=>{
    getProjects();
   //  getProject();
  },[]);
   const getProjects = async () =>{
       const snapshot = await ProjectServices.getAllProjects();
       const projectArray = [];
       snapshot.forEach((doc) => {
         // Assuming each document contains project data
         const projectData = doc.data();
         projectArray.push(projectData);
     });
     setProject(projectArray);
     console.log(project );

   }
  return (
     <>
     {
   project?
   project.map((pro)=>(
    <div className="h-fit p-2  w-full shadow-lg flex items-center gap-4 rounded-xl overflow-hidden">
    <img
      className="h-[60%] w-[30%] object-cover shadow-md rounded-lg "
      src={img1}
      alt=""
    />
    <div className="flex w-full flex-col gap-2 justify-center items-center">
      <div className="flex flex-col w-full gap-4 p-4">
        <p className="text-2xl font-semibold"></p>
        <div className="flex flex-col gap-2">
          <p>Title :{pro.project_name} </p>
          <p>Institution : {pro.college} </p>
          <p>Domain : {pro.domainName} </p>
        </div>
        <p>
          {
           
          }
        </p>
      </div>
      <button className="outline outline-slate-300 hover:bg-blue-700 hover:text-white transition-all duration-200 text-lg font-semibold  w-full rounded-lg p-2">
        Read Project
      </button>
    </div>
  </div>
   ))
   :null
     }
    </>

  );
};

export default ProjectElement;
