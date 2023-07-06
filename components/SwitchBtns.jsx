'use client'

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";

export default function SwitchBtns() {
  const currentPath = usePathname();
  return (
    <div className="flex justify-center gap-1 mb-7 top-32 left-0 overflow-x-clip lg:mb-0 lg:flex-col lg:-translate-x-full lg:absolute">
      <Link
        href={"/auth"}
        className={`relative block w-32 py-2.5 font-light text-center rounded-lg
          lg:rounded-l-full lg:mb-5
          
          ${
            currentPath === "/auth"
              ? "lg:activeBtn bg-primary text-dark"
              : "text-primary"
          }`}
      >
        Sign in
      </Link>

      <Link
        href={"/auth/register"}
        className={`relative block w-32 py-2.5 font-light text-center rounded-lg
          lg:rounded-l-full lg:mb-5
          
          ${
            currentPath === "/auth/register"
              ? "lg:activeBtn bg-primary text-dark"
              : "text-primary"
          }`}
      >
        Sign up
      </Link>
    </div>
  );
}
