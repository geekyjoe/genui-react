import React from "react";
import {
  Home,
  Settings,
  Users,
} from "lucide-react";
import { CgSidebarOpen, CgSidebarRight } from "react-icons/cg"
import Tooltip from "../ui/Tooltip";

const Sidebar = ({ isOpen, toggleSidebar, isDarkMode }) => {
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Users, label: "Users", href: "/" },
    { icon: Settings, label: "Settings", href: "/" },
  ];

  return (
    <div
      className={`
      fixed w-64 left-0 top-0 bottom-0 z-50 transform transition-transform duration-300
      shadow-inner ease-in-out border-r dark:border-neutral-800
      ${!isOpen ? "translate-x-0" : "-translate-x-full"}
      bg-zinc-200 dark:bg-neutral-900 h-full z-40
    `}
    >
      <div className="p-2 border-b dark:border-neutral-700">
        <Tooltip content="Toggle Sidebar" placement="right">
          <button
            onClick={toggleSidebar}
            className={`hover:bg-gray-100 dark:hover:bg-zinc-700 p-2 rounded-full`}
          >
            <CgSidebarRight size={24} />
          </button>
        </Tooltip>
      </div>

      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <Tooltip
            key={index}
            content={item.label}
            placement="right"
            disabled={isOpen}
          >
            <a
              href={item.href}
              className={`
                flex items-center p-4 
                ${
                  isDarkMode
                    ? "hover:bg-zinc-700 text-gray-300 hover:text-white"
                    : "hover:bg-gray-100 text-gray-800 hover:text-blue-600"
                }
              `}
            >
              <item.icon
                size={24}
                className={`
                  ${
                    isDarkMode
                      ? "text-gray-400 group-hover:text-white"
                      : "text-gray-600 group-hover:text-blue-600"
                  }
                `}
              />
              {!isOpen && <span className="ml-4">{item.label}</span>}
            </a>
          </Tooltip>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
