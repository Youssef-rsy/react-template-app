import { render } from "@testing-library/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { renderInputField } from './../../utilities/form/formField'


const ChangePasswordForm = props => {
    const { handleSubmit, pristine, reset, submitting, password } = props;
    const { t } = useTranslation();
    const checkPassword = () => {
        const { password } = props;
        console.log('password field', password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={renderInputField} name={t('profil.changePasswordModal.password.name')} label={t('profil.changePasswordModal.password.label')} type="password" placeholder={t('profil.changePasswordModal.password.placeholder')} />
                <Field component={renderInputField} onBlur={checkPassword} name={t('profil.changePasswordModal.repeatedPassword.name')} label={t('profil.changePasswordModal.repeatedPassword.label')} type="password" placeholder={t('profil.changePasswordModal.repeatedPassword.placeholder')} />
            </div>
            <div className="d-flex justify-content-between ">
                <button type="reset" className="btn btn-secondary" onClick={reset}
                    disabled={pristine || submitting} data-dismiss="modal">{t('profil.changePasswordModal.close')}</button>
                <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>{t('profil.changePasswordModal.save')}</button>
            </div>
        </form>
    )
}


export default reduxForm({ form: 'change-password-form' })(ChangePasswordForm);