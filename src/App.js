import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./components/Home";
import Signup from "./auth/Signup";
import Welcome from "./auth/Welcome";
import UploadCard from "./Pages/UploadCard";
import Dashboard from "./Pages/Dashboard";
import { userContext } from "./AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
// import { loadingContext } from "./AppContext";
import AllProjectList from "./Pages/AllProjectList";
import MentorPage from "./components/elements/MentorPage";
import ProjectDisplay from "./components/elements/ProjectDisplay";
import Signin from "./auth/Signin";
function App() {
  const [user,setUser] = useState(null);
 
  onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      console.log(currentUser);
  })
  return (   
  <userContext.Provider value={{user,setUser}}> 
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />}/>
          <Route path="/upload" element={<UploadCard/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/project-list" element={<AllProjectList/>}/>
          <Route path="/mentor" element={<MentorPage/>}/>
          <Route path="/projectdisplay" element={<ProjectDisplay/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </userContext.Provider>
  );
}

export default App;
