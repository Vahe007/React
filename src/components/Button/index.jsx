import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
    render() {
        const {title, handleClick, state} = this.props;
        return (
            <button onClick={handleClick} disabled={this.props.state ? false : true} onClick = {handleClick} className = {styles.button}>{title}</button>
        )
    }
}

export default Button
