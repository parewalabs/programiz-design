import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const {
    type,
    size,
    fullWidth,
    isLeftAligned,
    disabled,
    customClickEvent,
    className,
    children,
  } = props;

  let typeClass;
  switch (type) {
    case 'primary':
      typeClass = 'btn--primary';
      break;
    case 'primary-light':
      typeClass = 'btn--primary-20';
      break;
    case 'primary-outline':
      typeClass = 'btn--primary-outline';
      break;
    default:
      typeClass = '';
  }

  let sizeClass;
  switch (size) {
    case 'small':
      sizeClass = 'btn--sm';
      break;
    case 'large':
      sizeClass = 'btn--lg';
      break;
    default:
      sizeClass = '';
  }

  return type !== 'clear' ? (
    <button
      className={classNames(
        'btn',
        typeClass,
        className,
        sizeClass,
        { 'btn--block': fullWidth },
        { 'btn--left-aligned': isLeftAligned }
      )}
      onClick={customClickEvent}
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <button
      className={classNames('btn-clear', className)}
      onClick={customClickEvent}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Size modifier of Button. <br/> Available Options: <code>small</code>, <code>large</code> */
  size: PropTypes.string,
  /** Type modifier of Avatar. <br/> Available Options: <code>primary</code>, <code>primary-light</code>, <code>primary-outline</code> <code>clear</code> */
  type: PropTypes.string,
  /** Custom classes. */
  className: PropTypes.string,
  /** Click handler functions */
  customClickEvent: PropTypes.func,
  /** To trigger Full width button */
  fullWidth: PropTypes.bool,
  /** To disable button */
  disabled: PropTypes.bool,
  /** To add content or label inside the button */
  children: PropTypes.node,
  /** To align content of the button on left*/
  isLeftAligned: PropTypes.bool,
};

Button.defaultProps = {
  size: '',
  type: '',
  className: '',
  fullWidth: false,
  disabled: false,
  children: '',
  isLeftAligned: false,
  customClickEvent: null,
};

export default Button;
