import React from "react";
import NewsCard from "../chunks/NewsCard";
import NewsCardTwo from "../chunks/NewsCardTwo";

const NewsPage = () => {
  return (
    <div className="pl-40 pr-40 w-full h-fit ">
      <div className="p-4 shadow-xl rounded-xl w-full flex flex-wrap gap-8 justify-between">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <NewsCardTwo/>
      <NewsCardTwo/>
      <NewsCardTwo/>
      <NewsCardTwo/>
      <NewsCardTwo/>
      <NewsCardTwo/>
    </div>
  );
};

export default NewsPage;