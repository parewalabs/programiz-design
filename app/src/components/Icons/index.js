import React from "react";
import dashboard from "../../icons/dashboard.svg";
import course from "../../icons/course.svg";
import search from "../../icons/searchIcon.svg";
import bookmark from "../../icons/bookmark.svg";
import downarrow from "../../icons/downarrow.svg";
import uparrow from "../../icons/uparrow.svg";
import userPlus from "../../icons/userPlus.svg";
import edit from "../../icons/edit.svg";
import compiler from "../../icons/compiler.svg";
import book from "../../icons/book.svg";
import rightarrow from "../../icons/rightarrow.svg";

const Icons = () => {
  return (
    <div className="flex">
      <img src={dashboard} alt="dashboard" />
      <img src={course} alt="course" />
      <img src={search} alt="searchIcon" />
      <img src={compiler} alt="compiler" />
      <img src={bookmark} alt="bookmark" />
      <img src={downarrow} alt="downarrow" />
      <img src={uparrow} alt="uparrow" />
      <img src={userPlus} alt="userPlus" className="bg-blue-400" />
      <img src={edit} alt="edit" />
      <img src={book} alt="book" />
      <img src={rightarrow} alt="rightarrow" />
    </div>
  );
};

export default Icons;
