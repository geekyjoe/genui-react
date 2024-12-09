"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { CgSidebar } from "react-icons/cg";
import Sidebar from "./components/Sidebar";
import Tooltip from "./ui/Tooltip";

const Header = ({ isDarkMode, isOpen, toggleSidebar, toggleDarkMode }) => {
  return (
    <header className="shadow-sm py-2 px-2 flex justify-between items-center">
      <Tooltip
        content="Toggle Sidebar"
        placement="bottom"
        isDarkMode={isDarkMode}
      >
        <button
          onClick={toggleSidebar}
          className={`hover:bg-gray-100 dark:hover:bg-zinc-700 p-2 rounded-full`}
        >
          {isOpen && <CgSidebar size={24} />}
        </button>
      </Tooltip>
      <div className="text-xl font-semibold">Dashboard</div>
        <Tooltip
          content={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          isDarkMode={isDarkMode}
        >
          <button
            onClick={toggleDarkMode}
            className={`
              p-2 rounded-full 
              ${
                isDarkMode
                  ? "bg-zinc-700 text-yellow-400 hover:bg-zinc-600"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }
            `}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </Tooltip>
    </header>
  );
};

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved preference or system preference on initial load
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    } else {
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  // Update dark mode and save preference
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`
      flex h-screen 
      ${
        isDarkMode
          ? "dark bg-zinc-900 text-gray-200"
          : "bg-gray-100 text-gray-800"
      }
    `}
    >
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
      />

      <main
        className={`
        flex-1 overflow-y-auto transition-all duration-300 
        ${!sidebarOpen ? "ml-64" : "ml-0"}
      `}
      >
        <Header
          isOpen={sidebarOpen}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
        />
        <div
          className={`
          p-6 
          ${isDarkMode ? "bg-zinc-900 text-gray-200" : "bg-gray-100"}
        `}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
