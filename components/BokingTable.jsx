import React from "react";
import {
  statusCancleIcon,
  statusNotstartIcon,
  statusStartIcon,
} from "../assets";
import Image from "next/image";

const BokingTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left font-light text-dark dark:text-lightGray">
        <thead className="text-xs uppercase bg-white text-dark border-b dark:border-darkGray dark:bg-dark dark:text-lightGray">
          <tr>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              Client
            </th>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              Movie
            </th>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              Day
            </th>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              Time
            </th>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              Hall
            </th>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              Seats
            </th>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              Payment
            </th>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              Booked at
            </th>
            <th
              scope="col"
              className="px-6 py-3  border-r dark:border-darkGray"
            >
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white border-b dark:bg-dark dark:border-darkGray">
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              1
            </td>
            <td className="px-5 py-3 whitespace-nowrap border-r dark:border-darkGray dark:text-white">
              <p>abdallah</p>
              <p>01025077437</p>
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              Avatar
            </td>

            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              We 08 Mar
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white ">
              10:00 PM
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              hall 1
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              B 05, B 06, B 07, B 08{" "}
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              Credit card
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              Tu 07 Mar 12:15 PM
            </td>
            <td className="flex py-3 items-center justify-center dark:text-white">
              <Image
                src={statusNotstartIcon}
                alt="not start"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-dark dark:border-darkGray">
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              2
            </td>
            <td className="px-5 py-3 border-r whitespace-nowrap dark:border-darkGray dark:text-white">
              <p>ali</p>
              <p>0102589654</p>
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              Black Adam
            </td>

            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              We 08 Mar
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white ">
              10:00 PM
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              hall 2
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              B 05, B 06, B 07, B 08{" "}
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              Credit card
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              Tu 07 Mar 12:15 PM
            </td>
            <td className="flex py-3 items-center justify-center dark:text-white">
              <Image
                src={statusStartIcon}
                alt="not start"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-dark dark:border-darkGray">
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              2
            </td>
            <td className="px-5 py-3 whitespace-nowrap border-r dark:border-darkGray dark:text-white">
              <p>Mona Ahmed</p>
              <p>01011203040</p>
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              Black Adam
            </td>

            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              We 08 Mar
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white ">
              10:00 PM
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              hall 2
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              B 05, B 06, B 07, B 08{" "}
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              Credit card
            </td>
            <td className="px-5 py-3 border-r dark:border-darkGray dark:text-white">
              Tu 07 Mar 12:15 PM
            </td>
            <td className="flex py-3 items-center justify-center dark:text-white">
              <Image
                src={statusCancleIcon}
                alt="not start"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BokingTable;
