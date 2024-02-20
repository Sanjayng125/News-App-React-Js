import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaBars, FaNewspaper, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import countries from "../api/countries.json";
import { useCountry } from "../context/countryContext";

const Navbar = () => {
  const [urlParams] = useSearchParams();
  const [menuOn, setMenuOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [country, setCountry] = useCountry();

  const showMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <div className="w-full">
      <nav className="flex flex-col bg-slate-900 p-6 h-min relative">
        <div className="w-full flex justify-between overflow-hidden">
          <div className="w-max flex items-center flex-shrink-0 text-white mr-6 gap-5">
            <span className="flex items-center gap-3 font-semibold text-xl tracking-tight">
              <FaNewspaper className="text-3xl" /> NewsEagle
            </span>
            <div className="w-full hidden lg:flex items-center">
              <Link
                to="/"
                className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-3"
              >
                Home
              </Link>
              <Link
                to="/health"
                className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-3"
              >
                Health
              </Link>
              <Link
                to="/science"
                className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-3"
              >
                Science
              </Link>
              <Link
                to="/technology"
                className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-3"
              >
                Technology
              </Link>
              <Link
                to="/sports"
                className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-3"
              >
                Sports
              </Link>
              <Link
                to="/entertainment"
                className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-3"
              >
                Entertainment
              </Link>
              <Link
                to="/business"
                className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-3"
              >
                Business
              </Link>
              <Link
                to="/about"
                className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-3"
              >
                About
              </Link>
              <input
                type="search"
                className="border border-teal-200 rounded-lg p-2 text-black w-[150px]"
                placeholder="Search News..."
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
              <Link
                to={`/search?query=${searchQuery}`}
                className="p-2 ml-2 rounded-full text-xl bg-teal-200 text-slate-900 hover:scale-95 hover:opacity-90"
                hidden={searchQuery === ""}
              >
                <FaSearch />
              </Link>
              <div
                className="bg-slate-900 ml-[6px]"
                hidden={urlParams.has("query")}
              >
                <select
                  className="bg-slate-900 cursor-pointer px-1"
                  hidden={urlParams.get("query")}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  <option value="in" defaultValue={"in"}>
                    IN
                  </option>
                  {countries &&
                    countries.map((con, i) => (
                      <option value={`${con}`} key={i}>
                        {con.toUpperCase()}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
              onClick={() => {
                showMenu();
              }}
            >
              {menuOn ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={`menu absolute left-0 top-16 w-full flex flex-col gap-2 lg:hidden p-3 transition-all duration-300 bg-slate-900 z-[5] ${
            menuOn ? "translate-y-0" : "translate-y-[-150%]"
          } `}
        >
          <Link
            to="/"
            className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => {
              setMenuOn(!menuOn);
            }}
          >
            Home
          </Link>
          <Link
            to="/health"
            className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => {
              setMenuOn(!menuOn);
            }}
          >
            Health
          </Link>
          <Link
            to="/science"
            className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => {
              setMenuOn(!menuOn);
            }}
          >
            Science
          </Link>
          <Link
            to="/technology"
            className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => {
              setMenuOn(!menuOn);
            }}
          >
            Technology
          </Link>
          <Link
            to="/sports"
            className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => {
              setMenuOn(!menuOn);
            }}
          >
            Sports
          </Link>
          <Link
            to="/entertainment"
            className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => {
              setMenuOn(!menuOn);
            }}
          >
            Entertainment
          </Link>
          <Link
            to="/business"
            className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => {
              setMenuOn(!menuOn);
            }}
          >
            Business
          </Link>
          <Link
            to="/about"
            className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            onClick={() => {
              setMenuOn(!menuOn);
            }}
          >
            About
          </Link>
          <div className="w-full flex items-center">
            <input
              type="search"
              className="border border-teal-200 rounded-lg p-2 w-[90%] text-black"
              placeholder="Search News..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <Link
              to={`/search?query=${searchQuery}`}
              onClick={() => {
                setMenuOn(!menuOn);
              }}
              className="p-2 ml-2 rounded-full text-xl bg-teal-200 text-slate-900 hover:scale-95 hover:opacity-90"
              hidden={searchQuery === ""}
            >
              <FaSearch />
            </Link>
            <div
              className="bg-slate-900 ml-[6px] text-white"
              hidden={urlParams.has("query")}
            >
              <select
                className="bg-slate-900 cursor-pointer px-1"
                hidden={urlParams.get("query")}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setMenuOn(!menuOn);
                }}
              >
                <option value="in" defaultValue={"in"}>
                  IN
                </option>
                {countries &&
                  countries.map((con, i) => (
                    <option value={`${con}`} key={i}>
                      {con.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
