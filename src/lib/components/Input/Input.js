import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => {
  const {
    name,
    className,
    inputChangeFunc,
    hasError,
    value,
    errorMsg,
    placeholder,
    disabled,
    type,
    label,
  } = props;

  return (
    <div
      className={classNames('input', { 'input--error': hasError }, className)}
    >
      {label && (
        <label htmlFor="" className="input__label">
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        className="input__control"
        onChange={inputChangeFunc}
        placeholder={placeholder}
      />
      {hasError ? <p className="input__error">{errorMsg}</p> : ''}
    </div>
  );
};

Input.propTypes = {
  /** name of input */
  name: PropTypes.string,
  /** Extra classes*/
  className: PropTypes.string,
  /** Flag to check if input has error*/
  hasError: PropTypes.bool,
  /** Label value for input*/
  label: PropTypes.string,
  /** Error Message to display*/
  errorMsg: PropTypes.string,
  /** Flag to check if the input is disabled or not*/
  disabled: PropTypes.bool,
  /** Placeholder*/
  placeholder: PropTypes.string,
  /** Function to Trigger the value*/
  inputChangeFunc: PropTypes.func,
  /** HTML default input types*/
  type: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  type: '',
  label: '',
  errorMsg: '',
  className: '',
  placeholder: '',
  hasError: false,
  disabled: false,
  inputChangeFunc: () => {},
};

export default Input;
