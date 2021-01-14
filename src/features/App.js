import React, { useState } from 'react';
import './App.scss';
import UpperBar from '../components/UpperBar/UpperBar';
import SideBar from '../components/SideBar/SideBar';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import Alerts from './../components/Alerts/Alerts';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Dashboard from './DashBorad/DashBorad';
import Profil from './Profil/Profil';
import Setting from './Setting/Setting';
import CreateUser from './user/CreateUser/CreateUser';
import Users from './user/Users/Users';

const App = props => {
  const [showdata, setShowdata] = useState(false);

  const show = () => {
    setShowdata(!showdata);
  }

  const { path } = useRouteMatch();
  return (
    <div className="wrapper">
      <SideBar show={showdata} />
      <UpperBar show={show} showMenu={showdata} />
      <div className={'content-wrapper ' + (showdata ? 'ml-0' : '')} >
        <Alerts />
        <ContentHeader />
        <div className="vh-100" >
          <Switch>
            <Route exact path={[`${path}`]} component={Dashboard} />
            <Route exact path={`${path}/profil`} component={Profil} />
            <Route exact path={`${path}/create-user`} component={CreateUser} />
            <Route exact path={`${path}/users`} component={Users} />
            <Route exact path={`${path}/setting`} component={Setting} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </div>
    </div>
  );

}
export default App;
