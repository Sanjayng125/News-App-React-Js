import React from "react";
import fallBackImg from "../assets/fallBackImg.webp";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <div className="p-3 rounded-lg shadow-2xl h-[400px] border flex flex-col justify-between hover:scale-105 transition-all duration-150">
      <div className="flex justify-center max-h-[40%]">
        <img src={article?.urlToImage || fallBackImg} alt="News Image" />
      </div>
      <h3 className="text-2-3xl font-bold">
        {article?.title?.substring(0, 100)}...
      </h3>
      <p className="text-sm">{article.publishedAt}</p>
      <h4 className="text-2-2xl font-semibold bg-red-500 w-max p-2 text-white rounded-lg">
        {article?.source?.name}
      </h4>
      <p className="truncate">{article?.description?.substring(0, 150)}...</p>
      <Link
        to={article?.url}
        target="_blank"
        className="p-3 py-2 bg-slate-900 text-teal-200 rounded-lg hover:opacity-90 text-center"
      >
        Visit
      </Link>
    </div>
  );
};

export default NewsCard;
