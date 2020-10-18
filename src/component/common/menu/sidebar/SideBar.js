import React from 'react';
import './SideBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SideBar=  () =>{

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/** Brand Logo **/}
            <a href="index3.html" className="brand-link">
                {/**<img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />**/}
                <FontAwesomeIcon icon={['fas', 'home']} className="mr-1 brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            {/** Sidebar **/}
            <div className="sidebar">
                {/** Sidebar user panel (optional) **/}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <FontAwesomeIcon icon={['fas', 'home']} className="mr-1 brand-image img-circle elevation-3" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>

                {/** Sidebar menu **/}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/** Add icons to the links using the .nav-icon class
                         with font-awesome or any other icon font library **/}
                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link active">
                                <FontAwesomeIcon icon={['fas', 'home']} className="nav-icon" />
                                <p>
                                    Starter Pages
                                    <FontAwesomeIcon icon={['fas', 'home']} className="right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link active">
                                        <FontAwesomeIcon icon={['fas', 'circle']} className="nav-icon" />
                                        <p>Active Page</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <FontAwesomeIcon icon={['fas', 'circle']} className="nav-icon" />
                                        <p>Inactive Page</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <FontAwesomeIcon icon={['fas', 'th']} className="nav-icon" />
                                <p>
                                    Simple Link
                                    <span className="right badge badge-danger">New</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/** /.sidebar-menu **/}
            </div>
            {/** /.sidebar **/}
        </aside>
    )}
export default SideBar;