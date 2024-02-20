import React, { useEffect } from "react";
import aboutImg from "../assets/about_img.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-2xl rounded-xl shadow-xl p-3 flex flex-col gap-3">
        <h1 className="text-4xl text-center font-semibold">About</h1>
        <div className="w-max flex flex-col">
          <img src={aboutImg} className="w-40 h-40" alt="Image" />
          <h1 className="text-xl font-semibold text-center">Sanjay NG</h1>
        </div>
        <ul className="list-disc w-max mx-5">
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://github.com/Sanjayng125"
              target="_blank"
            >
              Git-Hub <FaExternalLinkAlt />
            </a>
          </li>
          <li className="hover:underline hover:text-pink-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://www.instagram.com/sanjay_ng_125/"
              target="_blank"
            >
              Instagram <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
        <p>
          <span className="font-semibold">Im a Student.</span> <br /> * Learning
          Pyhton <br /> * Working on MERN Projects <br />
          <span className="font-semibold">
            This is a simple News App Bulit using React Js and{" "}
            <a
              style={{
                color: "blue",
              }}
              href="https://newsapi.org/"
              target="_blank"
            >
              News Api{" "}
            </a>{" "}
            .If you liked it give it a star ⭐{" "}
            <a
              style={{
                color: "blue",
              }}
              href="https://github.com/Sanjayng125/News-App-React-Js"
              target="_blank"
            >
              here
            </a>
            . Thank you.
          </span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          necessitatibus dolore incidunt. Minima adipisci recusandae voluptatum
          suscipit, et iure! Eum praesentium quas incidunt! Tenetur quisquam quo
          libero veritatis nobis quam.
        </p>
      </div>
    </div>
  );
};

export default About;
