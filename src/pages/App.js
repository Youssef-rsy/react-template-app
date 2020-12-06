import React, { Component } from 'react';
import './App.scss';
import UpperBar from './../components/common/upperbar/UpperBar';
import SideBar from './../components/common/sidebar/SideBar';
import ContentHeader from './../components/common/contentHeader/ContentHeader';
import Profil from './Profil/Profil';
import Page from './page/Page';
import Setting from './Setting/Setting';

class App extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.state = {
      showdata: false,
    };
  }

  show() {
    this.setState({ showdata: !this.state.showdata });
  }

  render() {
    return (
      <div className="wrapper">
        <SideBar show={this.state.showdata} />
        <div
          className={'content-wrapper ' + (this.state.showdata ? 'ml-0' : '')}
        >
          <UpperBar show={this.show} showMenu={this.state.showdata} />
          <ContentHeader />
          {/*<Setting />*/}
          <Profil />
        </div>
      </div>
    );
  }
}

export default App;
