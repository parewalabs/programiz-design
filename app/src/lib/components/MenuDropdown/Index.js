import React from "react";
import Icons from "../Icons/index";

const setCurrentLanguage = (lang) => {
  localStorage.setItem("currentLanguage", lang);
};
const MenuDropdown = (props) => {
  return (
    <div className="w-327 lg:w-825 h-auto border rounded text-primary-blue bg-white">
      <div className="py-10 px-10">
        <span className="text-xl text-primary-blue font-normal">
          Choose your learning path
        </span>
        <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-6 pt-4">
          {props.languages.map((language) => {
            return (
              <a href="/courses" key={language.id}>
                <div
                  className="border border-seperator rounded cursor-pointer"
                  onClick={() => setCurrentLanguage(language.code)}
                >
                  <div className="py-4 pl-6">
                    <span className="inline-block align-middle">
                      <Icons
                        iconName={language.code}
                        alt={language.name}
                        className="float-left"
                      />
                    </span>
                    <span className="text-base text-primary-blue pl-2">
                      {language.name}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
