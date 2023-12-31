import { db } from '../firebase-config';


// import remaining = getDoc, updateDoc, deletDoc, doc

import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
 } from "firebase/firestore";
const ProjectCollectionRef = collection(db, "Projects");
class ProjectDataService {
  addProject = (newProject) => {
    return addDoc(ProjectCollectionRef, newProject);
  };
  getAllProjects = () => {
    return getDocs(ProjectCollectionRef);
  };
  getProjectById = async (projectId) => {
    try {
      const projectDocRef = doc(ProjectCollectionRef, projectId);
      const projectSnapshot = await getDoc(projectDocRef);

      if (projectSnapshot.exists()) {
        const projectData = projectSnapshot.data();
        console.log("Project data:", projectData);
        return projectData;
      } else {
        console.log("Project not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching project:", error);
      throw error;
    }
  };
}
export default new ProjectDataService();