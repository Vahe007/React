import React, { Component } from 'react';
import styles from './Login.module.css';
import SideBar from '../../components/SideBar';
// import Input from '../../components/Input';
import Button from '../../components/Button';

class Login extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log("This component is alive");
    }
    componentWillUnmount() {
        console.log("This compoentn is gone");
    }
    state = {
        login: false,
        password: false,
        btn: false,
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        if (value === "") {
            this.setState({ [name]: true });
        }
        else {
            this.setState({ [name]: false });
        }

    }
    render() {
        const { container, container1, login, login1 } = styles;
        return (

            <login>
                <div className={this.props.state ? container : container1}>
                    {/* <Input handleChange={this.handleChange} state={this.state.login} type="text" placeholder="Enter Login" />
                    <Input type="password" state={this.state.login} placeholder="Enter Password" /> */}

                    <input onChange={this.handleChange} name="login" className={this.state.login ? login1 : login} type="text" placeholder="Enter Login"></input>
                    <input onChange={this.handleChange} name="password" className={this.state.password ? login1 : login} type="password" placeholder="Enter Password"></input>
                    <Button state={this.state.btn} title="Enter" />
                </div>
                <SideBar state={this.props.state} />
            </login>
        )
    }
}

export default Login
