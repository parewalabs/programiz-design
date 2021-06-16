import React from "react";
import completed from "../../images/completed.png";
import Buttons from "../Buttons/Index";

const CompletedPopup = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const popupToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Buttons
        otherClass="text-white bg-main py-3 px-4"
        customClickEvent={() => popupToggle()}
      >
        <span className="justify-center flex">Finish</span>
      </Buttons>
      {showModal ? (
        <>
          <div className="flex justify-center items-center pt-2 flex fixed inset-0 z-10 outline-none focus:outline-none bg-black bg-opacity-50">
            <div className="lg:w-705 w-327 h:705 border border-seperator bg-white">
              <div className="w-full relative text-center">
                <h2 className="text-xl text-primary-blue font font-semibold absolute pt-8 left-2/4 -ml-20">
                  Successfully
                  <br />
                  Completed Lesson
                </h2>

                <img src={completed} className="" alt="completed successfull" />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex justify-center pt-10">
                  <p className="text-base text-primary-blue ">Up Next:</p>
                </div>
                <h2 className="text-xl text-primary-blue font font-semibold flex justify-center pt-2">
                  {props.next}
                </h2>
                <div className="pt-4 flex justify-center ">
                  <Buttons
                    otherClass="bg-main text-white py-3 px-20"
                    customClickEvent={() => popupToggle()}
                  >
                    Start the {props.nextType}
                  </Buttons>
                </div>
                <a
                  href="/course"
                  className="py-4 flex justify-center text-link text-xs font-normal"
                >
                  Go back to the Course Index
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CompletedPopup;
