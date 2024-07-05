"use client";
import { useTheme } from "../lib/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === "dark" ? (
        <FontAwesomeIcon icon={faSun} size="2x" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="2x" />
      )}
      <style jsx>{`
        .theme-toggle-button {
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
