import React from "react";
import ControlTop from "../../components/ControlTop";
import Head from "next/head";
import SelectOptions from "../../components/SelectOptions";
import { hall } from "../../data/selectData";
import BokingTable from "../../components/BokingTable";
import AsideBar from "../../components/Aside";

const ShowDays = () => {
  return (
    <>
      <Head>
        <title>Icinema | Profile</title>
        <meta
          name="description"
          content="join us to control your cinema account and follow everything related to it"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-lightGray dark:bg-darkGray">
        <AsideBar />

        <section className="p-2 min-h-screen sm:p-4 lg:px-6 lg:py-4 lg:ml-64">
          <ControlTop
            entry="movies_about"
            left="Movies"
            leftLink="/profile/show-days"
            right="About"
            righLinkt="/profile/about"
          />

          <div className="flex flex-wrap justify-between gap-3 mb-5">
            <div className="w-full sm:flex-1">
              <div className="mb-3">
                <label
                  htmlFor="pickDays"
                  className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
                >
                  Pick days
                </label>
                <input
                  type="date"
                  id="pickDays"
                  className="h-full py-2 px-3 input-style"
                  placeholder="Pick days"
                />
              </div>

              <div>
                <label
                  htmlFor="pickTimes"
                  className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
                >
                  Pick Times
                </label>
                <input
                  type="time"
                  id="pickTimes"
                  className="h-full py-2 px-3 input-style"
                  placeholder="Pick Times"
                />
              </div>
            </div>

            <div className="w-full sm:flex-1">
              <div className="mb-3">
                <label
                  htmlFor="premiumSeat"
                  className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
                >
                  Premium seat
                </label>
                <input
                  type="text"
                  id="premiumSeat"
                  className="h-full py-2 px-3 input-style"
                  placeholder="EGP"
                />
              </div>

              <div>
                <label
                  htmlFor="ordinarySeat"
                  className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
                >
                  Ordinary seat
                </label>
                <input
                  type="text"
                  id="ordinarySeat"
                  className="h-full py-2 px-3 input-style"
                  placeholder="EGP"
                />
              </div>
            </div>

            <div className="w-full md:flex-1 flex flex-col justify-between">
              <div className="mb-3 h-fit">
                <label
                  htmlFor="hall"
                  className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
                >
                  hall
                </label>
                <SelectOptions data={hall} />
              </div>

              <div>
                <button
                  onClick={() => setIsAdded(true)}
                  className="block text-center w-full font-thin capitalize h-10 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-xl hover:text-primary hover:bg-transparent"
                >
                  save
                </button>
              </div>
            </div>
          </div>

          <BokingTable />

          {/* <AddMovieSuccess /> */}
        </section>
      </main>
    </>
  );
};

export default ShowDays;
