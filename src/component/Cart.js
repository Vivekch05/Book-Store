import React, { Component } from 'react';
import './Cart.css';
import { connect } from 'react-redux';
// import CheckOut from './CheckOut';
import {withRouter} from 'react-router-dom'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { currentData } from '../actions/action';
class Cart extends Component {

    handleCheckout = ()=>{
        this.props.history.push('./CheckOut')
    }

    render() {


        // console.log("++++++++++", this.props);
        const { currentItem1 } = this.props;
        console.log({ currentItem1 });
        const result = [];
        const map = new Map();
        for (const item of currentItem1) {
            let count = currentItem1.filter((obj) => obj.id === item.id).length;
            if (!map.has(item.id)) {
                map.set(item.id)
                result.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    category: item.category,
                    qty: count,
                    total: 0
                })
            }
        }

        const handleRemove = (e) => {
            for (const item of result) {
                if (e.target.id === item.id) {
                    result.pop(e.target.id);
                    console.log("result", result);

                }
            }
            getContent(result);

        }



        let totalItem = 0;
        let totalAmount = 0;
        const getContent = (result1) => {

            return (
                result1.map((item, index) => {

                    let total = (item.category) === "Technical" ?
                        (item.qty) * (item.price) - ((item.qty) * (item.price) * 10) / 100 : (item.qty) * (item.price);

                    let category = (item.category) === "Technical" ? "10%" : ""

                    totalItem = totalItem + (item.qty);
                    totalAmount = totalAmount + total;

                    return (
                        item.length !== 0 &&

                        <tr>
                            <td>{item.id}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>{item.category}</td>
                            <td>{category}</td>
                            <td>{total}</td>
                            <td>
                                <button id={item.id} onClick={handleRemove}>Remove</button>
                            </td>
                        </tr>

                    )

                })
            );
        }

        return (
            <div>
                <h1>Cart</h1><hr />
                <table className="cart">
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Category</th>
                        <th>Discount</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                    {getContent(result)}
                </table>
                <h1>Cart Summary</h1>
                <p>Total Amount :{totalAmount}</p>
                <p>Total Item:{totalItem}</p>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentItem1: state.currentItem,
        result1:state.result
    }
}
export default withRouter(connect(mapStateToProps)(Cart));