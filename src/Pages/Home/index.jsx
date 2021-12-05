import React, { Component } from 'react';
import styles from './Home.module.css';
import SideBar from '../../components/SideBar';
import {BaseURL} from "../../constants";

class Home extends Component {
    render() {
        const { home, home1 } = styles;
        return (
            <home>
                <div className={this.props.state ? home : home1}>
                    <h2>Home</h2>
                </div>
                <SideBar state={this.props.state} />
            </home>
        )
    }
}

export default Home;
