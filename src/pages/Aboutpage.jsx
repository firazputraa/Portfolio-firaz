import React from 'react';
import foto_profile from '../../public/profile.png'; // Import gambar profil
const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-950 via-sky-900 to-sky-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-12 max-w-4xl w-full">

        {/* Header: ABOUT ME with line and circle */}
        <div className="relative text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 tracking-wide inline-block px-4 bg-white z-10 relative">
            ABOUT ME
          </h2>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 transform -translate-y-1/2"></div>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-gray-300 rounded-full z-20"></div> */}
        </div>

        {/* Main Content: Image and Personal Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 my-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={foto_profile} // Placeholder image
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-sky-800 shadow-lg"
            />
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-gray-700 text-sm md:text-base w-full">
            <div>
              <span className="font-semibold text-gray-800">FULL NAME:</span> Muhammad Firaz Putra Sri Ardhya
            </div>
            <div>
              <span className="font-semibold text-gray-800">ADDRESS:</span> Komp. Griya Cilebut Indah Blok E/12 
            </div>
            <div>
              <span className="font-semibold text-gray-800">PHONE:</span> +00 123 456 789
            </div>
            <div>
              <span className="font-semibold text-gray-800">EMAIL:</span> malydeena@dummy.org
            </div>
          </div>
        </div>

        {/* About Me Description */}
        <div className="text-gray-600 leading-relaxed text-sm md:text-base mt-8 text-center md:text-left">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Download Resume Button */}
        <div className="mt-10 text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            DOWNLOAD RESUME
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;