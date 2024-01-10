"use client";
import { createContext, useContext, useState } from "react";

// CreateContexts is to shared between components without passing the state through each level of the component
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  // Update the search
  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <AppContext.Provider value={{ searchResults, updateSearchResults }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
