import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import './App.scss';
import UpperBar from '../components/UpperBar/UpperBar';
import SideBar from '../components/SideBar/SideBar';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import Alerts from './../components/Alerts/Alerts';
import Dashboard from './DashBorad/DashBorad';
import Profil from './Profil/Profil';
import Setting from './Setting/Setting';
import CreateUser from './user/CreateUser/CreateUser';
import Users from './user/Users/Users';
import reducer from './user/Users/reducer';


const App = props => {
  const [showdata, setShowdata] = useState(false);
  const { i18n } = useTranslation('common');

  const show = () => {
    setShowdata(!showdata);
  }
  useEffect(() => {
    i18n.language === "ar" ?
      document.body.style.direction = "rtl" : document.body.style.direction = "ltr";
  }, []);

  const { path } = useRouteMatch();
  return (
    <div className="container-fluid  app-background ">
      <div className="row px-0 d-flex fill flex-md-column flex-lg-row ">
        <div className={'col-12 col-lg-2  px-0 sidebar-dark-primary ' + (showdata ? 'd-none' : 'd-block')}>
          <SideBar show={showdata} />
        </div>
        <div className={'col-12 col-lg-auto  px-0 no-gutters  d-flex flex-column ' + (showdata ? 'w-100' : 'content-width')}>
          <UpperBar show={show} showMenu={showdata} />
          <div className={'content-wrapper '} >
            <Alerts />
            <ContentHeader />
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
    </div>
  );

}
export default App;
