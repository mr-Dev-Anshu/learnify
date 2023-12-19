import React from "react";
import { useState  } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import ProjectDataService from "../services/ProjectServices";
import { storage } from "../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useContext } from "react";
import { userContext } from "../AppContext";
// import {toast, Toaster} from 'react-hot-toast';
export default function Upload_Project() {
  // All Image states
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [url, setUrl] = useState("");
  const [formData, setFormData] = useState({});
  const {user , setUser} = useContext(userContext);
 
  // Toaster
  const notify = () => toast.success("Operation Successful !");
  const notifyImage = ()=>toast.success("Photos Uploaded successfuly !!");
  const notifyErrorImage = () => toast.error(" !Photos Upploaded  successfuly")
  const notifyError = () => toast.error("Operation Failed !");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setUrl(e.target.value);
  }
  // useEffect(()=>{
  //         // console.log(formData.team_name);
  //         console.log(formData)
  // } , [formData.mentorEmail])
   const uploadImage = async (e)=>{
        if(img1==null || img2==null || img3==null  ){
           alert("Upload the Images !!");
           return ;
        }
        // else if (formData.email!==user.email){
        //   console.log(formData.email , " "+user.email );
        //      alert("Enter the valid Email ");
        // }
        else{
          const folder = user?.email;
           const img1Ref = ref(storage,`${folder}/${img1.name + v4()}`);
           const img2Ref = ref(storage,`${folder}/${img2.name + v4()}`);
           const img3Ref = ref(storage,`${folder}/${img3.name + v4()}`);
           try {
              await uploadBytes(img1Ref , img1);
              await uploadBytes(img2Ref , img2);
              await uploadBytes(img3Ref , img3);
                notifyErrorImage();
              console.log("Images uploaded successfully ");
           } catch (error) {
            notifyErrorImage();
                console.log(error+"Not uploaded !!!");
           }
        }
   }
  useEffect(() => {
    // console.log(formData.team_name);
    console.log(formData);
  }, [formData.mentorEmail]);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord = formData;
    // console.log(newRecord);
    try {
      await ProjectDataService.addProject(newRecord);
      notify();
    } catch (e) {
      console.log("project  Didn't added !!!");
      notifyError();
    }
  };
  return (
    <>
      <form
        className="pl-40 pr-40 h-fit rounded-xl font-medium"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center shadow-xl rounded-xl">
          <div className="flex justify-center w-4/6">
            <div className="mt-12 flex flex-col gap-4 w-full   ">
              <div className="font-semibold font-serif bg-blue-500 text-white uppercase text-xl flex justify-center outline py-2 px-2 rounded-xl outline-slate-200">
                Upload Your Project Here{" "}
              </div>
              <input
                className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                type="email"
                id="UserId"
                placeholder="Enter your logged in email"
                onChange={handleChange}
                required
              />
              <input
                className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                type="text"
                id="project_name"
                placeholder="Project Title"
                onChange={handleChange}
                required
              />
              <input
                className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                type="text"
                id="team_name"
                placeholder="Enter the  TeamName"
                onChange={handleChange}
                required
              />
              <select
                className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                name="domain"
                id="domainName"
                required
                onChange={handleChange}
              >
                <option value="not defined" selected>
                  Select Domain
                </option>
                <option value="CS">Computer Science</option>
                <option value="AI">Artificial Engineering</option>
                <option value="Civil">Civil Engineering</option>
                <option value="Mechanical">Mechanical Engineering</option>
                <option value="DS">Data Science</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Medical">Medical Sciences</option>
                <option value="N/A">Others</option>
              </select>

              <textarea
                className="border p-3 rounded-lg resize-none  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                name=""
                id="abstract"
                cols="5"
                rows="5"
                placeholder="Add Abstract of the Project "
                onChange={handleChange}
              ></textarea>
              <textarea
                className="border p-3 rounded-lg resize-none  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                name=""
                id="description"
                cols="30"
                rows="20"
                placeholder="Project Description (minimum 500 words.)"
                onChange={handleChange}
              ></textarea>

              <input
                className={`border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full ${
                  url.length > 0 ? `border-blue-600` : `text-black`
                }`}
                type="text"
                id="yt_link"
                placeholder="Paste youtube video link here"
                onChange={handleChange}
              />
              <input
                className={`border p-3 rounded-lg placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full ${
                  url.length > 0 ? `border-blue-600` : `text-black`
                }`}
                type="text"
                id="git_link"
                placeholder="Paste github link here (if any)"
                onChange={handleChange}
              />
              <input
                type="text"
                className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                placeholder="Project Reference details (if any)"
                id="reference"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                id="college"
                className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                placeholder="College/University Name (write N/A in case of individual project.)"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                placeholder="Mentor's name"
                id="mentorName"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
                placeholder="Mentor's Email"
                id="mentorEmail"
                required
                onChange={handleChange}
              />
              <div className="flex gap-4">
                <input type="checkbox" required />{" "}
                <p className=" text-xs">Agree to the terms and conditions</p>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" required />{" "}
                <p className=" text-xs">Details filled are all true.</p>
              </div>
              <button
                className="outline rounded-xl outline-slate-200 hover:bg-blue-700 hover:text-white uppercase font-bold text-slate-500 text-xl mb-6 transition-all duration-300 py-2 px-3 "
                type="submit"
              >
                Submit
              </button>
              <Toaster />
            </div>
          </div>
        </div>
      </form>

      <div className="flex justify-center mt-12 ml-40 mr-40">
        <div className="w-full  ">
          <div className="mt-4 p-4 rounded-xl shadow-xl flex flex-col gap-4">
            <label className="text-xl font-semibold" htmlFor="documents  ">
              Upload project related documents [ Merge all documents in one pdf
              file ]
            </label>
            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="file"
              id="documents"
            />
            <button
              onClick={handleSubmit}
              className="outline rounded-xl outline-slate-200 hover:bg-blue-700 hover:text-white uppercase font-bold text-slate-500 text-xl mb-6 transition-all duration-300 py-2 px-3 mt-2"
            >
              Upload
            </button>
          </div>
          <div className="mt-4 p-4 rounded-xl shadow-xl flex justify-center flex-col gap-4">
            <label htmlFor="documents">
              <p className="text-xl font-semibold ">
                Upload project related Images ["image should be less than
                500kb"]{" "}
              </p>
            </label>

            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="file"
              id="images"
              onChange={(event) => {
                setImg1(event.target.files[0]);
              }}
            />
            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="file"
              id="images"
              onChange={(event) => {
                setImg2(event.target.files[0]);
              }}
            />
            <input
              className="border p-3 rounded-lg  placeholder-black placeholder-opacity-25 border-b border-gray-500 focus:outline-none w-full"
              type="file"
              id="images"
              onChange={(event) => {
                setImg3(event.target.files[0]);
              }}
            />
            <button
              onClick={uploadImage}
              className="outline rounded-xl outline-slate-200 hover:bg-blue-700 hover:text-white uppercase font-bold text-slate-500 text-xl mb-6 transition-all duration-300 py-2 px-3 mt-2"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
