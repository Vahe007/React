import React, { Component } from 'react';
import Button from '../Button';
import Links from '../Links';
import styles from './Header.module.css';

export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={this.props.state ? styles.top1 : styles.top}>
                    <Button state={true} handleClick = {this.props.handleSideBar} title="Arrow" />
                    <Links />
                </div>
            </header>
        )
    }
}

export default Header
