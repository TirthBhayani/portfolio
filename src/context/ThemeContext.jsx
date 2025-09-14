import { useState, useEffect } from "react";

// Move this to a new file named ThemeContext.js

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Persist theme in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme) setDarkMode(storedTheme === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
