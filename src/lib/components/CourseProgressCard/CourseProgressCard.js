import React from "react";
import PropTypes from "prop-types";
import { progressCardArtWork, SmallCertificate } from "lib/images/image";
import { Button, Card, ProgressBar } from "lib";
import { FIRST_STEP, SEE_YOU_BACK, LEARNING, START, CONTINUE } from "lib/language/Card.language";


const CourseProgressCard = (props) => {
  const { completion, message, customClickEvent} = props;
  return (
    <Card shadowed>
      <div
        className="p-10x progress-card"
        style={{
          backgroundImage: `url(${progressCardArtWork})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "90% 0px",
        }}
      >
        <h2 className="fs-h2 color-text-main mb-4x">
          {completion === 0 ? FIRST_STEP : SEE_YOU_BACK }
        </h2>
        <div className="d-flex align-items-start">
          <div className="flex-1 mr-6x">
            <ProgressBar className="mb-2x" completion={completion} />
            <p className="fs-body14 text-primary-blue mb-6x">
              {message}
            </p>
          </div>
          <img src={SmallCertificate} alt="cerificate" className="progress-card__image"/>
        </div>
        <Button type="primary" onClick={customClickEvent} className="btn--block-sm">
          {completion === 0 ? START : CONTINUE } {LEARNING}
        </Button>
      </div>
    </Card>
  );
};

CourseProgressCard.propTypes = {
  /** Completion Percentage */
  completion: PropTypes.number,
  /** Message to Show on the card */
  message: PropTypes.string,
  /** Custom Click Event Listener */
  customClickEvent: PropTypes.func,
};

CourseProgressCard.defaultProps = {
  completion: 0,
  message: "",
  customClickEvent: "",
};


export default CourseProgressCard;
