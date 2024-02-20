import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { CountryProvider } from "./context/countryContext";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Technology from "./pages/Technology";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Business from "./pages/Business";
import About from "./pages/About";
import Search from "./pages/Search";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CountryProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health" element={<Health />} />
            <Route path="/science" element={<Science />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/business" element={<Business />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </CountryProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
