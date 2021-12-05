import React, { Component } from 'react'
import Header from "./components/Header";
import Products from './Pages/Products';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './Pages/Users';
import { baseURL } from './constants';

export class App extends Component {

  constructor() {
    super();
  }
  state = {
    isOpen: false,
    users: [],
  }
  handleSideBar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleClick = () => {
    fetch(`${baseURL}users`).then(response => {
      return response;
    })
    .then(promise => {
      return promise.json();
    })
    .then(data => {
      this.setState({users: data});
    })
  }
  render() {
    console.log(this.state.users);
    return (
      <BrowserRouter>
        <Header state={this.state.isOpen} handleSideBar={this.handleSideBar} />
        <Routes>
          <Route path="/" element={<Home state={this.state.isOpen} />}></Route>
          <Route path="/login" element={<Login state={this.state.isOpen} />}></Route>
          <Route path="/products" element={<Products state={this.state.isOpen} />}></Route>
          <Route path="/users" element={<Users data={this.state.users} handleClick={this.handleClick} state={this.state.isOpen} />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>

      </BrowserRouter>


    )
  }
}
export default App
