import React from "react"
import { useTranslation } from "react-i18next";
import { Field, reduxForm } from "redux-form";
import { renderInputField } from './../../../utilities/form/formField'
import { required, email, phoneNumber, number } from './../../../utilities/form/formValidation'

const CreateUserForm = props => {
    const { t } = useTranslation();
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="row w-100 d-inline-flex">
                <Field component={renderInputField} col='col-md-6' validate={required} label={t('users.createUser.name.label')} name={t('users.createUser.name.name')} type='text' placeholder={t('users.createUser.name.placeholder')} />
                <Field component={renderInputField} col='col-md-6' label={t('users.createUser.address.label')} name={t('users.createUser.address.name')} type='text' placeholder={t('users.createUser.address.placeholder')} />
                <Field component={renderInputField} col='col-md-6' validate={email} label={t('users.createUser.email.label')} name={t('users.createUser.email.name')} type='text' placeholder={t('users.createUser.email.placeholder')} />
                <Field component={renderInputField} col='col-md-6' validate={[number, phoneNumber]} label={t('users.createUser.phoneNumber.label')} name={t('users.createUser.phoneNumber.name')} type='number' placeholder={t('users.createUser.phoneNumber.placeholder')} />
                <Field component={renderInputField} col='col-md-6' label={t('users.createUser.company.label')} name={t('users.createUser.company.name')} type='text' placeholder={t('users.createUser.company.placeholder')} />
            </div>
            <div className='d-flex flex-row-reverse'>
                <button type="reset" className='btn btn-secondary mx-1 col-md-2' onClick={reset}  >{t('users.createUser.reset')}</button>
                <button type="submit" className='btn btn-primary mx-1 col-md-2' disabled={submitting || pristine} >{t('users.createUser.submit')}</button>
            </div>
        </form>
    );
}

export default reduxForm({ form: 'createUserForm' })(CreateUserForm);