import React from "react";
import AuthLayout from "../../components/AuthLayout";
import CustomBtn from "../../components/CustomBtn";

const Login = () => {
  return (
    <AuthLayout>
      <div className="md:w-120 lg:w-auto mx-auto">
        <p className="hidden text-dark font-light text-2xl text-center mb-7 dark:text-white lg:block">
          Welcome back !
        </p>

        <form>
          <div className="mb-2 md:mb-4">
            <label
              htmlFor="email"
              className="inline-block mb-1 font-light text-base text-dark dark:text-white md:mb-2"
            >
              E-mail
            </label>

            <input
              type="email"
              id="email"
              className="w-full bg-gray-50 border border-primary py-3 pr-10 pl-2 font-light text-dark text-sm rounded-lg !outline-none dark:bg-dark dark:text-white"
              placeholder="galaxycinema@gmail.com"
              required
            />
          </div>

          <div className="mb-2 md:mb-4">
            <label
              htmlFor="password"
              className="inline-block mb-1 font-light text-base text-dark dark:text-white md:mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              className="w-full bg-gray-50 border border-primary py-3 pr-10 pl-2 font-light text-dark text-sm rounded-lg !outline-none dark:bg-dark dark:text-white"
              placeholder="Enter password here!"
              required
            />
          </div>

          <div className="flex justify-center mt-7">
            <CustomBtn>Sign in</CustomBtn>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
