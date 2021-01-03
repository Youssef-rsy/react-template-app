import React, { Component } from 'react';
import './App.scss';
import UpperBar from '../components/UpperBar/UpperBar';
import SideBar from '../components/SideBar/SideBar';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import Alerts from './../components/Alerts/Alerts';
import { Switch, Route } from 'react-router-dom';
import Profil from './Profil/Profil';
import Page from './DashBorad/DashBorad';
import Setting from './Setting/Setting';
import Users from './user/Users/Users';
import CreateUser from './user/CreateUser/CreateUser';

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
        <div className={'content-wrapper ' + (this.state.showdata ? 'ml-0' : '')} >
          <Alerts />

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
            <Route exact path="/create-user">
              <CreateUser />
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
