import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayInfos from '../../components/DisplayInfos/DisplayInfos';
import { useTranslation } from 'react-i18next';
import { changeUserPassword } from './Action';
import faker from 'faker';

import ChangePasswordForm from './ChangePasswordForm';

const Profil = () => {
  const {
    address,
    name,
    phone: { phoneNumber },
    image,
  } = faker;
  const { t } = useTranslation('common');

  const getAddress = () => {
    return (
      address.zipCode() +
      ',' +
      address.streetName() +
      ' ' +
      address.streetAddress() +
      ' , ' +
      address.city() +
      ' ' +
      address.country()
    );
  };

  const changePassword = (value) => {
    const { changeUserPassword } = props;
    const { password } = value;
    changeUserPassword(userId, password);
  }

  console.log("in profil");

  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="card card-primary card-outline">
            <img
              className="card-img-top p-3 rounded"
              src={image.imageUrl()}
              alt="user image"
            />
            <div className="card-body border-top">
              <h6 className="card-title">
                {name.firstName() + '  ' + name.lastName()}
              </h6>
              <p className="card-text">{name.jobTitle()}</p>
            </div>
            <div className="rta-hr"></div>
            <div className="card-body ">
              <a href="#" className="btn btn-outline-primary " data-toggle="modal" data-target="#exampleModal">
                {t('profil.changePassword')}
              </a>
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Password</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <ChangePasswordForm onSubmit={changePassword} />
              </div>

            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h6 className="m-0">{t('profil.personal.title')}</h6>
            </div>
            <div className="card-body">
              <DisplayInfos
                label={t('profil.personal.firstName.label')}
                name={t('profil.personal.firstName.name')}
                value={name.firstName()}
                disabled={true}
              />
              <DisplayInfos
                label={t('profil.personal.lastName.label')}
                name={t('profil.personal.lastName.name')}
                value={name.lastName()}
                disabled={true}
              />
              <DisplayInfos
                label={t('profil.personal.gender.label')}
                name={t('profil.personal.gender.name')}
                value="Homme"
                disabled={true}
              />
              <DisplayInfos
                label={t('profil.personal.birthDay.label')}
                name={t('profil.personal.birthDay.name')}
                value="25/10/1992"
                disabled={true}
              />
              <DisplayInfos
                label={t('profil.personal.address.label')}
                name={t('profil.personal.address.name')}
                value={getAddress()}
                disabled={true}
              />
              <DisplayInfos
                label={t('profil.personal.phoneNumber.label')}
                name={t('profil.personal.phoneNumber.name')}
                value={phoneNumber()}
                disabled={true}
              />
            </div>
            <div className="card-header">
              <h6 className="m-0">{t('profil.professional.title')}</h6>
            </div>
            <div className="card-body">
              <DisplayInfos
                label={t('profil.professional.team.label')}
                name={t('profil.professional.team.name')}
                value="DEV"
                disabled={true}
              />
              <DisplayInfos
                label={t('profil.professional.post.label')}
                name={t('profil.professional.post.name')}
                value={name.jobTitle()}
                disabled={true}
              />
              <DisplayInfos
                label={t('profil.professional.status.label')}
                name={t('profil.professional.status.name')}
                value="ONBOARDING"
                disabled={true}
              />
              <DisplayInfos
                label={t('profil.professional.integrationDate.label')}
                name={t('profil.professional.integrationDate.name')}
                value="12/12/2016"
                disabled={true}
              />
            </div>
            <div className="card-header">
              <h6 className="m-0">{t('profil.agency.title')}</h6>
            </div>
            <div className="card-body">
              <DisplayInfos
                label={t('profil.agency.city.label')}
                name={t('profil.agency.city.name')}
                value={address.city()}
                disabled={true}
              />
              <DisplayInfos
                label={t('profil.agency.address.label')}
                name={t('profil.agency.address.name')}
                value={getAddress()}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profil.prototype = {
  user: PropTypes.object,
  changeUserpassword: PropTypes.func
}

Profil.defaultProps = {
  user: {},
  changeUserPassword: () => console.log('change Password function'),
}

const mapStaateToProps = state => ({
});
const mapDispatchToProps = (dispatch) => ({
  changeUserPassword: (userId, newPassword) => dispatch(changeUserPassword(userId, newPassword)),
})
export default connect(mapStaateToProps, mapDispatchToProps)(Profil);
