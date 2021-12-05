import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import styles from './Users.module.css';
import Button from '../../components/Button';

export class Users extends Component {

    handleClick() {

    }
    render() {

        const { users1, users, usersContainer } = styles;
        return (
            <div>
                <users className={this.props.state ? users : users1}>
                    <Button handleClick={this.props.handleClick} title="Get Users" state={true} />
                        {this.props.data.map(user => {
                            return <h2>{user.name}</h2>
                        })}
                </users>
                <SideBar state={this.props.state} />
            </div>
        )
    }
}

export default Users;
