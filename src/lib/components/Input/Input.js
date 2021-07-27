import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => {
  const { className, inputChangeFunc, hasError, value, errorMsg, placeholder, disabled, type, label } = props;

  return (
    <div className={classNames("input", {"input--error" : hasError}, className)}>
      { label && <label htmlFor="" className="input__label">{label}</label> }
      <input type={type} className="input__control" value={value} onChange={inputChangeFunc} placeholder={placeholder} disabled={disabled}/>
      { hasError ? <p className="input__error">{ errorMsg }</p> : "" }
    </div>
  );
};

Input.propTypes = {
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
  type: PropTypes.string
};

Input.defaultProps = {
  className: "",
  hasError: false,
  label: "",
  errorMsg: "",
  disabled: false,
  placeholder: "",
  inputChangeFunc: () => {},
  type:"",
};

export default Input;
