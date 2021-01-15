import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import isEmpty from 'lodash.isempty';
import {
  getAllUsers,
  searchForUsers,
  deleteUser,
  updateUser,
  getUser,
} from './Action';
import './Users.scss';
import UserFrom from '../../../components/forms/UserFrom';
import UserUpdateFrom from '../../../components/forms/UserUpdateFrom';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import Table from '../../../components/Table/Table';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: {},
    };
    this.searchForUser = this.searchForUser.bind(this);
    this.updateUserData = this.updateUserData.bind(this);
  }

  componentDidMount() {
    this.getUsers(50, 1);
  }

  getUsers(perPage, page) {
    this.props.getAll(perPage, page);
  }

  searchForUser(value) {
    const { search } = this.props;
    this.setState({
      ...this.state,
      searchCriteria: value,
    });
    search(value);
  }

  updateUserData(value) {
    const { updateUser } = this.props;
    updateUser(value);
  }

  renderSearchForm(t) {
    return (
      <div className="my-2">
        <UserFrom form="userSearch" onSubmit={this.searchForUser} t={t} />
      </div>
    );
  }

  renderSearchedCriteria(t) {
    const {
      searchCriteria: { name, email, company, phoneNumber },
    } = this.state;

    return (
      <>
        {!isEmpty(this.state.searchCriteria) && (
          <div className=" my-2 py-2 d-flex flex-row mx-2 border-bottom">
            <dl className="d-flex flex-row  mb-0 ">
              <dt className="align-self-center text-dark">
                {t('users.users.search.searchCirteria')}
              </dt>
              <dd className="align-self-center">
                {name && (
                  <strong className=" badge badge-success h-100 mx-1">
                    {name}
                  </strong>
                )}
                {email && (
                  <strong className=" badge badge-success h-100  mx-1">
                    {email}
                  </strong>
                )}
                {phoneNumber && (
                  <strong className=" badge badge-success h-100 mx-1">
                    {phoneNumber}
                  </strong>
                )}
                {company && (
                  <strong className=" badge badge-success h-100 mx-1">
                    {company}
                  </strong>
                )}
              </dd>
            </dl>
          </div>
        )}
      </>
    );
  }

  renderUsers() {
    const { t, getUser, users } = this.props;
    return (
      <div className=" my-2">

        <div className="card col-md-12 mt-2">

          {this.renderSearchedCriteria(t)}

          <div className="row card-body pt-0">
            <Table users={users} t={t} getUser={getUser} />
            {this.renderDeleteUserModal()}
            {this.renderUpdateUserModal()}
          </div>
        </div>
      </div>
    );
  }

  renderDeleteUserModal() {
    const { t, deleteUser, user } = this.props;
    return (
      <div
        className="modal fade"
        id="deleteUserModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{t('users.users.search.modal.delete.title')}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                {t('users.users.search.modal.delete.description')}
                <strong className=" mx-2 text-danger">{user.name}</strong>
              </p>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-primary "
                data-dismiss="modal"
                onClick={() => deleteUser(user.id)}
              >
                {t('users.users.search.modal.delete.agree')}
              </button>
              <button
                type="button"
                className="btn btn-secondary "
                data-dismiss="modal"
              >
                {t('users.users.search.modal.delete.deny')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderUpdateUserModal() {
    const { t, user } = this.props;
    console.log("user :", user);
    return (
      <div
        className="modal fade"
        id="updateUserModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">
              <h5 className="modal-title">{t('users.users.search.modal.update.title')}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <UserUpdateFrom
                form="updateUser"
                onSubmit={this.updateUserData}
                t={t}
                initialValues={user}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSearchResultSummary(usersSize) {
    const { t } = this.props;
    return (
      <h6 className="d-flex flex-row ">
        {t('users.users.search.searchResult')}{' '}
        <span className="badge badge-primary">{usersSize}</span>
      </h6>
    );
  }

  render() {
    const {
      t,
      loading,
      users,
    } = this.props;
    return (
      <div className="container-fluid ">
        {this.renderSearchForm(t)}
        {loading ? (
          <LoadingSpinner />
        ) : (
            <Fragment>
              {this.renderSearchResultSummary(users.length)}
              {this.renderUsers()}
            </Fragment>
          )}
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array,
  user: PropTypes.object,
  loading: PropTypes.bool,
  getAll: PropTypes.func,
  search: PropTypes.func,
  deleteUser: PropTypes.func,
  updateUser: PropTypes.func,
};

Users.defaultProps = {
  users: [],
  loading: false,
  getAll: () => console.log('get all users'),
  search: () => console.log('searh for users'),
  deleteUser: () => console.log('delete user'),
  updateUser: () => console.log('update user'),
  getUser: () => console.log('get a single user'),
};

const mapStateToProps = (state) => {
  return {
    users: state.appReducers.users.users,
    user: state.appReducers.users.user,
    loading: state.appReducers.users.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAll: (perPage, page) => dispatch(getAllUsers(perPage, page)),
  search: (criteria) => dispatch(searchForUsers(criteria)),
  deleteUser: (userId) => dispatch(deleteUser(userId)),
  updateUser: (user) => dispatch(updateUser(user)),
  getUser: (userId) => dispatch(getUser(userId)),
});

Users = connect(mapStateToProps, mapDispatchToProps)(Users);
export default withTranslation()(Users);
