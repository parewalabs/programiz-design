import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Avatar  from 'react-avatar';

const AvatarContainer = (props) => {
  const {size, shape, className, imageUrl, userName} = props;

  let sizeClass;
  switch(size) {
    case "large":
      sizeClass = "avatar--lg";
      break;
    case "small":
      sizeClass = "avatar--sm";
      break;
    default:
      sizeClass = "";
  }
  
  let shapeClass;
  switch(shape) {
    case "square":
      shapeClass = "avatar--square";
      break;
    case "rounded":
      shapeClass = "avatar--rounded";
      break;
    case "round":
      shapeClass = "avatar--round";
      break;
    default:
      shapeClass = "avatar--round";
  }

  return (
    <div className={classNames("avatar", sizeClass, shapeClass, className, imageUrl, userName)}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={userName}
        />
      )}
      <Avatar name={userName} size="100%" textSizeRatio={2} textMarginRatio={0.25}/>
    </div>
  );
};

AvatarContainer.propTypes = {
  /** Size modifier of Avatar. <br/> Available Options: <code>large</code>, <code>small</code> */
  size: PropTypes.string,
  /** Shape modifier of Avatar. <br/> Available Options: <code>rectangle</code>, <code>rounded</code> */
  shape: PropTypes.string,
  /** Custom classes. */
  className: PropTypes.string,
  /** Image URL of Avatar */
  imageUrl: PropTypes.string,
  /** User name of Avatar */
  userName: PropTypes.string,
};

AvatarContainer.defaultProps = {
  size: "",
  shape: "round",
  className: "",
  imageUrl: "",
  userName: ""
};


export default AvatarContainer;
