import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation, useRouteMatch } from 'react-router-dom';

const ContentHeader = () => {
  const [breadCrumb, setBreadCrumb] = useState();
  let { url } = useRouteMatch();
  const { t } = useTranslation("breadcrumb");
  let location = useLocation();
  const path = location.pathname.substring(1);
  const paths = path.split('/');
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-12">
            <ol className="breadcrumb breadcrumb-dark breadcrumb-transparent float-sm-left">
              <Link to={url} className="breadcrumb-item " activeClassName="active" >
                <FontAwesomeIcon icon="home" className=" d-flex align-self-center" />
              </Link>
              {paths.map(path => {
                return (path === "app" ?
                  paths.length !== 1 ? '' :
                    < span className="breadcrumb-item " > {t(path)}</span>
                  :
                  <span className="breadcrumb-item ">{t(path)}</span>
                )
              })}
            </ol>
          </div>
          <div className="col-sm-12 mt-2">
            <h1 className="m-0 text-dark">{t(paths[paths.length - 1])}</h1>
          </div>
        </div>
      </div>
    </div >
  );
};
export default ContentHeader;
