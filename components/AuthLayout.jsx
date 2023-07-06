import Image from "next/image";
import Logo from "./Logo";
import SwitchBtns from "./SwitchBtns";
import hero from "../assets/images/vector.svg";
import Head from "next/head";

export default function AuthLayout({ children }) {
  return (
    <>
      <Head>
        <title>login | register - icinema </title>
        <meta
          name="description"
          content="join us to control your cinema account and follow everything related to it"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-white dark:bg-dark">
          <div className="flex flex-auto">
            <div className="w-1/2 pl-16 pr-24 pt-16 hidden flex-col items-center lg:flex">
              <Logo />

              <p className="text-base text-center font-light mb-8 text-dark dark:text-white">
                Register to control your cinema account and follow everything
                related to it
              </p>

              <Image src={hero} alt="login" className="w-120 object-contain" />
            </div>

            <div className="w-full min-h-screen lg:w-1/2 lg:pl-28">
              <div className="relative min-h-full border-primary px-4 pt-16 pb-10 bg-lightGray dark:bg-darkGray md:px-16 lg:border-l-4">
                <SwitchBtns />

                {children}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
