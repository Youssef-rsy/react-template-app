import React, { Component } from 'react';
import './App.scss';
import UpperBar from '../components/common/upperbar/UpperBar';
import SideBar from '../components/common/sidebar/SideBar';
import ContentHeader from '../components/common/contentHeader/ContentHeader';
import { Switch, Route } from 'react-router-dom';
import Profil from './Profil/Profil';
import Page from './page/Page';
import Setting from './Setting/Setting';
import Users from './user/Users/Users';

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
        <UpperBar show={this.show} showMenu={this.state.showdata} />
        <div
          className={'content-wrapper ' + (this.state.showdata ? 'ml-0' : '')}
        >
          <ContentHeader />
          <Switch>
            <Route path="/profil">
              <Profil />
            </Route>
            <Route path="/setting">
              <Setting />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Page />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
