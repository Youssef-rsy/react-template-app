import { render } from "@testing-library/react"
import React from "react"
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { renderInputField } from './../../utilities/form/formField'


const ChangePasswordForm = props => {
    const { handleSubmit, pristine, reset, submitting, password } = props;
    const checkPassword = () => {
        const { password } = props;
        console.log('password field', password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={renderInputField} name="password" label="New Password" type="password" placeholder="Enter the new password" />
                <Field component={renderInputField} onBlur={checkPassword} name="repeatedPassword" label="Repeat password" type="password" placeholder="Repeat Password" />
            </div>
            <div className="d-flex justify-content-between ">
                <button type="reset" className="btn btn-secondary" onClick={reset}
                    disabled={pristine || submitting} data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Save changes</button>
            </div>
        </form>
    )
}


export default reduxForm({ form: 'change-password-form' })(ChangePasswordForm);