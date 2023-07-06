import AsideBar from "../../components/Aside";
import Head from "next/head";
import SearchInput from "../../components/SearchInput";
import Advertise from "../../components/Advertise";
import MovieCard from "../../components/MovieCard"; 

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from "next/link";
import ControlTop from "../../components/ControlTop";

const profile = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const cinemaMovie = [];
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
            leftLink="/profile"
            right="About"
            righLinkt="/profile/about"
          />
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
            <div>
              <div>
                <h1 className="mb-5 text-xl dark:text-white font-thin md:text-2xl">
                  Showing now
                </h1>

                {cinemaMovie.length > 0 ? (
                  <>
                    <SearchInput />

                    <Swiper
                      pagination={cinemaMovie.length > 1 && pagination}
                      spaceBetween={20}
                      modules={[Pagination]}
                      className={
                        "movie-swiper " + cinemaMovie.length > 1 && "!pb-12"
                      }
                    >
                      {cinemaMovie.map((item) => (
                        <SwiperSlide key={item.id}>
                          <MovieCard
                            id={item.id}
                            releaseDate={item?.release_date}
                            starring={item?.starring}
                            title={item?.name}
                            img={item?.image}
                            features={item?.featuer}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                ) : (
                  <div className="flex-1 p-4 rounded-2xl custom-box">
                    <Link
                      href="profile/add-movie"
                      className="flex items-center justify-center w-full h-64 text-2xl font-thin"
                    >
                      click here to add movie
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <h1 className="mb-5 text-xl dark:text-white font-thin mt-5 md:text-2xl">
                  Coming soon
                </h1>
                {cinemaMovie.length > 0 ? (
                  <>
                    <SearchInput />

                    <Swiper
                      pagination={cinemaMovie.length > 1 && pagination}
                      spaceBetween={20}
                      modules={[Pagination]}
                      className={
                        "movie-swiper " + cinemaMovie.length > 1 && "!pb-12"
                      }
                    >
                      {cinemaMovie.map((item) => (
                        <SwiperSlide key={item.id}>
                          <MovieCard
                            id={item.id}
                            releaseDate={item?.release_date}
                            starring={item?.starring}
                            title={item?.name}
                            img={item?.image}
                            features={item?.featuer}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                ) : (
                  <div className="flex-1 p-4 rounded-2xl custom-box">
                    <Link
                      href="profile/add-movie"
                      className="flex items-center justify-center w-full h-64 text-2xl font-thin"
                    >
                      click here to add movie
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <Advertise />
          </div>
        </section>
      </main>
    </>
  );
};

export default profile;
