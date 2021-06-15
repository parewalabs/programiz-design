import React from "react";
import dashboard from "../../icons/dashboard.svg";
import dashboardActive from "../../icons/dashboardActive.svg";
import course from "../../icons/course.svg";
import courseActive from "../../icons/courseActive.svg";
import search from "../../icons/searchIcon.svg";
import bookmark from "../../icons/bookmark.svg";
import downarrow from "../../icons/downarrow.svg";
import uparrow from "../../icons/uparrow.svg";
import userPlus from "../../icons/userPlus.svg";
import edit from "../../icons/edit.svg";
import compiler from "../../icons/compiler.svg";
import compilerActive from "../../icons/compilerActive.svg";
import book from "../../icons/book.svg";
import rightarrow from "../../icons/rightarrow.svg";
import challengesIcon from "../../icons/challengesIcon.svg";
import newTag from "../../icons/newTag.svg";
import cross from "../../icons/cross.svg";
import bookmarkLight from "../../icons/bookmarkLight.svg";
import burgerMenu from "../../icons/burgerMenu.svg";

//language Icons
import python from "../../icons/python.svg";
import c from "../../icons/c.svg";
import cpp from "../../icons/cpp.svg";
import java from "../../icons/java.svg";
import js from "../../icons/js.svg";
import das from "../../icons/dsa.svg";
import csharp from "../../icons/csharp.svg";
import kotlin from "../../icons/kotlin.svg";
import swift from "../../icons/swift.svg";

const Icons = (props) => {
  const selectIcon = (iconName) => {
    switch (iconName) {
      case "dashboard":
        return dashboard;
      case "dashboardActive":
        return dashboardActive;
      case "course":
        return course;
      case "courseActive":
        return courseActive;
      case "searchIcon":
        return search;
      case "downarrow":
        return downarrow;
      case "uparrow":
        return uparrow;
      case "bookmark":
        return bookmark;
      case "bookmarkLight":
        return bookmarkLight;
      case "userPlus":
        return userPlus;
      case "edit":
        return edit;
      case "compiler":
        return compiler;
      case "compilerActive":
        return compilerActive;
      case "book":
        return book;
      case "rightarrow":
        return rightarrow;
      case "challengesIcon":
        return challengesIcon;
      case "newTag":
        return newTag;
      case "cross":
        return cross;
      case "burgerMenu":
        return burgerMenu;

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
    <img
      src={selectIcon(props.iconName)}
      alt={props.alt}
      className={props.className}
      onClick={props.customClickEvent}
    />
  );
};

export default Icons;
