import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

import AsideBar from "../../components/Aside";
import SelectOptions from "../../components/SelectOptions";

import { audienceData, genres, language } from "../../data/selectData";
import { uploadIcon } from "../../assets";
import ControlTop from "../../components/ControlTop";
import { useRouter } from "next/router";

const AddMovie = () => {
  const route = useRouter();
  const [load, setLoad] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      setPreviewImage(fileReader.result);
    });
    fileReader.readAsDataURL(file);
  };

  const handleSelectVideo = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      setTrailer(fileReader.result);
    });
    fileReader.readAsDataURL(file);
  };

  const handleAddMovie = () => {
    route.push("/profile/show-days");
  };
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
            leftLink="/profile/add-movie"
            right="About"
            righLinkt="/profile/about"
          />

          <h1 className="mb-5 text-2xl dark:text-white font-thin md:text-3xl">
            Add movie
          </h1>

          <div className="flex items-stretch gap-5 flex-wrap mb-5">
            <div className="w-full md:flex-1">
              <div className="mb-3">
                <label
                  htmlFor="movieName"
                  className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
                >
                  movie Name
                </label>
                <input
                  type="text"
                  id="movieName"
                  className="h-full py-2 px-3 input-style"
                  placeholder="Movie name"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="starringDate"
                  className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
                >
                  Starring
                </label>
                <input
                  type="text"
                  id="starringDate"
                  className="h-full py-2 px-3 input-style"
                  placeholder="Movie starring"
                />
              </div>

              <div className="mb-3 flex items-center gap-3">
                <div className="flex-1">
                  <label
                    htmlFor="genre"
                    className="inline-block mb-1 capitalize font-light text-dark text-lg dark:text-white"
                  >
                    Genre
                  </label>
                  <SelectOptions data={genres} />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="language"
                    className="inline-block mb-1 capitalize font-light text-dark text-lg dark:text-white"
                  >
                    Language
                  </label>
                  <SelectOptions data={language} />
                </div>
              </div>

              <div className="mb-3 flex items-center gap-3">
                <div className="flex-1">
                  <label
                    htmlFor="Duration"
                    className="inline-block mb-1 capitalize font-light text-dark text-lg dark:text-white"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    id="Duration"
                    className="h-full py-2 px-3 input-style"
                    placeholder="Duration"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="Audience"
                    className="inline-block mb-1 capitalize font-light text-dark text-lg dark:text-white"
                  >
                    Audience
                  </label>
                  <SelectOptions data={audienceData} />
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="releaseDate"
                  className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
                >
                  Release date
                </label>
                <input
                  type="date"
                  id="releaseDate"
                  className="h-full py-2 px-3 input-style"
                  placeholder="releaseDate"
                />
              </div>
            </div>

            <div className="w-full flex-1">
              <div className="flex items-stretch justify-between gap-5 mb-3 flex-wrap min-w-fit">
                <div className="flex-1">
                  <label
                    htmlFor="selectPoster"
                    className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white placeholder:text-white"
                  >
                    Poster
                  </label>
                  <div className="relative">
                    <label
                      htmlFor="selectPoster"
                      className="cursor-pointer flex flex-col py-8 px-4 text-center items-center gap-3 w-full rounded-lg border-2 border-primary border-dashed bg-white dark:bg-dark"
                    >
                      <Image
                        src={uploadIcon}
                        className="w-11 h-11 object-contain"
                        alt="upload icon"
                      />

                      <p className="text-zinc-500 text-sm whitespace-nowrap">
                        Drop poster here or
                      </p>

                      <p className="text-primary border-b border-primary">
                        browse
                      </p>
                    </label>

                    <input
                      type="file"
                      name="selectPoster"
                      id="selectPoster"
                      onChange={handleSelectImage}
                      className="hidden"
                    />

                    {previewImage && (
                      <div className="absolute inset-0 bg-dark rounded-lg border-2 border-primary border-dashed">
                        <Image
                          src={previewImage}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="selectTrialer"
                    className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white placeholder:text-white"
                  >
                    Trailer
                  </label>
                  <div className="relative">
                    <label
                      htmlFor="selectTrialer"
                      className="cursor-pointer flex flex-col py-8 px-4 text-center items-center gap-3 w-full rounded-lg border-2 border-primary border-dashed bg-white dark:bg-dark"
                    >
                      <Image
                        src={uploadIcon}
                        className="w-11 h-11 object-contain"
                        alt="upload icon"
                      />

                      <p className="text-zinc-500 text-sm whitespace-nowrap">
                        Drop video here or
                      </p>

                      <p className="text-primary border-b border-primary">
                        browse
                      </p>
                    </label>

                    <input
                      type="file"
                      name="selectTrialer"
                      id="selectTrialer"
                      onChange={handleSelectVideo}
                      className="hidden"
                    />

                    {trailer && (
                      <div className="absolute inset-0 bg-dark rounded-lg border-2 border-primary border-dashed">
                        <video
                          width="750"
                          height="500"
                          controls
                          className="w-full h-full object-contain"
                        >
                          <source src={trailer} type="video/mp4" />
                        </video>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="Brief"
                  className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
                >
                  Brief
                </label>
                <textarea
                  name="Brief"
                  id="Brief"
                  onChange={(e) => setBrief(e.target.value)}
                  cols="20"
                  rows="10"
                  placeholder="Brief......"
                  className="h-48 py-2 pl-4 input-style resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddMovie}
            className={`ml-auto text-xl font-thin capitalize block w-fit py-2 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-md hover:text-primary hover:bg-transparent ${
              load && "pointer-events-none"
            }`}
          >
            {load ? "Loading..." : "next"}
          </button>
        </section>
      </main>
    </>
  );
};

export default AddMovie;
