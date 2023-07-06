import Head from "next/head";
import {
  adminBokingImg,
  adminOwnerImg,
  adminProfileImg,
  adminTimelineImg,
} from "../assets";
import ControlTop from "../components/ControlTop";
import CreateUser from "../components/CreateUser";
import AsideBar from "../components/Aside";

function Admin() {
  return (
    <>
      <Head>
        <title>Icinema | Admin</title>
        <meta
          name="description"
          content="join us to control your cinema account and follow everything related to it"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-lightGray dark:bg-darkGray">
        <AsideBar />

        <section className="p-2 min-h-screen sm:p-4 lg:px-6 lg:py-4 lg:ml-64">
          <ControlTop entry="user" />

          <h1 className="my-5 font-thin text-dark dark:text-white sm:text-xl">
            You have several admins to control your system perfectly:
          </h1>

          <CreateUser
            name="Owner"
            img={adminOwnerImg}
            value={"@mianadmin"}
            description="can control and view all the system content, and it's impossible for all sub admins"
          />

          <CreateUser
            img={adminProfileImg}
            name="Cinema Profile"
            description="Can set location, add movies, photos of halls, place screen and seats of the cinema"
          />

          <CreateUser
            img={adminBokingImg}
            name="Booking"
            description="Can see movies, so he can book tickets offline for clients and save booking details"
          />

          <CreateUser
            img={adminTimelineImg}
            name="Timeline"
            description="Can add profile picture, add posts and reels , see clients interactions on the posts and reels"
          />
        </section>
      </main>
    </>
  );
}

export default Admin;
