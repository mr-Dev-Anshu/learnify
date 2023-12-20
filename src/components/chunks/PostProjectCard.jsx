import React, { useEffect, useState } from "react";
import i1 from "../assets/physics.jpg";
import IdeaServices from "../../services/IdeaServices";

const PostProjectCard = () => {
  const [datas, setData] = useState();
  useEffect(() => {
    setTimeout(() => {
      getProjects();
    } , 1000);
  }, []);
  const getProjects = async () => {
    const snapshot = await IdeaServices.getAllIdeas();
    const projectArray = [];
    snapshot.forEach((doc) => {
      // Assuming each document contains project data
      const projectData = doc.data();
      projectArray.push(projectData);
    });
    setData(projectArray);
    console.log(datas);
  };
  return (
    <>
      {datas ? (
        datas.map((data) => (
          <div className="flex gap-4">
            <img
              className=" h-[60%] w-[30%] object-cover shadow-md rounded-lg "
              src={i1}
              alt=""
            />
            <div className="flex w-full flex-col gap-2 justify-center items-center">
              <div className="flex flex-col w-full gap-4 p-4">
                <p className="text-2xl font-semibold">{data.title}</p>
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold">Name : {data.email}</p>
                  <p className="text-xl font-bold">
                    {" "}
                    Duration :{" " + data.duration + "Days"}
                  </p>
                  <p className="text-xl font-bold"> {data.description} </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam fugiat minima vel unde placeat aspernatur, ut iure
                  nostrum facilis. Dolor amet ipsum officia nihil perferendis.
                </p>
              </div>
              <button className="outline outline-slate-300 hover:bg-blue-700 hover:text-white transition-all duration-200 text-lg font-semibold  w-full rounded-lg p-2">
                Explore Project
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="flex text-2xl  justify-center items-center text-blue-600">
          Page is Loading......
        </h1>
      )}
    </>
  );
};
export default PostProjectCard;
