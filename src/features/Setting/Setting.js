import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import FR from './../../assets/fr.png';
import AR from './../../assets/ar.png';
import EN from './../../assets/en.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Setting = (props) => {
  const { t, i18n } = useTranslation('common');
  const options = [
    {
      value: 'fr',
      label: (
        <span>
          <img src={FR} /> <i className="p-2">{t('setting.language.languages.fr')}</i>
        </span>
      ),
    },
    {
      value: 'en',
      label: (
        <span>
          <img src={EN} /> <i className="p-2">{t('setting.language.languages.en')}</i>
        </span>
      ),
    },
    {
      value: 'ar',
      label: (
        <span>
          <img src={AR} /> <i className="p-2">{t('setting.language.languages.ar')}</i>
        </span>
      ),
    },
  ];

  const changeLG = (e) => {
    const newlanguage = e.value;
    i18n.changeLanguage(newlanguage);
    newlanguage === "ar" ?
      document.body.style.direction = "rtl" : document.body.style.direction = "ltr";

  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body card-primary card-outline d-flex flex-column">
              <div className="d-flex flex-row">
                <h5 className="card-title ">{t('setting.language.title')}</h5>
                <FontAwesomeIcon icon='language' className=" mx-2" />
              </div>
              <div className="card-text">
                <form>
                  <div className="col-12 form-group d-flex flex-column">
                    <label className="d-flex flex-row ">{t('setting.language.setLanguageLabel')}</label>
                    <Select
                      onChange={changeLG}
                      defaultValue={options.filter(
                        (option) => option.value === i18n.language
                      )}
                      options={options}
                    />
                    <small id="emailHelp" className="form-text text-muted d-flex flex-row ">
                      {t('setting.language.comment')}
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
