import React from "react";
import {
  locationInputIcon,
  mailIcon,
  nameIcon,
  phoneiconIcon,
  profileImg,
} from "../../assets";
import ProfileHalls from "../../components/ProfileHalls";
import Image from "next/image";
import Head from "next/head";
import AsideBar from "../../components/Aside";

const ProfileAbout = () => {
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
          <div className="flex items-center justify-center flex-wrap gap-5 mb-8">
            <div className="relative w-36 h-36 rounded-full overflow-hidden md:w-44 md:h-44">
              <Image
                src={profileImg}
                alt="porf"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-72 flex-auto">
              <label
                htmlFor="cinemaName"
                className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
              >
                Cinema name
              </label>
              <div className="relative mb-5">
                <input
                  type="text"
                  id="cinemaName"
                  defaultValue="galaxy cinema"
                  className="h-full py-3 pl-4 input-style"
                  placeholder="Cinema name"
                />

                <a
                  href="#"
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <Image
                    src={nameIcon}
                    alt="edit icon"
                    className="w-5 h-5 object-contain sm:w-6 sm:h-6 invert dark:invert-0"
                  />
                </a>
              </div>

              <label
                htmlFor="email"
                className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
              >
                E-mail
              </label>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  defaultValue="galaxy@gmail.com"
                  className="h-full py-3 pl-4 input-style"
                  placeholder="E-mail"
                />

                <a
                  href="#"
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <Image
                    src={mailIcon}
                    alt="edit icon"
                    className="w-5 h-5 object-contain sm:w-6 sm:h-6 invert dark:invert-0"
                  />
                </a>
              </div>
            </div>

            <div className="w-72 flex-auto">
              <label
                htmlFor="Location"
                className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
              >
                Location
              </label>
              <div className="relative mb-5">
                <input
                  type="text"
                  id="Location"
                  defaultValue="mansoura"
                  className="h-full py-3 pl-4 input-style"
                  placeholder="Location"
                />

                <a
                  href="#"
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <Image
                    src={locationInputIcon}
                    alt="edit icon"
                    className="w-5 h-5 object-contain sm:w-6 sm:h-6 invert dark:invert-0"
                  />
                </a>
              </div>

              <label
                htmlFor="PhoneNumber"
                className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
              >
                Phone number
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="PhoneNumber"
                  defaultValue="01025077437"
                  className="h-full py-3 pl-4 input-style"
                  placeholder="Phone number"
                />

                <a
                  href="#"
                  className="absolute top-1/2 right-3 -translate-y-1/2"
                >
                  <Image
                    src={phoneiconIcon}
                    alt="edit icon"
                    className="w-5 h-5 object-contain sm:w-6 sm:h-6 invert dark:invert-0"
                  />
                </a>
              </div>
            </div>
          </div>

          <ProfileHalls />
        </section>
      </main>
    </>
  );
};

export default ProfileAbout;
