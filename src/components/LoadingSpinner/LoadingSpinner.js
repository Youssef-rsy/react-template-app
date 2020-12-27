import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = (props) => (
  <div
    className="loading-background d-flex justify-content-center align-self-center w-100  h-100"
    data-toggle="modal"
  >
    <div className="loading text-center">
      <div
        className="spinner-border d-flex justify-content-center"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
