import React from 'react';
import { useTranslation } from 'react-i18next';
import DropDownItem from '../../dropdownitem/DropDownItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import User from './../../../../asset/user.png';
import './UpperBar.scss';

const UpperBar = (props) => {
    const { t, i18n } = useTranslation('common');

    const changeLG = (e) => {
        const newlanguage = e.target.value;
        i18n.changeLanguage(newlanguage);
    };
    return (
        <nav className="upperbar navbar navbar-expand navbar-light">
            {/** Left navbar links **/}
            <ul className="navbar-nav">
                <li className="nav-item p-0">
                    <a
                        className="nav-link"
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
                    <a
                        className="pt-1 px-0 show"
                        href="#"
                        data-toggle="dropdown"
                        id="dropdownMenuButton"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <div className="media d-flex align-items-center">
                            <img
                                src={User}
                                alt="AdminLTE Logo"
                                className="brand-image rounded-circle"
                            />
                            <div className="media-body ml-2 text-dark align-items-center d-none d-lg-block">
                                <span className="mb-0 font-small font-weight-bold">
                                    Rossamy Youssef
                </span>
                            </div>
                        </div>
                    </a>
                    <div
                        className="dropdown-menu mt-1 dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <DropDownItem
                            href="#"
                            icon="user-circle"
                            title={t('upperBar.user.profil')}
                        />
                        <DropDownItem
                            href="#"
                            icon="cog"
                            title={t('upperBar.user.setting')}
                        />
                        {/*<DropDownItem href="#" icon="envelope-open-text" title="Messages" color="" /> */}
                        <DropDownItem
                            href="#"
                            icon="user-shield"
                            title={t('upperBar.user.support')}
                            color=""
                        />
                        <hr />
                        <DropDownItem
                            href="#"
                            icon="sign-out-alt"
                            title={t('upperBar.user.logout')}
                            color="red"
                        />
                    </div>
                </li>
                <li className="nav-item dropdown py-1">
                    <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={changeLG}
                    >
                        <option value="fr">FR</option>
                        <option value="en">EN</option>
                    </select>
                </li>
            </ul>
        </nav>
    );
};
export default UpperBar;
