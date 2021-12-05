import React, { Component } from 'react';
import styles from './SideBar.module.css';
class SideBar extends Component {
    render() {
        const {title, state} = this.props;
        return (
            <sidebar className={state ? styles.sideBar : styles.sideBar1}></sidebar>
        )
    }
}

export default SideBar
