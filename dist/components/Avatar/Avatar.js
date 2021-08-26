import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from 'react-avatar';

const AvatarContainer = props => {
  const {
    size,
    shape,
    className,
    imageUrl,
    userName,
    paymentStatus
  } = props;
  let sizeClass;

  switch (size) {
    case 'large':
      sizeClass = 'avatar--lg';
      break;

    case 'small':
      sizeClass = 'avatar--sm';
      break;

    default:
      sizeClass = '';
  }

  let shapeClass;

  switch (shape) {
    case 'square':
      shapeClass = 'avatar--square';
      break;

    case 'rounded':
      shapeClass = 'avatar--rounded';
      break;

    case 'round':
      shapeClass = 'avatar--round';
      break;

    default:
      shapeClass = 'avatar--round';
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "avatar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('avatar', sizeClass, shapeClass, className, imageUrl, userName)
  }, imageUrl ? /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: userName
  }) : /*#__PURE__*/React.createElement(Avatar, {
    name: userName,
    size: "100%",
    textSizeRatio: 2,
    textMarginRatio: 0.25
  })), paymentStatus === 'Active' && size !== 'large' ? /*#__PURE__*/React.createElement("div", {
    className: "avatar-container__pro-status"
  }, "PRO") : '');
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

  /** User payment status */
  paymentStatus: PropTypes.string
};
AvatarContainer.defaultProps = {
  size: '',
  shape: 'round',
  className: '',
  imageUrl: '',
  userName: '',
  paymentStatus: ''
};
export default AvatarContainer;