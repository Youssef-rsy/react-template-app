import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserTable = (props) => {
  const { t, users, getUser } = props;

  return (
    <table className="table table-striped table-responsive p-2">
      <thead>
        <tr>
          <th scope="col">{t('users.users.search.table.name')}</th>
          <th scope="col">{t('users.users.search.table.email')}</th>
          <th scope="col">{t('users.users.search.table.phoneNumber')}</th>
          <th scope="col">{t('users.users.search.table.address')}</th>
          <th scope="col">{t('users.users.search.table.company')}</th>
          <th scope="col">{t('users.users.search.table.operation')}</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            {/* <th scope="row">{user.id}</th> */}
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>
              {user.address.city
                .concat(' ')
                .concat(user.address.state)
                .concat(',')
                .concat(user.address.country)}
            </td>
            <td>{user.company.name}</td>
            <td className="d-felx flex-row">
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#deleteUserModal"
                onClick={() => getUser(user.id)}
              >
                <FontAwesomeIcon
                  icon="user-minus"
                  className="text-danger nav-icon d-flex align-self-begin mx-1"
                />
              </button>
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#updateUserModal"
                onClick={() => getUser(user.id)}
              >
                <FontAwesomeIcon
                  icon="user-edit"
                  className="text-info nav-icon d-flex align-self-begin mx-1"
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
