"use client";
import Image from "next/image"; // Importing Image component from Next.js
import Marketing from "./elements/Marketing"; // Importing Marketing component from local file
import HeroPageDetails from "./elements/HeroPageDetails";
import Search from "./elements/Search";

// // SearchBar Imports
import React, { useState } from "react";
// import { useRouter } from "next/router";
import Sidebar from "./elements/Sidebar";
import WeightManagement from "./component/WeightManagement/page"; // Assuming these are component imports
import Orders from "./component/Orders/page";
import BuddyShield from "./component/BuddyShield/page";
import KnowledgeBase from "./component/KnowledgeBase/page";
import BillingPlans from "./component/BillingPlans/page";
import Tools from "./component/ShypbuddyTools/Page";
import SearchResult from "./elements/SearchResult";
import Shipment from "./component/Shipment/page";
import Website from "./component/WebsiteFaQ/page";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [activeComponent, setActiveComponent] = useState<string | null>("Website");
  const [clearSearchBar, setClearSearchBar] = useState<boolean>(false); // Corrected type to boolean

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (results: React.SetStateAction<never[]>) => {
    setSearchResults(results);
  };

  const handleComponentChange = (component: any) => {
    setActiveComponent(component);
  };

  const clearSearch = () => {
    setSearchResults([]);
    // console.log("line 41");
    setClearSearchBar(true);
    // console.log("setClearSearchBar : " + setClearSearchBar); // Reset clearSearchBar state for Search component
  };

  const handleSearchClick = () => {
    setActiveComponent(null);
    // Set search bar as active when search button is clicked
    clearSearch(); // Clear search results
  };

  return (
    <div className="bg-gray-100 text-gray-600 w-screen h-screen overflow-y-auto overflow-x-hidden">
      <main className="h-full w-full bg-stone-100">
        <div>
          <div className="rounded-b-md bg-[#5a38fa] mx-5 md:mx-10 my-5 h-1/4 rounded-lg">
            <HeroPageDetails />
            <div className="pb-10">
              <Marketing />
              {/* <Search setSearchResults={setSearchResults} /> */}
              <Search
                setSearchResults={setSearchResults}
                searchClearOrNot={clearSearchBar}
                setClearSearchBar={setClearSearchBar}
                setActiveComponent={setActiveComponent}
              />
            </div>
          </div>

          {/* Search Results or Active Component */}
          <div className="mt-5 md:mt-5 lg:mt-5 ">
            <div className="bg-stone-100 ">
              <div className="py-5 md:px-5 overflow-hidden">
                <div className="w-full mx-auto px-5 gap-4 flex flex-col md:flex-row rounded-lg  ">
                  <Sidebar
                    onComponentChange={handleComponentChange}
                    clearSearch={clearSearch}
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                  />

                  <div className="flex-1 h-full md:h-full max-w-[120rem] shadow-lg bg-white overflow-auto rounded-md px-6 md:px-6 py-5">
                    {/* Conditionally render search results or other components */}
                    {searchResults.length > 0 ? (
                      // Render SearchResult component if searchResults exist
                      <SearchResult results={searchResults} />
                    ) : (
                      // Render based on activeComponent if searchResults are empty
                      <>
                        {/* Render SearchResult if activeComponent is none of the specified values */}
                        {activeComponent !== "WeightManagement" &&
                        activeComponent !== "Tools" &&
                        activeComponent !== "KnowledgeBase" &&
                        activeComponent !== "BillingPlans" &&
                        activeComponent !== "BuddyShield" &&
                        activeComponent !== "Orders" &&
                        activeComponent !== "Shipment" &&
                        activeComponent !== "Website" ? (
                          <SearchResult results={searchResults} />
                        ) : null}
                        {/* Render components based on activeComponent */}
                        {activeComponent === "WeightManagement" && (
                          <WeightManagement />
                        )}
                        {activeComponent === "Tools" && <Tools />}
                        {activeComponent === "KnowledgeBase" && (
                          <KnowledgeBase />
                        )}
                        {activeComponent === "BillingPlans" && <BillingPlans />}
                        {activeComponent === "BuddyShield" && <BuddyShield />}
                        {activeComponent === "Orders" && <Orders />}
                        {activeComponent === "Shipment" && <Shipment />}
                        {activeComponent === "Website" && <Website />}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
