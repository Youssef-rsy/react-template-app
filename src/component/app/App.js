import React, { Component, Fragment } from 'react';
import './App.scss';
import Menu from '../common/menu/Menu';
import UpperBar from "../common/menu/upperbar/UpperBar";
import SideBar from "../common/menu/sidebar/SideBar";
import ContentHeader from "../common/contentHeader/ContentHeader";
import Page from "./page/Page";
import Profil from './profil/Profil';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.state={ 
            showdata : false
        };
    }

    show(){ 
        this.setState( {showdata: !this.state.showdata})
    }

    render() {
        return(
        <div className="wrapper">
            <SideBar show={this.state.showdata} />
            <div className={"content-wrapper "+ (this.state.showdata? "ml-0" : "")}>
                <UpperBar show={this.show} showMenu={this.state.showdata}/>
                <ContentHeader/>
                <Profil/>
            </div>
        </div>
    );
}
}

export default App;
