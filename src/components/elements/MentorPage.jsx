import React from "react";
import MentorCard from "./MentorCard";

const MentorPage = () => {
  // map the mentors data here after fetching it from database
  return (
    <div className="pl-40 pr-40">
      <div className="h-fit w-full p-8 shadow-xl rounded-xl flex justify-between flex-wrap gap-8">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </div>
  );
};

export default MentorPage;
