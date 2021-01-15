import React from 'react';

const DisplayInfos = (props) => {
  const { disabled, label, name, value } = props;
  return (
    <div className="row mx-2 d-flex justify-content-around">
      <label
        htmlFor={name}
        className="col-sm-2 col-form-label font-weight-bold"
      >
        {label}
      </label>
      <span className="col-sm-1">:</span>
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
