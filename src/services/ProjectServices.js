import { db } from '../firebase-config';


// import remaining = getDoc, updateDoc, deletDoc, doc

import {
  collection,
  getDocs,
  addDoc,
  doc,
 } from "firebase/firestore";
const ProjectCollectionRef = collection(db, "Projects");
class ProjectDataService {
  addProject = (newProject) => {
    return addDoc(ProjectCollectionRef, newProject);
  };
  getAllProjects = () => {
    return getDocs(ProjectCollectionRef);
  };
  getProject = async (userName) => {
    try {
      const projectDocRef = doc(db, "Projects", userName);
      const projectSnapshot = await getDocs(projectDocRef);
      if (projectSnapshot.exists()) {
        // Document exists, you can access its data
        const projectData = projectSnapshot.data();
        console.log("Project data:", projectData);
        return projectData;
      } else {
        // Document does not exist
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