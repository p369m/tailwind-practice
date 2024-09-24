import React from "react";

function ProductSection() {
  return (
    <div className="h-auto w-full flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 text-2xl font-bold md:text-4xl">
          Our Products
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl mb-12 md:mt-5"></div>
      </div>
      <div className="w-[90%] h-auto flex flex-wrap justify-around">
        <div className="w-64 flex flex-col items-center mb-12 hover:border-white hover:border-2 hover:rounded-3xl p-2">
          <img
            className="w-44 h-44 "
            src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ubuntu.svg"
            alt=""
          />
          <p className="text-2xl font-bold md:text-4xl text-white">
            PW skills Lab
          </p>
          <p className="text-xl font-bold md:text-2xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe.
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12 hover:border-white hover:border-2 hover:rounded-3xl p-2">
          <img
            className="w-44 h-44 "
            src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/yahoo.svg"
            alt=""
          />
          <p className="text-2xl font-bold md:text-4xl text-white">
            PW skills Lab
          </p>
          <p className="text-xl font-bold md:text-2xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe.
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12 hover:border-white hover:border-2 hover:rounded-3xl p-2">
          <img
            className="w-44 h-44 "
            src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/open-clipart.svg"
            alt=""
          />
          <p className="text-2xl font-bold md:text-4xl text-white">
            PW skills Lab
          </p>
          <p className="text-xl font-bold md:text-2xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe.
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12 hover:border-white hover:border-2 hover:rounded-3xl p-2">
          <img
            className="w-44 h-44 "
            src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/mac.svg"
            alt=""
          />
          <p className="text-2xl font-bold md:text-4xl text-white">
            PW skills Lab
          </p>
          <p className="text-xl font-bold md:text-2xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe.
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mb-12 hover:border-white hover:border-2 hover:rounded-3xl p-2">
          <img
            className="w-44 h-44 "
            src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/heart.svg"
            alt=""
          />
          <p className="text-2xl font-bold md:text-4xl text-white">
            PW skills Lab
          </p>
          <p className="text-xl font-bold md:text-2xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
