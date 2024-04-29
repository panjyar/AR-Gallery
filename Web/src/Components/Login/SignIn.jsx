import React from "react";
import { Link } from "react-router-dom";
import placeholder from "/src/assets/login-page-img.svg"

const SignIn = () => {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="size-full"
            src={placeholder}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="/home" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  className="block border border-t-2 border-x border-t-emerald-500  w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    <Link to = "/signup"> Forgot password? </Link>
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  className="block border-t-2 border-x border-t-emerald-500  w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               <Link to ="/home"> Sign in </Link>
              </button>
            </div>
          </form>

    
        </div>
      </div>
    </div>
  );
};

export default SignIn;
