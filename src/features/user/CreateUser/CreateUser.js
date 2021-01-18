import React from "react"
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';
import CreateUserForm from "./CreateUserForm";
import { createUser } from './../Users/Action';
const CreateUser = props => {
    const { t } = useTranslation('common');

    const addUser = (user) => {
        const { createUser } = props;
        createUser(user)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body card-primary card-outline">
                            <h5 className="card-title text-primary d-flex flex-row">{t('users.createUser.title')}</h5>
                            <div className="card-text">
                                <CreateUserForm onSubmit={addUser} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(createUser(user)),
});

export default connect(null, mapDispatchToProps)(CreateUser);