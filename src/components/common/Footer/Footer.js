import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="main-footer">
      {/** To the right **/}
      <div className="float-right d-none d-sm-inline">Anything you want</div>
      {/** Default to the left **/}
      <strong>
        Copyright &copy; All rights reserved.
        </strong>
    </footer>
  );
};
export default Footer;
