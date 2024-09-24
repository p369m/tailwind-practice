import React from "react";

function NavBar() {
  return (
    <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4">
      <div className="text-indigo-700 text-2xl font-bold">PW Skills</div>
      <ul className="md:flex font-semibold hidden">
        <li className="mx-[10px] cursor-pointer">Home</li>
        <li className="mx-[10px] cursor-pointer">About Us</li>
        <li className="mx-[10px] cursor-pointer">Contact Us</li>
      </ul>
      <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
        Login/Sign-Up
      </div>
      <div className="md:hidden">
        <a href="#" className="text-4xl">
          &#8801;
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
