import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInputField } from '@utilities/form/formField';
import {
  required,
  email,
  number,
  phoneNumber,
} from '@utilities/form/formValidation';

const UserForm = (props) => {
  const { t, handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="card w-100">
      <div className="card-header d-inline-flex py-1">
        <a
          data-toggle="collapse"
          href="#collapseExample"
          aria-expanded="true"
          aria-controls="collapseExample"
          className="d-flex mx-1 w-100 card-header-collapse pt-1"
        >
          <h6 className="d-flex align-self-center mx-1  ">
            {t('users.users.search.title')}
            <FontAwesomeIcon
              icon="filter"
              className="d-flex align-self-begin "
            />
          </h6>
        </a>
      </div>
      <div className=" card-body collapse show" id="collapseExample">
        <form className=" d-flex flex-column" onSubmit={handleSubmit}>
          <div className="row ">
            <Field
              col="col-md-3"
              component={renderInputField}
              validate={required}
              type="text"
              id={t('users.users.search.name.name')}
              name={t('users.users.search.name.name')}
              placeholder={t('users.users.search.name.placeholder')}
              label={t('users.users.search.name.label')}
            />
            <Field
              col="col-md-3"
              component={renderInputField}
              validate={email}
              type="text"
              id={t('users.users.search.email.name')}
              name={t('users.users.search.email.name')}
              placeholder={t('users.users.search.email.placeholder')}
              label={t('users.users.search.email.label')}
            />
            <Field
              col="col-md-3"
              component={renderInputField}
              validate={[number, phoneNumber]}
              type="text"
              id={t('users.users.search.phoneNumber.name')}
              name={t('users.users.search.phoneNumber.name')}
              placeholder={t('users.users.search.phoneNumber.placeholder')}
              label={t('users.users.search.phoneNumber.label')}
            />
            <Field
              col="col-md-3"
              component={renderInputField}
              type="text"
              id={t('users.users.search.company.name')}
              name={t('users.users.search.company.name')}
              placeholder={t('users.users.search.company.placeholder')}
              label={t('users.users.search.company.label')}
            />
          </div>
          <div className="px-0 col-md-12 d-flex flex-row-reverse">
            <button
              type="reset"
              className="btn btn-secondary col-md-2 mx-1"
              onClick={reset}
              disabled={pristine || submitting}
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
      </div>
    </div>
  );
};

export default reduxForm({})(UserForm);
