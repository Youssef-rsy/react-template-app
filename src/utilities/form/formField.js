import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const renderInputField = ({
  col,
  input,
  label,
  type,
  id,
  placeholder,
  meta: { touched, error, warning },
}) => (
  <div className={`form-group ${col}`}>
    <label htmlFor={id} className="d-flex flex-row">{label}</label>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form-control"
      id={id}
      placeholder={placeholder}
    />
    <small className="form-text  text-danger ">
      {touched &&
        ((error && (
          <div className="d-flex flex-row">
            <FontAwesomeIcon
              icon="exclamation-circle"
              className="nav-icon d-flex align-self-begin mx-1"
            />
            <span className="text-break">{error}</span>
          </div>
        )) ||
          (warning && <span>{warning}</span>))}
    </small>
  </div>
);
