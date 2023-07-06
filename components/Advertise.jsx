"use client";

import React, { useState } from "react";
import { editIcon } from "../assets";
import Image from "next/image";

const Advertise = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <h1 className="mb-5 text-3xl dark:text-white font-thin">Advertise</h1>

      <div className="flex gap-4 mb-4">
        <div className="flex items-center flex-1 gap-2 rounded-xl py-1 px-2 custom-box sm:py-2 sm:px-4 overflow-auto">
          <button
            className={`px-10 py-1 font-light rounded-lg border border-primary transition-colors md:px-12 ${
              activeTab === "tab1" ? "bg-primary text-dark" : "text-primary"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Ad1
          </button>

          <button
            className={`px-10 py-1 font-light rounded-lg border border-primary transition-colors md:px-12 ${
              activeTab === "tab2" ? "bg-primary text-dark" : "text-primary"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Ad2
          </button>

          <button
            className={`px-10 py-1 font-light rounded-lg border border-primary transition-colors md:px-12 ${
              activeTab === "tab3" ? "bg-primary text-dark" : "text-primary"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            Ad3
          </button>
        </div>

        <a
          href="#"
          className="p-3 flex items-center justify-center rounded-xl custom-box transition-all duration-200 hover:border-primary group"
        >
          <Image
            src={editIcon}
            alt="edit icon"
            className="w-5 h-5 object-contain invert dark:invert-0 transition-all duration-200 group-hover:primary-filter group-hover:opacity-75 sm:w-6 sm:h-6"
          />
        </a>
      </div>

      <div className="w-full p-4 rounded-2xl custom-box">
        <div className="w-full aspect-square mb-4 rounded-xl border border-primary overflow-hidden">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTU1ZjgzMTAtNGJhNC00NjE5LWI0Y2QtZmQxYmMxNzNiY2VhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
            alt="shalaby"
            loading="lazy"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <p className="text-center py-3 px-4 custom-box rounded-xl">
          Galaxy cinema added 9D experience, try it to enjoy more
        </p>
      </div>
    </div>
  );
};

export default Advertise;
