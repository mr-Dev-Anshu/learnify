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
  getProject = (userName) =>{
     const projectDocs = doc(db,"Projects" , userName);
     return getDocs(projectDocs);
  }
}
export default new ProjectDataService();