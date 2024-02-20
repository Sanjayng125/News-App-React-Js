import React, { useEffect, useState } from "react";
import { useCountry } from "../context/countryContext";
import { getNews } from "../api/getNews";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [country, setCountry] = useCountry();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [loading, setLoading] = useState(false);
  const [urlParams] = useSearchParams();

  useEffect(() => {
    const search = urlParams.get("query");
    const get_news = async () => {
      setLoading(true);
      try {
        let url = "";
        if (search === "") {
          url = `https://newsapi.org/v2/everything?sortBy=publishedAt&page=${page}&pageSize=${pageSize}&language=en&apiKey=${
            import.meta.env.VITE_NEWS_API
          }`;
        } else {
          url = `https://newsapi.org/v2/everything?sortBy=publishedAt&page=${page}&pageSize=${pageSize}&language=en&q=${search}&apiKey=${
            import.meta.env.VITE_NEWS_API
          }`;
        }
        const res = await fetch(url);
        const data = await res.json();

        // console.log(data);
        setNews(data?.articles);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    document.title = `Search - ${search}`;
    get_news();
  }, [urlParams, page]);

  const handleBack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPage(page - 1);
    if (page > 1) {
      try {
        const search = urlParams.get("query");
        let url = "";
        if (search === "") {
          url = `https://newsapi.org/v2/everything?sortBy=publishedAt&page=${
            page - 1
          }&pageSize=${pageSize}&language=en&apiKey=${
            import.meta.env.VITE_NEWS_API
          }`;
        } else {
          url = `https://newsapi.org/v2/everything?sortBy=publishedAt&page=${
            page - 1
          }&pageSize=${pageSize}&language=en&q=${search}&apiKey=${
            import.meta.env.VITE_NEWS_API
          }`;
        }
        const res = await fetch(url);
        const data = await res.json();
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
      const search = urlParams.get("query");
      let url = "";
      if (search === "") {
        url = `https://newsapi.org/v2/everything?sortBy=publishedAt&page=${
          page + 1
        }&pageSize=${pageSize}&language=en&apiKey=${
          import.meta.env.VITE_NEWS_API
        }`;
      } else {
        url = `https://newsapi.org/v2/everything?sortBy=publishedAt&page=${
          page + 1
        }&pageSize=${pageSize}&language=en&q=${search}&apiKey=${
          import.meta.env.VITE_NEWS_API
        }`;
      }
      const res = await fetch(url);
      const data = await res.json();
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

export default Search;
