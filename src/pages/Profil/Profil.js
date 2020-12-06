import DisplayInfos from './../../components/shared/DisplayInfos/DisplayInfos';
import React from 'react';
import { useTranslation } from 'react-i18next';
import faker from "faker";

const Profil = () => {
  console.log(faker);
  const { address, name, phone: { phoneNumber }, image
  } = faker;
  const { t } = useTranslation('common');

  const getAddress = () => {
    return address.zipCode() + ',' + address.streetName() + ' ' + address.streetAddress() + ' , ' + address.city() + ' ' + address.country();
  }

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="card card-primary card-outline">
              <img className="card-img-top p-3 rounded" src={image.imageUrl()} alt="user image" />
              <div className="card-body border-top">
                <h6 className="card-title">{name.firstName() + '  ' + name.lastName()}</h6>
                <p className="card-text">{name.jobTitle()}</p>
              </div>
              <div className="rta-hr"></div>
              <div className="card-body ">
                <a href="#" className="btn btn-outline-primary ">{t('profil.changePassword')}</a>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h6 className="m-0">{t('profil.personal.title')}</h6>
              </div>
              <div className="card-body">
                <DisplayInfos label={t('profil.personal.firstName')} value={name.firstName()} disabled="true" />
                <DisplayInfos label={t('profil.personal.lastName')} value={name.lastName()} disabled="true" />
                <DisplayInfos label={t('profil.personal.gender')} value="Homme" disabled="true" />
                <DisplayInfos label={t('profil.personal.birthDay')} value="25/10/1992" disabled="true" />
                <DisplayInfos label={t('profil.personal.address')} value={getAddress()} disabled="true" />
                <DisplayInfos label={t('profil.personal.phoneNumber')} value={phoneNumber()} disabled="true" />
              </div>
              <div className="card-header">
                <h6 className="m-0">{t('profil.professional.title')}</h6>
              </div>
              <div className="card-body">
                <DisplayInfos label={t('profil.professional.team')} value="DEV" disabled="true" />
                <DisplayInfos label={t('profil.professional.post')} value={name.jobTitle()} disabled="true" />
                <DisplayInfos label={t('profil.professional.status')} value="ONBOARDING" disabled="true" />
                <DisplayInfos label={t('profil.professional.integrationDate')} value="12/12/2016" disabled="true" />
              </div>
              <div className="card-header">
                <h6 className="m-0">{t('profil.agency.title')}</h6>
              </div>
              <div className="card-body">
                <DisplayInfos label={t('profil.agency.town')} value={address.city()} disabled="true" />
                <DisplayInfos label={t('profil.agency.address')} value={getAddress()} disabled="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
export default Profil;
