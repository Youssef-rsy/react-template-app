import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import FR from './../../assets/fr.png';
import AR from './../../assets/ar.png';
import EN from './../../assets/en.png';

const options = [
  {
    value: 'fr',
    label: (
      <span>
        <img src={FR} /> <i className="p-2">Français</i>
      </span>
    ),
  },
  {
    value: 'en',
    label: (
      <span>
        <img src={EN} /> <i className="p-2">Anglais</i>
      </span>
    ),
  },
  {
    value: 'ar',
    label: (
      <span>
        <img src={AR} /> <i className="p-2">Arabe</i>
      </span>
    ),
  },
];

const Setting = (props) => {
  const { t, i18n } = useTranslation('common');

  const changeLG = (e) => {
    const newlanguage = e.value;
    i18n.changeLanguage(newlanguage);
  };
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body card-primary card-outline">
                <h5 className="card-title">{t('setting.language.title')}</h5>
                <div className="card-text">
                  <form>
                    <div className="col-12 form-group">
                      <label>
                        {t('setting.language.setLanguageLabel')}
                      </label>
                      <Select
                        onChange={changeLG}
                        defaultValue={options.filter(
                          (option) => option.value === i18n.language
                        )}
                        options={options}
                      />
                      <small id="emailHelp" className="form-text text-muted ">
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
    </div>
  );
};
export default Setting;
