import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DropDownItem = (props) => {

    return (
        <a className="d-flex justify-content-begin dropdown-item dropdown-item px-3 " href={props.href}>
        <FontAwesomeIcon icon={props.icon} className="nav-icon d-flex align-self-center" color={props.color || "#222E3C"}/>
        <span className="ml-2 font-weight-normal"> {props.title}</span>
    </a> 
    );

}

export default DropDownItem;