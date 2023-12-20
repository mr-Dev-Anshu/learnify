// ProjectDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectServices from "../../services/ProjectServices";
const ProjectDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getData(id);
  }, []);
  const getData = async (id) => {
    const doc = await ProjectServices.getProjectById(id);
    setData(doc);
  };
  return (
    <div className="pl-40 pr-40 mt-10">
      <div className="outline p-4 rounded-xl outline-slate-200 shadow-xl flex flex-col gap-4" >
        <h2 className="text-3xl font-semibold">{data?.project_name}</h2>
        <p className="text-lg">Institution: {data?.college}</p>
        <p>Domain: {data?.domainName}</p>
        <p>Abstract: {data?.abstract}</p>
        <p>Description: {data?.description}</p>
        <p>GitHub Link: {data?.git_link}</p>
        <p>Youtube Link: {data?.yt_link}</p>
        <p>Mentor Email: {data?.mentorEmail}</p>
        <p>Mentor Name: {data?.mentorName}</p>
        <p>Reference: {data?.reference}</p>
        <p>Team Name: {data?.team_name}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
