import React from "react";
import ProjectElement from "./ProjectElement";

const ProjectDisplay = () => {
    // map the projects here
  return (
    <div className="pl-40 pr-40">
      <div className="h-fit w-full p-8 shadow-xl rounded-xl flex justify-between flex-wrap gap-8">
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
      </div>
    </div>
  );
};

export default ProjectDisplay;
