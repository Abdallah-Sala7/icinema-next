import Image from "next/image";
import Link from "next/link";
import React from "react";
import { editIcon, searchIcon } from "../assets";

const SearchInput = () => {
  return (
    <div className="mb-5">
      <form className="">
        <div className="flex items-stretch justify-between gap-3">
          <div className="relative flex-1">
            <input
              type="search"
              className="py-2 pl-4 pr-12 input-style"
              placeholder="Search here"
            />

            <a href="#" className="absolute top-1/2 right-3 -translate-y-1/2">
              <Image
                src={searchIcon}
                alt="edit icon"
                className="w-5 h-5 object-contain invert sm:w-6 sm:h-6 dark:invert-0"
              />
            </a>
          </div>

          <Link
            href="profile/add-movie"
            className="p-3 rounded-lg custom-box transition-all duration-200 hover:border-primary group"
          >
            <Image
              src={editIcon}
              alt="edit icon"
              className="w-5 h-5 object-contain invert dark:invert-0 transition-all duration-200 group-hover:primary-filter group-hover:opacity-75"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
