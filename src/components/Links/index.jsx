import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Links.module.css';

class Links extends Component {
    render() {
        return (
            <nav className={styles.links}>
                <NavLink className={styles.link} to="/">Home</NavLink>
                <NavLink className={styles.link} to="/Login">Login</NavLink>
                <NavLink className={styles.link} to="/Products">Products</NavLink>
                <NavLink className={styles.link} to="/Users">Users</NavLink>
            </nav>
        )
    }
}

export default Links
