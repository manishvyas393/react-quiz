import React from "react";
import Logo from "../logo.svg";
const Header = () => {
  return (
    <header className="flex justify-center items-center my-5">
      <img src={Logo} alt="" className="md:h-44 h-16" />

      <h1 className="md:text-8xl text-5xl text-white"> The React Quiz</h1>
    </header>
  );
};

export default Header;
