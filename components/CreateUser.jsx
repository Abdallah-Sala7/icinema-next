'use client'

import { useState } from "react";
import { editIcon, editUserIcon } from "../assets";
import Image from "next/image";

function CreateUser(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex mb-5 flex-wrap gap-4">
      <Image
        src={props.img}
        alt="desciption"
        className="w-56 h-40 rounded-xl object-cover"
      />

      <div className="w-160 flex-auto">
        <h1 className="text-lg font-bold dark:text-white mb-3">{props.name}</h1>
        <h2 className="mb-5 dark:text-white">{props.description}</h2>

        {isOpen ? (
          <div className="flex gap-3 flex-wrap">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Create user
              </label>

              <input
                type="email"
                id="email"
                className="text-sm !rounded-lg h-10 p-2.5 input-style"
                placeholder="user name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Create password
              </label>
              <input
                type="password"
                id="password"
                placeholder="passowrd"
                className="text-sm !rounded-lg h-10 p-2.5 input-style"
                required
              />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="border border-primary transition duration-300 text-primary rounded-md hover:text-dark hover:bg-primary text-lg font-thin w-40 h-10 mt-7"
            >
              Save
            </button>
          </div>
        ) : (
          <>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
            >
              user
            </label>
            <div className="flex gap-3 items-stretch">
              <div className="relative w-fit">
                <input
                  type="email"
                  id="email"
                  className="text-sm !rounded-lg h-10 p-2.5  input-style"
                  placeholder="@email"
                  disabled
                  value={props.value}
                />

                <button
                  onClick={() => setIsOpen(true)}
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <Image
                    src={editUserIcon}
                    className="w-5 h-5 object-contain"
                    alt="#"
                  />
                </button>
              </div>

              <button
                className="w-10 h-10 flex items-center justify-center rounded-xl custom-box transition-all duration-200 hover:border-primary group"
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src={editIcon}
                  alt="edit icon"
                  className="w-5 h-5 object-contain invert dark:invert-0 transition-all duration-200 group-hover:primary-filter group-hover:opacity-75"
                />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CreateUser;
