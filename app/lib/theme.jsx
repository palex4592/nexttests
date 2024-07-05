"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

const lightTheme = {
  body: "#FFFFFF",
  bodyArea: "#FFFFFF",
  text: "#000000",
  textArea: "#000000",
  inputText: "#333333",
  borderColor: "#000000",
};

const darkTheme = {
  body: "#000000",
  bodyArea: "#FFFFFF",
  text: "#FFFFFF",
  textArea: "#000000",
  inputText: "#CCCCCC",
  borderColor: "#FFFFFF",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
