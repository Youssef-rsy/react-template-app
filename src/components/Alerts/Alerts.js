import React from 'react'
import { connect } from 'react-redux';
import './Alerts.scss';
import { hideAlert } from './Action';
import { useTranslation } from 'react-i18next'

const Alerts = props => {
    const { t } = useTranslation();
    const { show, hide } = props;
    return (
        <div className={`alert alert-success alert-dismissible fade ${show ? 'd-block show' : ' d-none'}`} role="alert">
            {t('component.alert.success-operation')}
            <button type="button" className="close" onClick={() => hide()}>
                <span >&times;</span>
            </button>
        </div >
    )
};


const mapStateToProps = state => {
    return {
        show: state.common.alert.show,
    };
};

const mapDispatchToProps = dispatch => ({
    hide: () => dispatch(hideAlert()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Alerts);