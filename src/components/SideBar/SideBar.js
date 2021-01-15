import React from 'react';
import './SideBar.scss';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './../../assets/adminTemplateLogo.png';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

const SideBar = (props) => {
  let { url } = useRouteMatch();
  const { t } = useTranslation();
  return (
    <aside
      className={
        'main-sidebar sidebar-dark-primary ' +
        (props.show ? 'd-none' : 'd-block')
      }
    >
      {/** Brand Logo **/}
      <Link to={`${url}/dashboard`} className="brand-link d-flex flex-row">
        <img
          src={Logo}
          alt="React Template App Logo"
          className="brand-image  rounded-circle elevation-3"
        />
        <span className="brand-text font-weight-light">{t('app-title')}</span>
      </Link>
      {/** Sidebar **/}
      <div className="sidebar">
        {/** Sidebar user panel (optional) **/}

        {/** Sidebar menu **/}
        <nav className="navbar-nav w-100 pt-2">
          <li className="w-100">
            <NavLink
              to={`${url}`}
              exact={true}
              className="nav-item nav-link w-100 d-flex flex-row px-1"
              activeClassName="active "
            >
              <FontAwesomeIcon
                icon="tachometer-alt"
                className="nav-icon d-flex align-self-center"
              />
              <p className="d-flex flex-row mx-2 mb-0 w-100 justify-content-between ">
                <span>{t('sideBar.menu.dashboard')}</span>
              </p>
            </NavLink>
          </li>
          <li className="w-100">
            <NavLink
              to={`${url}/profil`}
              className="nav-item nav-link w-100 d-flex flex-row px-1"
              activeClassName="active "
            >
              <FontAwesomeIcon
                icon="user-circle"
                className="nav-icon d-flex align-self-center"
              />
              <p className="d-flex flex-row mx-2 mb-0 w-100 justify-content-between ">
                <span>{t('sideBar.menu.profil')}</span>
              </p>
            </NavLink>
          </li>
          <li className="navbar-nav w-100">
            <li className="w-100">
              <a
                className="nav-item nav-link nav-item-parent  w-100 d-flex flex-row px-1"
                data-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <FontAwesomeIcon
                  icon="users-cog"
                  className="nav-icon d-flex align-self-center"
                />
                <span className="d-flex flex-row mx-2 mb-0 w-100 justify-content-between ">
                  {t('sideBar.menu.users.title')}
                </span>
              </a>
            </li>
            <li className="collapse" id="collapseExample1">
              <ul>
                <li className="nav-item ">
                  <NavLink to={`${url}/create-user`} className="nav-item nav-link w-100 d-flex flex-row px-1" activeClassName="active " >
                    <FontAwesomeIcon icon="user-plus" className="nav-icon d-flex align-self-center" />
                    <p className="d-flex flex-row mx-2 mb-0 w-100 justify-content-between ">
                      <span>{t('sideBar.menu.users.createUser')}</span>
                    </p>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink
                    to={`${url}/users`}
                    className="nav-item nav-link w-100 d-flex flex-row px-1"
                    activeClassName="active "
                  >
                    <FontAwesomeIcon
                      icon="users"
                      className="nav-icon d-flex align-self-center"
                    />
                    <p className="d-flex flex-row mx-2 mb-0 w-100 justify-content-between ">
                      <span>{t('sideBar.menu.users.users')}</span>
                    </p>
                  </NavLink>
                </li>
              </ul>
            </li>
          </li>
          <li className="w-100">
            <NavLink
              to={`${url}/setting`}
              className="nav-item nav-link w-100 d-flex flex-row px-1"
              activeClassName="active "
            >
              <FontAwesomeIcon
                icon="cog"
                className="nav-icon d-flex align-self-center"
              />
              <p className="d-flex flex-row mx-2 mb-0 w-100 justify-content-between ">
                <span>{t('sideBar.menu.setting')}</span>
              </p>
            </NavLink>
          </li>
          {/**  
          <ul className="navbar-nav w-100">
            <li className="w-100">
              <a
                className="nav-item nav-link nav-item-parent  w-100 d-flex flex-row px-1"
                data-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <FontAwesomeIcon
                  icon={['fas', 'home']}
                  className="nav-icon d-flex align-self-center"
                />
                <span className="d-flex flex-row mx-2 mb-0 w-100 justify-content-between ">
                  Menu 2
                </span>
              </a>
            </li>
            <li className="collapse" id="collapseExample1">
              <ul>
                <li className="nav-item ">
                  <a className="nav-link p-nav-link d-flex flex-row " href="#">
                    <FontAwesomeIcon
                      icon="cogs"
                      className="nav-icon d-flex align-self-center"
                    />
                    <span className="mx-2 ">Sous Menu N°1</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link p-nav-link" href="#">
                    Sous Menu N°2
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link p-nav-link" href="#">
                    Sous Menu N°3
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link p-nav-link nav-item-parent d-flex flex-row"
                    role="button"
                    href="#navbarDropdownMenuLink"
                    aria-controls="navbarDropdownMenuLink"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon
                      icon="bug"
                      className="nav-icon d-flex align-self-center"
                    />
                    <p className="d-flex flex-row mx-2 mb-0 w-100 justify-content-between ">
                      <span>Sous Menu N°4</span>
                    </p>
                  </a>
                  <ul className="collapse" id="navbarDropdownMenuLink">
                    <li className="nav-item">
                      <a
                        className="nav-link p-nav-link  d-flex flex-row"
                        href="#"
                      >
                        <FontAwesomeIcon
                          icon="cogs"
                          className="nav-icon d-flex align-self-center"
                        />
                        <span className="mx-2 ">Action</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-nav-link" href="#">
                        Another action
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-nav-link" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        */}
          <div
            className="collapse d-flex flex-column"
            id="collapseExample2"
          ></div>
        </nav>
        {/** /.sidebar-menu **/}
      </div>
      {/** /.sidebar **/}
    </aside>
  );
};
export default SideBar;
