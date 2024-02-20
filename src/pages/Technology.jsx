import React, { useEffect, useState } from "react";
import { useCountry } from "../context/countryContext";
import { getNews } from "../api/getNews";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";

const Technology = () => {
  const [country, setCountry] = useCountry();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [category, setCategory] = useState("technology");
  const [loading, setLoading] = useState(false);

  const get_news = async () => {
    try {
      setLoading(true);
      const data = await getNews(country, category, page, pageSize);
      // console.log(data);
      setNews(data?.articles);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    get_news();
    document.title = `Top Headlines - Technology`;
  }, [country, page]);

  const handleBack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPage(page - 1);
    if (page > 1) {
      try {
        const data = await getNews(country, category, page - 1, pageSize);
        setNews(data?.articles);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };
  const handleNext = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPage(page + 1);
    try {
      const data = await getNews(country, category, page + 1, pageSize);
      setNews(data?.articles);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {!loading && news?.length > 0 ? (
        <>
          <div className="w-full p-3 grid gap-2 grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {news?.map((article, i) => (
              <NewsCard article={article} key={i} />
            ))}
          </div>
          <div className="w-2/4 flex justify-between">
            <button
              className="p-2 rounded-lg bg-green-600 text-white w-max m-3 mb-5 disabled:opacity-80"
              onClick={handleBack}
              disabled={page <= 1 || !news}
            >
              Back
            </button>
            <button
              className="p-2 rounded-lg bg-green-600 text-white w-max m-3 mb-5 disabled:opacity-80"
              onClick={handleNext}
              disabled={news?.length < pageSize || !news}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
};

export default Technology;
