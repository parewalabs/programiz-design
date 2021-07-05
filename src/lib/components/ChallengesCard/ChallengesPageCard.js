import React from "react";
import PropTypes, { func } from 'prop-types'

import { Card, Button } from 'lib';
import { neural } from "lib/images/image";
import { RESUME_CHALLENGE, START_CHALLENGE, START } from "lib/language/ChallengeCard.language";

const ChallengesPageCard = (props) => {
  const {newChallange, challengeName, ButtonClick} = props;
  return (
    <Card hasShadow>
      <div className="challenge-card">
        <div className="challenge-card__content">
          <p className="fs-body16 color-text-main">
            { newChallange
              ? START_CHALLENGE
              : RESUME_CHALLENGE }
          </p>
          <h3 className="fs-h3 color-text-main mb-4x">
            {challengeName}
          </h3>
          <Button
            type="primary"
            onClick={ButtonClick}
          >
            {START}
          </Button>
        </div>
        <img src={neural} className="challenge-card__img" alt="design shape" />
      </div>
    </Card>
  );
};

ChallengesPageCard.propTypes = {
  /** New Challenge Flag */
  newChallange: PropTypes.bool,
  /** Challenge Name */
  challengeName: PropTypes.string,
  /** Function that will be triggered by button click */
  ButtonClick: PropTypes.func
}

ChallengesPageCard.defaultProps = {
  newChallange: false,
  challengeName: '',
  ButtonClick: func,
}

export default ChallengesPageCard;
