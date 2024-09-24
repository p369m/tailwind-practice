import React from "react";

function Hero() {
  return (
    <header className="w-full h-auto">
      <img
        className="w-full hidden md:block"
        src="https://images.pexels.com/photos/27580822/pexels-photo-27580822/free-photo-of-a-woman-in-red-is-running-in-front-of-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <img
        className="w-full md:hidden"
        src="https://images.pexels.com/photos/20452012/pexels-photo-20452012/free-photo-of-woman-sitting-in-traditional-clothing-and-with-painting-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </header>
  );
}

export default Hero;
