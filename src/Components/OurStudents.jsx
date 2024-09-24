import React from "react";

function OurStudents() {
  return (
    <div className="h-auto w-full flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 text-2xl font-bold md:text-4xl">
          "Pure HardWork, No ShortCuts"
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl mb-12 md:mt-5"></div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly">
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44 "
            src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/atom.svg"
            alt=""
          />
          <p className="text-3xl text-white font-bold">600+</p>
          <p className="text-3xl text-gray-500 font-semibold">
            Different Courses
          </p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44 "
            src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/feed.svg"
            alt=""
          />
          <p className="text-3xl text-white font-bold">Alumni</p>
          <p className="text-3xl text-gray-500 font-semibold">
            Different Courses
          </p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44 "
            src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/python.svg"
            alt=""
          />
          <p className="text-3xl text-white font-bold">Python</p>
          <p className="text-3xl text-gray-500 font-semibold">
            Different Codes
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStudents;
