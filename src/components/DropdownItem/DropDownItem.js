import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const DropDownItem = (props) => {
  return (
    <NavLink
      to={props.href}
      className="d-flex justify-content-begin dropdown-item dropdown-item px-3 d-flex flex-row"
    >
      <FontAwesomeIcon
        icon={props.icon}
        className="nav-icon d-flex align-self-center"
        color={props.color || '#222E3C'}
      />
      <span className="mx-2 font-weight-normal"> {props.title}</span>
    </NavLink>
  );
};

export default DropDownItem;
