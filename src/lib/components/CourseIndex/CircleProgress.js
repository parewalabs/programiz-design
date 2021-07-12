import React, { useEffect, useState } from "react";
import {FiCheck} from 'react-icons/fi';
import PropTypes from 'prop-types'
import classNames from "classnames";

const CircleProgress = (props) => {
  const {percentage} = props;

  const [stroke, setStroke] = useState(0);
  const [dashArray, setDashArray] = useState(0);

  useEffect(() => {
    let path = document.querySelector('.circle-progress__circle');
    let circle = path.children[0];
    let length = circle.getTotalLength();

    setDashArray(length);

    // calculate the length of the circle stroke
    let ActualCalc = (length/100) * (100 - percentage);
    setStroke(ActualCalc);
  },[percentage]);

  return (
    <div className="circle-progress">
      <FiCheck className={classNames("circle-progress__icon", {"circle-progress__icon--complete": percentage === 100})}/>
      <svg height="22" width="22" className="circle-progress__circle">
        <circle cx="11" cy="11" r="10" fill="transparent" strokeDasharray={dashArray} strokeDashoffset={stroke}/>
      </svg>
    </div>
  );
};

CircleProgress.propTypes = {
  /** Precentage Progress */
  percentage: PropTypes.number,
}

CircleProgress.defaultProps = {
  percentage: 0
}

export default CircleProgress;
