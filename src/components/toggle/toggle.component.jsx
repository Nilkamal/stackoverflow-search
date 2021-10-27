import React, { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { keepTheme, setTheme } from "../../utils/themes";
const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "theme-dark"
  );
  useEffect(() => {
    keepTheme();
  }, []);

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  return (
    <DarkModeToggle onChange={handleOnClick} checked={isDarkMode} size={80} />
  );
};

export default Toggle;
