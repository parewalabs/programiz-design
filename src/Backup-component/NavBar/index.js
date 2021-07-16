import React, { useState, useEffect } from "react";
import logoWeb from "../../images/logoWeb.svg";
import logoMobile from "../../images/logoMobile.svg";
import Icons from "../Icons/index.js";
import { Avatar } from "lib";
import Search from "../Search/Index";
import MenuDropdown from "../MenuDropdown/Index";

const NavBar = (props) => {
  const [menuDropdown, setMenuDropdown] = useState(false);
  const toggleMenuDropdown = () => {
    setMenuDropdown(!menuDropdown);
  };
  const page = localStorage.getItem("page");

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      setMenuDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div className="relative">
      <nav className="md:w-327 lg:w-full relative z-10 h-70 border flex items-center bg-white">
        <div className="w-full relative flex items-center lg:px-40 p-2">
          <a href="/">
            <img
              src={logoWeb}
              alt="Programiz Web"
              className="hidden lg:block cursor-pointer"
            />
            <img
              src={logoMobile}
              alt="Programiz Web"
              className="block lg:hidden cursor-pointer"
            />
          </a>
          <div
            className={`py-5 mx-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer ${
              page === "dashboard" ? "border-b-2 border-active" : ""
            }`}
          >
            <a href="/">
              <Icons iconName="dashboard" alt="dashboard" className="inline" />
              <span className="text-base text-primary-blue pl-2 inline">
                Dashboard
              </span>
            </a>
          </div>
          <div
            className={`py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer ${
              page === "courses" ? "border-b-2 border-active" : ""
            }`}
            onClick={() => toggleMenuDropdown()}
            tabIndex="0"
          >
            <span className="text-base text-primary-blue inline">Courses</span>
            <Icons iconName="downarrow" alt="Courses" className="inline" />
          </div>

          <div className="absolute lg:right-40 right-2 flex items-center ">
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
            <a href="/profile" title="profile">
              <Avatar
                username={props.fullName}
                profilePic={props.profilePic}
                size="w-9 h-9"
                className="ml-2 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </nav>
      {menuDropdown && (
        <button
          tabIndex="-1"
          onClick={() => setMenuDropdown(false)}
          className="fixed inset-0 w-full h-full bg-black opacity-80 cursor-default"
        ></button>
      )}
      <div
        className={`absolute ml-40 bg-white ${
          menuDropdown ? "block" : "hidden"
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
    </div>
  );
};

export default NavBar;
