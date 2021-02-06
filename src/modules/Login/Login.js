import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderInputField } from '@utilities/form/formField'
import { email, required } from '@utilities/form/formValidation'
import Logo from './../../assets/react.svg';
import BackgroundRight from './../../assets/example-1.svg';
import BackgroundLight from './../../assets/bg-2.svg';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './Login.scss';


const backgroundStyle = {
    backgroundImage: ` url(${BackgroundLight}) , url(${BackgroundRight})`,
    backgroundPosition: "left top ,right bottom ",
    backgroundRepeat: 'no-repeat,no-repeat',
    backgroundAttachment: "fixed",
    backgroundSize: "58% ,48% ",
}

const Login = props => {

    const { t } = useTranslation();
    const { handleSubmit, pristine, reset, submitting } = props;
    let history = useHistory();

    const login = (userAuth) => {

        if (userAuth.login === "youssef.rsy@gmail.com" && userAuth.password === "password") {
            history.push('/app')
        }
    }

    return (
        <div className="wrapper" >
            <div className="content-wrapper  m-0" >
                <div className=" container-fluid vh-100 d-flex justify-content-center" style={backgroundStyle}>
                    <div className="row w-75 d-flex justify-content-center align-self-center">
                        <div className="card col-md-6 neumorphism">
                            <div className="card-body " >
                                <span className="card-title d-flex justify-content-center">
                                    <img
                                        src={Logo}
                                        alt="React Template App Logo"
                                        className="brand-image "
                                    />
                                    <h5>react Template App</h5>
                                </span>
                                <div className='border-top py-4'>
                                    <span className=" d-none row col-md-12  m-0 text-danger align-self-center text-justify p-2 text-center">Cillum anim eu pariatur voluptate commodo eiusmod proident.</span>
                                    <form onSubmit={handleSubmit(login)}>
                                        <>
                                            <Field component={renderInputField} validate={[required, email]} name={t('login.login.name')} label={t('login.login.label')} type="text" placeholder={t('login.login.placeholder')} />
                                            <Field component={renderInputField} validate={required} name={t('login.password.name')} label={t('login.password.label')} type="password" placeholder={t('login.password.placeholder')} />
                                        </>
                                        <div className="d-flex flex-column mt-5">
                                            <button type="submit" className="btn btn-primary my-1" disabled={pristine || submitting}>{t('login.signIn')}</button>
                                        </div>
                                    </form>
                                </div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default reduxForm({
    form: 'login'
})(Login);