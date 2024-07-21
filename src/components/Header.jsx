import React from "react";
import Logo from "../logo.svg";
const Header = () => {
  return (
    <header className="flex justify-center items-center my-5">
      <img src={Logo} alt="" className="h-44" />

      <h1 className="text-8xl text-white"> The React Quiz</h1>
    </header>
  );
};

export default Header;