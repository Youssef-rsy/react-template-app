import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayInfos from '@components/DisplayInfos/DisplayInfos';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { changeUserPassword } from './Action';
import { Card, Row, Col, Modal, Divider, Descriptions } from 'antd';
const { Meta } = Card;
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
  const [isModalVisible, setIsModalVisible] = useState(false);

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
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container-fluid">
      <Row gutter={16}>
        <Col className="gutter-row" span={7} xs={20} sm={20} md={6} lg={7} xl={7}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={image.imageUrl()}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" onClick={showModal} />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              title={name.firstName() + '  ' + name.lastName()}
              description={name.jobTitle()}
            />
          </Card>
        </Col>

        <Col className="gutter-row" span={17} xs={20} sm={20} md={16} lg={17} xl={17}>
          <Card >
            <Divider >{t('profil.personal.title')}</Divider>
            <Descriptions size="middle">
              <Descriptions.Item label={t('profil.personal.firstName.label')}>{name.firstName()}</Descriptions.Item>
              <Descriptions.Item label={t('profil.personal.lastName.label')}>{name.lastName()}</Descriptions.Item>
              <Descriptions.Item label={t('profil.personal.gender.label')}>Homme</Descriptions.Item>
              <Descriptions.Item label={t('profil.personal.birthDay.label')}>25/10/1992</Descriptions.Item>
              <Descriptions.Item label={t('profil.personal.phoneNumber.label')}>2{phoneNumber()}</Descriptions.Item>
              <Descriptions.Item label={t('profil.personal.birthDay.label')}>25/10/1992</Descriptions.Item>
              <Descriptions.Item label={t('profil.personal.address.label')}>{getAddress()}</Descriptions.Item>
            </Descriptions>
            <Divider >{t('profil.professional.title')}</Divider>
            <Descriptions size="defult">
              <Descriptions.Item label={t('profil.professional.team.label')}>DEV</Descriptions.Item>
              <Descriptions.Item label={t('profil.professional.post.label')}>{name.jobTitle()}</Descriptions.Item>
              <Descriptions.Item label={t('profil.professional.status.label')}>ONBOARDING</Descriptions.Item>
              <Descriptions.Item label={t('profil.professional.integrationDate.label')}>12/12/2016</Descriptions.Item>
            </Descriptions>
            <Divider >{t('profil.agency.title')}</Divider>
            <Descriptions size="small">
              <Descriptions.Item label={t('profil.agency.city.label')}>{address.city()}</Descriptions.Item>
              <Descriptions.Item label={t('profil.agency.address.label')}>{getAddress()}</Descriptions.Item>
            </Descriptions>
          </Card>

        </Col>
      </Row>
      <Modal title={t('profil.changePasswordModal.title')} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ChangePasswordForm onSubmit={changePassword} />
      </Modal>
    </div >
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
