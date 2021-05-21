import React from "react";
import python from "../../icons/python.svg";
import c from "../../icons/c.svg";
import cpp from "../../icons/cpp.svg";
import java from "../../icons/java.svg";
import js from "../../icons/js.svg";
import das from "../../icons/dsa.svg";
import csharp from "../../icons/csharp.svg";
import kotlin from "../../icons/kotlin.svg";
import swift from "../../icons/swift.svg";

const MenuDropdown = (props) => {
  const languageLogo = (LanguageName) => {
    switch (LanguageName) {
      case "python":
        return python;
      case "c":
        return c;
      case "cpp":
        return cpp;
      case "java":
        return java;
      case "js":
        return js;
      case "dsa":
        return das;
      case "csharp":
        return csharp;
      case "kotlin":
        return kotlin;
      case "swift":
        return swift;

      default:
        return "";
    }
  };
  return (
    <div className="w-825 h-396 rounded text-primary-blue">
      <div className="pt-10 pl-10">
        <span className="text-xl text-primary-blue font-normal">
          Choose your learning path
        </span>
        <div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-6 pt-4">
          {props.languages.map((language) => {
            return (
              <div
                className="border border-seperator rounded"
                key={language.id}
              >
                <div className="py-4 pl-6">
                  <span className="inline-block align-middle">
                    <img
                      src={languageLogo(language.code)}
                      alt={language.name}
                      className="float-left "
                    />
                  </span>
                  <span className="text-base text-primary-blue pl-2">
                    {language.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
