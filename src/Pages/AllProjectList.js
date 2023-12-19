import React, { useEffect, useState } from 'react'
import ProjectServices from '../services/ProjectServices'
export default function AllProjectList() {
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
      // const getProject = async ()=> {
      //     try {
      //       const snapProject = await ProjectServices.getProject("ies");
            
      //       console.log (snapProject);
      //     } catch (error) {
      //       console.log("There is some error in the Data fetching ");
      //     }
      // }
  return (
    <div>
        
    </div>
  )
}