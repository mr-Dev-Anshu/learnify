import React, { useEffect, useState } from 'react'
import ProjectServices from '../services/ProjectServices'
export default function AllProjectList() {
    const [project,setProject] = useState([]);
     useEffect(()=>{
       getProjects();
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
        console.log(project);
      }
  return (
    <div>
    </div>
  )
}