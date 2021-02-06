import React from 'react';
import { useTranslation } from 'react-i18next';
import faker from 'faker';
import DropDownItem from '../DropdownItem/DropDownItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import User from './../../assets/user.png';
import constants from '@utilities/constants/constants';
// import './UpperBar.scss';

const UpperBar = (props) => {
  const {
    name: { firstName, lastName },
  } = faker;
  const { t } = useTranslation();
  return (
    <nav
      className={`upperbar navbar navbar-expand navbar-light d-flex justify-content-between  ${props.showMenu ? 'with-menu-bar' : 'without-menu-bar'} `}
    >
      {/** Left navbar links **/}
      <ul className="navbar-nav">
        <li className="nav-item p-0">
          <a
            className="nav-link d-md-none d-sm-none d-lg-block"
            onClick={() => props.show()}
            data-widget="pushmenu"
            href="#"
            role="button"
          >
            <FontAwesomeIcon icon={props.showMenu ? 'bars' : 'align-left'} />
          </a>
        </li>
        <li className="nav-item p-0">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <FontAwesomeIcon icon="expand-arrows-alt" />
          </a>
        </li>

      </ul>

      {/** Right navbar links **/}
      <ul className="navbar-nav ">
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
          <a
            className="pt-1 px-0 show d-flex"
            href="#"
            data-toggle="dropdown"
            id="dropdownMenuButton"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="media d-flex align-items-center  flex-row">
              <img
                src={User}
                alt="React Template App "
                className="brand-image rounded-circle"
              />
              <div className="media-body mx-2 text-dark align-items-center d-none d-lg-block">
                <span className="mb-0 font-small font-weight-bold">
                  {firstName() + ' ' + lastName()}
                </span>
              </div>

            </div>
          </a>
          <div
            className="dropdown-menu mt-1  dropdown-menu-lg dropdown-menu-left"
            aria-labelledby="dropdownMenuButton"
          >
            <DropDownItem
              href={constants.routes.profile}
              icon="user-circle"
              title={t('upperBar.user.profil')}
            />
            <DropDownItem
              href={constants.routes.setting}
              icon="cog"
              title={t('upperBar.user.setting')}
            />
            {/*<DropDownItem href="#" icon="envelope-open-text" title="Messages" color="" /> */}
            <DropDownItem
              href={constants.routes.support}
              icon="user-shield"
              title={t('upperBar.user.support')}
              color=""
            />
            <hr />
            <DropDownItem
              href={constants.routes.logout}
              icon="sign-out-alt"
              title={t('upperBar.user.logout')}
              color="red"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default UpperBar;
