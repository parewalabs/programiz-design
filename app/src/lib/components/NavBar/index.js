import React, { useState } from "react";
import logoWeb from "../../images/logoWeb.svg";
import logoMobile from "../../images/logoMobile.svg";
import Icons from "../Icons/index.js";
import Avatar from "../Avatar/Index";
import Search from "../Search/Index";
import MenuDropdown from "../MenuDropdown/Index";

const NavBar = (props) => {
  const [menuDropdown, setMenuDropdown] = useState(false);
  const toggleMenuDropdown = () => {
    setMenuDropdown(!menuDropdown);
  };
  const page = localStorage.getItem("page");
  return (
    <>
      <nav className="md:w-327 lg:w-full h-70 border flex items-center">
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
          >
            <a href="/courses">
              <span
                className="text-base text-primary-blue inline"
                onClick={() => toggleMenuDropdown()}
              >
                Courses
              </span>
              <Icons iconName="downarrow" alt="Courses" className="inline" />
            </a>
          </div>
          <div
            className={`py-5 mr-8 lg:block hover:border-b-2 hover:border-active hidden inline cursor-pointer ${
              page === "compiler" ? "border-b-2 border-active" : ""
            }`}
          >
            <a href="/compiler">Compiler</a>
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
                score="10"
                username={props.fullName}
                profilePic={props.profilePic}
                otherClass="ml-2 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`absolute z-1 flex ml-40 bg-white flex ${
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
