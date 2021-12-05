import SideBar from '../SideBar';
import React, { Component } from 'react';
import styles from './Main.module.css';


class Main extends Component {
    render() {
        return (
            <main className={styles.main}>
                <div className={this.props.state ? styles.content1 : styles.content}></div>
                <SideBar state1={this.props.state} />
            </main>
        )
    }
}

export default Main;