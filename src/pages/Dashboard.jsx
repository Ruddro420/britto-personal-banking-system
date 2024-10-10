import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import BottomNav from "../component/BottomNav";
import TopNav from "../component/TopNav";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme === "true" || (savedTheme === null && userPrefersDark);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const handleThemeToggle = (isChecked) => {
    setIsDarkMode(isChecked);
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "dark:bg-gray-900" : "bg-white"}`}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <TopNav handleThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
      <Outlet context={{ isDarkMode, handleThemeToggle }} />
      <BottomNav />
    </div>
  );
};

export default Dashboard;
