import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, findUser } from './Action';

class Users extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getUsers(10, 1);
  }

  getUsers(perPage, page) {
    this.props.getAll(perPage, page);
  }

  render() {
    const { users } = this.props;
    return (
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-12 mt-2">
            <table className="table p-2">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Address</th>
                  <th scope="col">Company</th>
                  <th scope="col">Operation</th>
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
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.appReducers.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: (perPage, page) => dispatch(getAllUsers(perPage, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
