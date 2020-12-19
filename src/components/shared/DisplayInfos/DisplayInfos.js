import React from 'react';

const DisplayInfos = (props) => {
  const { disabled, label, name, value } = props;
  return (
    <div className="row ml-2">
      <label
        htmlFor={name}
        className="col-sm-3 col-form-label font-weight-bold"
      >
        {label}
        <span className="float-right">:</span>
      </label>
      <div className="col-sm-9">
        <input
          type="text"
          className="form-control-plaintext"
          id={name}
          value={value}
          disabled={disabled}
          name={name}
          key={label}
        />
      </div>
    </div>
  );
};

export default DisplayInfos;
