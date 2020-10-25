import React, {Fragment} from 'react';
import './App.scss';
import Menu from '../common/menu/Menu';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UpperBar from "../common/menu/upperbar/UpperBar";
import SideBar from "../common/menu/sidebar/SideBar";
import Footer from "../common/footer/Footer";
import ContentHeader from "../common/contentHeader/ContentHeader";
import Page from "./page/Page";

function App() {
    return (
        <div className="wrapper">
            <Menu/>
            <div className="content-wrapper">
                <ContentHeader/>
                <Page/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
