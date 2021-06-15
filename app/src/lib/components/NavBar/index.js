import React, { useState } from "react";
import logoWeb from "../../images/logoWeb.svg";
import logoMobile from "../../images/logoMobile.svg";
import Icons from "../Icons/index.js";
import Avatar from "../Avatar/Index";
import Search from "../Search/Index";
import MenuDropdown from "../MenuDropdown/Index";

const NavBar = () => {
  const [menuDropdown, setMenuDropdown] = useState(false);
  const toggleMenuDropdown = () => {
    setMenuDropdown(!menuDropdown);
  };
  return (
    <>
      <nav className="w-327 lg:w-full h-70 border flex items-center">
        <div className="w-full relative flex items-center lg:px-8 p-2">
          <a href="/">
            <img
              src={logoWeb}
              alt="Programiz Web"
              className="hidden lg:block cursor-pointer"
            />
          </a>
          <img
            src={logoMobile}
            alt="Programiz Web"
            className="block lg:hidden  cursor-pointer"
          />
          <div className="py-5 mr-8 hover:border-b-2 hover:border-active ml-8 lg:block hidden inline cursor-pointer">
            <Icons iconName="dashboard" alt="dashboard" className="inline" />
            <span className="text-base text-primary-blue pl-2 inline">
              <a href="/">Dashboard</a>
            </span>
          </div>
          <div className="py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer">
            <span
              className="text-base text-primary-blue inline"
              onClick={() => toggleMenuDropdown()}
            >
              Courses
            </span>
            <Icons iconName="downarrow" alt="Courses" className="inline" />
          </div>
          <div className="py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer">
            <a href="/compiler">Compiler</a>
          </div>
          <div className="absolute lg:right-8 right-2 flex items-center pr-0">
            <Search className="hidden lg:flex" />
            <Icons
              iconName="searchIcon"
              className="flex lg:hidden cursor-pointer"
            />
            <a href="/bookmark">
              <Icons
                iconName="bookmark"
                alt="Bookmark"
                className="ml-2 cursor-pointer"
              />
            </a>
            <a href="/profile">
              <Avatar
                score="10"
                username="Albert"
                profilePic=""
                otherClass="ml-2 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`absolute z-1 flex ml-10 bg-white flex ${
          menuDropdown === true ? "block" : "hidden"
        }`}
      >
        <MenuDropdown
          languages={[
            { id: "1", name: "Python", code: "python", link: "/python" },
            { id: "2", name: "C Programming", code: "c" },
            { id: "3", name: "C++ Programming", code: "cpp" },
          ]}
        />
      </div>
    </>
  );
};

export default NavBar;
