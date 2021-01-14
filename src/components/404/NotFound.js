import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import BackgroundLight from './../../assets/bg-2.svg';
import _404_ from './../../assets/404.svg';
import Notfound from './../../assets/not_found.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const backgroundStyle1 = {
    backgroundImage: ` url(${BackgroundLight}) , url(${BackgroundLight})`,
    backgroundPosition: "left top ,right bottom ",
    backgroundRepeat: 'no-repeat,no-repeat',
    backgroundAttachment: "fixed",
    backgroundSize: "30% ,30% ",
};

const backgroundStyle = {
    backgroundImage: ` url(${Notfound}) `,
    backgroundPosition: " bottom center ",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: "fixed",
    backgroundSize: "58%  ",
}

const NotFound = props => {

    let history = useHistory();
    const { t } = useTranslation();
    const goBackHome = () => {
        history.push("/app");
    }

    return (
        <div className="wrapper" >
            <div className="content-wrapper  m-0" >
                <div className=" container-fluid vh-100 d-flex justify-content-center" style={backgroundStyle1}>
                    <div className="row w-75 d-flex justify-content-center align-self-center   d-flex flex-row " >
                        <img src={_404_} alt="Page Note Found" className="card-img-top w-50 col-md-8" />
                        <div className="card col-md-4 my-0">
                            <div className="card-body d-flex flex-column justify-content-around" >
                                <h4 class="card-title text-center text-justify">{t('notFound.title')}</h4>
                                <p class="card-text">{t('notFound.description')} </p>
                                <button className="btn btn-primary  " onClick={goBackHome} >{t('notFound.action')}
                                    <FontAwesomeIcon icon="home" className="mx-1" />
                                </button>
                                {/* <a href="#" class="card-link" onClick={goBackHome} >Go back home Page</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotFound;