import React from 'react';
import './SideBar.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Logo from './../../../../asset/AdminLTELogo.png';
import User from './../../../../asset/user2-160x160.jpg';


const SideBar = () => {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/** Brand Logo **/}
            <a href="index3.html" className="brand-link">
                <img src={Logo} alt="AdminLTE Logo" className="brand-image  rounded-circle elevation-3"/>
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
            {/** Sidebar **/}
            <div className="sidebar">
                {/** Sidebar user panel (optional) **/}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={User} alt="AdminLTE Logo" className="brand-image rounded-circle elevation-3"/>
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
                {/** Sidebar menu **/}
                <nav className="navbar w-100 p-0">
                    <ul className="navbar-nav w-100">
                        <li className="w-100">
                            <a className="nav-item nav-link nav-item-parent w-100 d-flex flex-row px-1"
                               data-toggle="collapse" href="#collapseExample" role="button"
                               aria-expanded="false" aria-controls="collapseExample">
                                <FontAwesomeIcon icon="check-square" className="nav-icon d-flex align-self-center"/>
                                <p className="d-flex flex-row ml-2 mb-0 w-100 justify-content-between ">
                                    <span>Menu 1</span>
                                </p>
                            </a>
                        </li>
                        <li className="collapse" id="collapseExample">
                            <ul>
                                <li className="nav-item ">
                                    <a className="nav-link p-nav-link" href="#">Sous Menu N°1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-nav-link" href="#">Sous Menu N°2</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link p-nav-link" href="#">Sous Menu N°3</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav w-100">
                        <li className="w-100">
                            <a className="nav-item nav-link nav-item-parent  w-100 d-flex flex-row px-1"
                               data-toggle="collapse" href="#collapseExample1" role="button"
                               aria-expanded="false" aria-controls="collapseExample1">
                                <FontAwesomeIcon icon={['fas', 'home']} className="nav-icon d-flex align-self-center"/>
                                <span className="d-flex flex-row ml-2 mb-0 w-100 justify-content-between ">
                                    Menu 2
                                </span>
                            </a>
                        </li>
                        <li className="collapse" id="collapseExample1">
                            <ul>
                                <li className="nav-item ">
                                    <a className="nav-link p-nav-link d-flex flex-row " href="#">
                                        <FontAwesomeIcon icon="cogs" className="nav-icon d-flex align-self-center"/>
                                        <span className="ml-2 ">Sous Menu N°1</span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link p-nav-link" href="#">Sous Menu N°2</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link p-nav-link" href="#">Sous Menu N°3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-nav-link nav-item-parent d-flex flex-row"
                                       role="button"
                                       href="#navbarDropdownMenuLink" aria-controls="navbarDropdownMenuLink"
                                       data-toggle="collapse" aria-expanded="false">
                                        <FontAwesomeIcon icon="bug" className="nav-icon d-flex align-self-center"/>
                                        <p className="d-flex flex-row ml-2 mb-0 w-100 justify-content-between ">
                                            <span>Sous Menu N°4</span>
                                        </p>
                                    </a>
                                    <ul className="collapse" id="navbarDropdownMenuLink">
                                        <li className="nav-item">
                                            <a className="nav-link p-nav-link active d-flex flex-row" href="#">
                                                <FontAwesomeIcon icon="cogs" className="nav-icon d-flex align-self-center"/>
                                                <span className="ml-2 ">Action</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-nav-link" href="#">Another action</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-nav-link" href="#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>
                    <div className="collapse d-flex flex-column" id="collapseExample2">

                    </div>
                </nav>
                {/** /.sidebar-menu **/}
            </div>
            {/** /.sidebar **/}
        </aside>
    )
}
export default SideBar;