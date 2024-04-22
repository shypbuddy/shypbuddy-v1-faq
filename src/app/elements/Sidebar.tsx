import React, { useState, useEffect } from "react";
import {
  FaChartLine,
  FaClipboardList,
  FaWeightHanging,
  FaCreditCard,
  FaTruckMoving,
  FaTools,
  FaBook,
  FaShieldAlt,
} from "react-icons/fa";

// Sidebar component function taking onComponentChange as a prop
export default function Sidebar({
  onComponentChange,
  clearSearch,
  activeComponent,
  setActiveComponent,
}:{onComponentChange : any,
  clearSearch : any,
  activeComponent : any,
  setActiveComponent  :  any}) {
  // export default function Sidebar({ onComponentChange }) {
  // Array of sidebar links with text, icon, and optional component information

  const links = [
    {
      text: "Getting started",
      icon: <FaChartLine size={20} />,
      component: "Website",
    },
    {
      text: "Orders",
      icon: <FaClipboardList size={20} />,
      component: "Orders",
    },
    {
      text: "Weight Management",
      icon: <FaWeightHanging size={20} />,
      component: "WeightManagement",
    },
    {
      text: "Billing & Recharge",
      icon: <FaCreditCard size={20} />,
      component: "BillingPlans",
    },
    {
      text: "Shipment",
      icon: <FaTruckMoving size={20} />,
      component: "Shipment",
    },
    { text: "Tools", icon: <FaTools size={20} />, component: "Tools" },
    {
      text: "BUDDYSHIELD",
      icon: <FaShieldAlt size={20} />,
      component: "BuddyShield",
    },
    {
      text: "Knowledge Base",
      icon: <FaBook size={20} />,
      component: "KnowledgeBase",
    },
  ];

  // Function to handle click on sidebar links
  const handleLinkClick = (component: React.SetStateAction<string>) => {
    onComponentChange(component);
    setActiveComponent(component); // Calling the onComponentChange function passed as prop with the selected component
    // console.log("line 54 ");
    clearSearch();
    // console.log("clear search result is working : " + clearSearch);
  };

  const handleSearchClick = () => {
    setActiveComponent(null);
    clearSearch(); // Clear search when search button is clicked
  };

  // Rendering sidebar with links
  return (
    <>
      <aside className="w-full md:w-64 rounded-md shadow-lg bg-white md:h-[445px] lg:w-80 py-4 border-r border-slate-200 overflow-x-auto md:overflow-hidden ">
        <div className="flex flex-row md:flex-col gap-2.5 md:gap-2 p-2">
          {links.map((link, index) => (
            // Mapping through the links array to render each link as a button
            <button
              key={index}
              className={`w-full sm:w-auto px-3 py-1 text-center px-auto hover:bg-indigo-50 hover:shadow-lg rounded-md sm:p-2 sm:mb-1 ${
                activeComponent === link.component ? "bg-indigo-50" : ""
              }`}
              onClick={() => handleLinkClick(link.component)} // Handling click event to change active component
            >
              <div className="flex flex-col md:flex-row mx-auto">
                <div className="mx-auto md:mx-2 lg:mx-2">
                  {link.icon} {/* Rendering icon */}
                </div>
                {link.text} {/* Rendering text */}
              </div>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
