import React from "react"
import { Field, reduxForm } from "redux-form";
import { renderInputField } from './../../../utilities/form/formField'
import { required, email, phoneNumber, number } from './../../../utilities/form/formValidation'

const CreateUserForm = props => {

    const { t, handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="row w-100 d-inline-flex">
                <Field component={renderInputField} col='col-md-6' validate={required} label='Full Name' name='name' type='text' placeholder='Enter user full name' />
                <Field component={renderInputField} col='col-md-6' label='Address' name='address' type='text' placeholder='Enter user addresse' />
                <Field component={renderInputField} col='col-md-6' validate={email} label='Email' name='email' type='text' placeholder='Enter user email' />
                <Field component={renderInputField} col='col-md-6' validate={[number, phoneNumber]} label='Phone-number' name='phoneNumber' type='number' placeholder='Enter user phone number' />
                <Field component={renderInputField} col='col-md-6' label='Company name' name='company' type='text' placeholder='Enter user company name' />
            </div>
            <div className='d-flex flex-row-reverse'>
                <button type="submit" className='btn btn-primary mx-1 col-md-2' disabled={submitting || pristine} >Save</button>
                <button type="reset" className='btn btn-secondary mx-1 col-md-2' onClick={reset}  >Reset</button>
            </div>
        </form>
    );
}

export default reduxForm({ form: 'createUserForm' })(CreateUserForm);