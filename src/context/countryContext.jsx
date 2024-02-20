import React, { createContext, useContext, useState } from "react";

const CountryContext = createContext();
const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState("in");

  return (
    <CountryContext.Provider value={[country, setCountry]}>
      {children}
    </CountryContext.Provider>
  );
};

const useCountry = () => useContext(CountryContext);
export { useCountry, CountryProvider };
