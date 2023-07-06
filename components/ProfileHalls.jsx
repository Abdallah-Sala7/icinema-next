import React, { useState } from "react";
import { editIcon } from "../assets";
import AddHall from "./AddHall";
import { hallOneChairs, hallTowChairs } from "../data/hallsData";
import HallChairs from "./HallChairs";
import Image from "next/image";

const ProfileHalls = () => {
  const [activeTab, setActiveTab] = useState("hall 1");
  const [cinemaHalls, setCinemaHalls] = useState([
    hallOneChairs,
    hallTowChairs,
  ]);

  const getActiveHall = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center flex-1 gap-2 rounded-xl py-1 px-2 sm:py-2 sm:px-4 shadow-md dark:shadow-darkShadow overflow-auto bg-white dark:bg-dark">
          {cinemaHalls.map((hall, index) => (
            <button
              className={`px-6 py-1 font-light rounded-lg border border-primary whitespace-nowrap transition-colors md:px-12 ${
                activeTab === hall.hallName
                  ? "bg-primary text-dark"
                  : "text-primary"
              }`}
              key={index}
              onClick={() => setActiveTab(hall.hallName)}
            >
              {hall.hallName}
            </button>
          ))}
        </div>

        <button
          className={`p-3 rounded-xl shadow-md dark:shadow-darkShadow bg-white dark:bg-dark ${
            activeTab === "add" && "bg-primary dark:bg-primary"
          }`}
          onClick={() => setActiveTab("add")}
        >
          <Image
            src={editIcon}
            alt="edit icon"
            width={20}
            height={20}
            className={`w-5 h-5 object-contain sm:w-6 sm:h-6 ${
              activeTab === "add" && "invert"
            }`}
          />
        </button>
      </div>

      {activeTab === "add" ? (
        <AddHall newHallAdded={getActiveHall} />
      ) : (
        <>
          {cinemaHalls.map(
            (hall, index) =>
              hall.hallName === activeTab && (
                <HallChairs key={index} hallInChairs={hall.seats} />
              )
          )}
        </>
      )}
    </>
  );
};

export default ProfileHalls;
