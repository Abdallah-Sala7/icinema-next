import React, { useState } from "react";
import { chairIcon } from "../assets";
import Image from "next/image";

const HallChairs = ({ hallInChairs, clicked }) => {
  const [selectedChair, setSelectedChairs] = useState([]);

  const handleSelect = (chair) => {
    if (clicked && chair.status !== "booked") {
      clicked(chair);

      selectedChair.includes(chair)
        ? setSelectedChairs(selectedChair.filter((item) => item !== chair))
        : setSelectedChairs([...selectedChair, chair]);
    }
  };
  return (
    <div className="flex-1 flex justify-center relative rounded-xl p-3 bg-white shadow-md dark:shadow-darkShadow dark:bg-dark md:p-5">
      <div className="overflow-auto">
        {hallInChairs.map((row, index) => (
          <div key={index} className="flex gap-2 mb-3 last-of-type:mb-0">
            {row.map((chair, index) => (
              <button
                key={index}
                className={`w-6 h-6 flex-shrink-0 flex ${
                  chair.status === "empty"
                    ? "invisible"
                    : selectedChair.includes(chair)
                    ? "selected-chair"
                    : "visible"
                }`}
                onClick={() => handleSelect(chair)}
              >
                <Image
                  src={chairIcon}
                  alt="chair"
                  className={`w-full h-full object-contain ${
                    chair.status === "available"
                      ? "dark:invert"
                      : chair.status === "booked"
                      ? "gray-filter"
                      : chair.status === "vip"
                      ? "primary-filter"
                      : chair.status === "empty"
                      ? "dark:invert"
                      : ""
                  }`}
                />
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallChairs;
