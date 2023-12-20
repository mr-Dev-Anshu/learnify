import { db } from '../firebase-config';


// import remaining = getDoc, updateDoc, deletDoc, doc

import {
  collection,
  getDocs,
  addDoc,
  doc,
 } from "firebase/firestore";
const ProjectCollectionRef = collection(db, "Ideas");
class IdeaDataService {
  addIdea = (newIdea) => {
    return addDoc(ProjectCollectionRef, newIdea);
  };
  getAllIdeas = () => {
    return getDocs(ProjectCollectionRef);
  };
  getProjectIdea = async (userName) => {
    try {
      const projectDocRef = doc(db, "Ideas", userName);
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
export default new IdeaDataService();