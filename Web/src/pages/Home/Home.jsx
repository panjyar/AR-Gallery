import React from "react";

const Home = () => {
  return (
    <div className="max-w-0.5">
      <div className="relative flex flex-col text-gray-700 bg-red-400 shadow-md bg-clip-border rounded-3xl w-96">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-2xl h-80">
          <img
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Natalie Paisley
          </h4>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 ">
            CEO / Co-Founder
          </p>
        </div>
        <div className="flex justify-center p-6 pt-2 gap-7">
          <a
            href="#facebook"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div className="flex justify-between p-6">
          <button className="flex-grow bg-red-500 text-white px-4 py-2 rounded-md mr-4">
            Love
          </button>
          <button className="flex-grow bg-blue-500 text-white px-4 py-2 rounded-md mr-4">
            Message
          </button>
          <button className="flex-grow bg-green-500 text-white px-4 py-2 rounded-md">
            Profile View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
