import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { renderInputField } from '../../utilities/form/formField';
import {
  required,
  email,
  number,
  phoneNumber,
} from '../../utilities/form/formValidation';

const UserUpdateFrom = (props) => {
  const { t, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form className=" d-flex flex-column" onSubmit={handleSubmit}>
      <div className="row d-flex flex-column p-2">
        <Field
          component={renderInputField}
          validate={required}
          type="text"
          id={t('users.users.search.name.name')}
          name={t('users.users.search.name.name')}
          placeholder={t('users.users.search.name.placeholder')}
          label={t('users.users.search.name.label')}
        />
        <Field
          component={renderInputField}
          validate={email}
          type="text"
          id={t('users.users.search.email.name')}
          name={t('users.users.search.email.name')}
          placeholder={t('users.users.search.email.placeholder')}
          label={t('users.users.search.email.label')}
        />
        <Field
          component={renderInputField}
          validate={[number, phoneNumber]}
          type="text"
          id={t('users.users.search.phoneNumber.name')}
          name={t('users.users.search.phoneNumber.name')}
          placeholder={t('users.users.search.phoneNumber.placeholder')}
          label={t('users.users.search.phoneNumber.label')}
        />
        <Field
          component={renderInputField}
          type="text"
          id={t('users.users.search.company.name')}
          name={t('users.users.search.company.name')}
          placeholder={t('users.users.search.company.placeholder')}
          label={t('users.users.search.company.label')}
        />
        <Field
          component={renderInputField}
          type="hidden"
          id={t('users.users.search.id.name')}
          name={t('users.users.search.id.name')}
        />
      </div>
      <div className="px-0 col-md-12 d-flex flex-row-reverse">
        <button
          type="reset"
          className="btn btn-secondary col-md-2 mx-1"
          onClick={reset}
          disabled={pristine}
        >
          {t('users.users.search.reset')}
        </button>
        <button
          type="submit"
          className="btn btn-primary col-md-2 mx-1 "
          disabled={pristine || submitting}
        >
          {t('users.users.search.submit')}
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(UserUpdateFrom);
