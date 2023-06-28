import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJs] = useState("");
  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCSS,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
