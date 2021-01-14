import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderInputField } from './../../utilities/form/formField'
import { email, required } from './../../utilities/form/formValidation'
import Logo from './../../assets/react.svg';
import BackgroundRight from './../../assets/example-1.svg';
import BackgroundLight from './../../assets/bg-2.svg';
import { useHistory } from "react-router-dom";

import './Login.scss';


const backgroundStyle = {
    backgroundImage: ` url(${BackgroundLight}) , url(${BackgroundRight})`,
    backgroundPosition: "left top ,right bottom ",
    backgroundRepeat: 'no-repeat,no-repeat',
    backgroundAttachment: "fixed",
    backgroundSize: "58% ,48% ",
}

const Login = props => {

    const { handleSubmit, pristine, reset, submitting } = props;
    let history = useHistory();

    const login = (userAuth) => {

        console.log('history :', history);
        console.log(userAuth);
        if (userAuth.login === "youssef.rsy@gmail.com" && userAuth.password === "password") {
            console.log('redirect')
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
                                            <Field component={renderInputField} validate={[required, email]} name="login" label="Login" type="text" placeholder="Email addresse..." />
                                            <Field component={renderInputField} validate={required} name="password" label="Password" type="password" placeholder="Password" />
                                        </>
                                        <div className="d-flex flex-column mt-5">
                                            <button type="submit" className="btn btn-primary my-1" disabled={pristine || submitting}>Login</button>
                                            {/* <button type="reset" className="btn btn-secondary my-1" onClick={reset}
                                                disabled={pristine || submitting} data-dismiss="modal">Reset</button> */}
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