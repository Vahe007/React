import React, { Component } from 'react'
import styles from './Input.module.css';
class Input extends Component {
    render() {
        const {type, placeholder, state, handleChange} = this.props;
        const {input, input1} = styles;
        return (
            <div>
                <input onChange={handleChange} className={state ? input1 : input} type={type} placeholder={placeholder}></input>
            </div>
        )
    }
}

export default Input
