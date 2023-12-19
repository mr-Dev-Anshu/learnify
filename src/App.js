import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./components/Home";
import Signup from "./auth/Signup";
import Welcome from "./auth/Welcome";
import UploadCard from "./Pages/UploadCard";
import Dashboard from "./Pages/Dashboard";
import NewsPage from "./components/elements/NewsPage";
import { userContext, verifyContext } from "./AppContext";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase-config";
// import { loadingContext } from "./AppContext";
import AllProjectList from "./Pages/AllProjectList";
import MentorPage from "./components/elements/MentorPage";
import Signin from "./auth/Signin";
import ProjectElement from "./components/elements/ProjectElement";
import PostProjectPage from "./components/elements/PostProjectPage";
import PostProjectForm from "./components/elements/PostProjectForm";
import ProjectDisplay from "./components/elements/ProjectDisplay";



function App() {
  const [user, setUser] = useState(null);
  const [verify, setVeriry] = useState(false);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if(user?.emailVerified){
         setVeriry(true);
    }else{
       setVeriry(false);
    }
    // console.log(currentUser);
  });
  return (
    <verifyContext.Provider value={{ verify, setVeriry }}>
      <userContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/upload" element={<UploadCard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/project-list" element={<AllProjectList />} />
              <Route path="/mentor" element={<MentorPage />} />
              <Route path="/ProjectElement" element={<ProjectElement />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/explore" element = {<NewsPage/>}/>
              <Route path="/postproject" element = {<PostProjectPage/>}/>
              <Route path="/postprojectform" element = {<PostProjectForm/>}/>
              <Route path="/projectdisplay" element = {<ProjectDisplay/>}/>

            </Routes>
            <Footer />
          </Router>
        </div>
      </userContext.Provider>
    </verifyContext.Provider>
  );
}

export default App;
