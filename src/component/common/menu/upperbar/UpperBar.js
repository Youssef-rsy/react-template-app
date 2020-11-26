import React from 'react';
import './UpperBar.scss';
import DropDownItem from "../../dropdownitem/DropDownItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import User from './../../../../asset/user.png';
import { Button } from 'bootstrap';

const UpperBar=  (props) =>{
   
    return (
        <nav className=" navbar navbar-expand navbar-light">
            {/** Left navbar links **/}
            <ul className="navbar-nav">
                <li className="nav-item p-0" >
                    <a className="nav-link" onClick={() => props.show() } data-widget="pushmenu" href="#" role="button">
                        <FontAwesomeIcon icon={props.showMenu ? "align-right":"align-left"}/>
                    </a>
                </li>
                <li className="nav-item p-0" >
                    <a className="nav-link" onClick={() => props.show() } data-widget="pushmenu" href="#" role="button">
                        <FontAwesomeIcon icon="expand-arrows-alt"  />
                    </a>
                </li>
            </ul>

            {/** Right navbar links **/}
            <ul className="navbar-nav ml-auto">
                {/** Notifications Dropdown menu **/}
                
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#">
                        <FontAwesomeIcon icon={['fas', 'bell']} />
                        <span className="badge badge-warning navbar-badge">15</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-header">15 Notifications</span>
                    </div>
                </li>

                <li className="nav-item dropdown py-1">
                    <a className="pt-1 px-0 show" href="#"  data-toggle="dropdown"id="dropdownMenuButton"  aria-haspopup="true" aria-expanded="false">
                        <div className="media d-flex align-items-center">
                        <img src={User} alt="AdminLTE Logo" className="brand-image rounded-circle"/>
                            <div className="media-body ml-2 text-dark align-items-center d-none d-lg-block">
                                <span className="mb-0 font-small font-weight-bold">Rossamy Youssef</span>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-menu mt-1"  aria-labelledby="dropdownMenuButton">
                        <DropDownItem href="#" icon="user-circle" title="My Profile"  />
                        <DropDownItem href="#" icon="cog" title="Settings" />
                        {/*<DropDownItem href="#" icon="envelope-open-text" title="Messages" color="" /> */}
                        {/*<DropDownItem href="#" icon="user-shield" title="Support" color="" /> */}
                        <hr/>
                        <DropDownItem href="#" icon="sign-out-alt" title="Logout" color="red" />
                    </div>
                </li>
                

            </ul>
        </nav>
    )}
export default UpperBar;