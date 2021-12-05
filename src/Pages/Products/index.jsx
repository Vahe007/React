import React, { Component } from 'react';
import styles from './Products.module.css';
import SideBar from '../../components/SideBar';

class Products extends Component {
    render() {
        const { products, products1 } = styles;
        return (
            <login>
                <div className={this.props.state ? products : products1}>
                    <h2>Products</h2>
                </div>
                <SideBar state={this.props.state} />
            </login>
        )
    }
}

export default Products;
