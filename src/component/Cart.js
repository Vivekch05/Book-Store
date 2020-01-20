import React, { Component } from 'react';
import './BookStore.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { currentResult } from '../actions/action';
class Cart extends Component {

    componentDidMount() {
        if (this.props.result1.length === 0) {
            this.props.changeResult();
        }
    }
    handleCheckout = () => {
        this.props.history.push('./CheckOut')
    }
        
    render() {
        console.log(this.props);
        let totalAmount = this.props.totalAmount;
        let totalItem = this.props.totalItem;
        // const { currentItem1 } = this.props;
        const { result1 } = this.props;
        // console.log({ currentItem1 });
        const handleRemove = (e) => {
            for (const item of result1) {
                if (e.target.id === item.id) {
                    result1.pop(e.target.id);
                    console.log("result", result1);
                }
            }
        }
        const getContent = (result1) => {
            return (
                result1.map((item, index) => {
                    let total = (item.category) === "Technical" ?
                        (item.qty) * (item.price) - ((item.qty) * (item.price) * 10) / 100 : (item.qty) * (item.price);
                    let category = (item.category) === "Technical" ? "10%" : ""
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
                    {getContent(result1)}
                </table>
                <div className="cart-summary">
                    <h1>Cart Summary</h1>
                    <span><b>Total Amount :</b>{totalAmount}</span><br /><br /><br />
                    <span><b>Total Item:</b>{totalItem}</span>
                    <button onClick={this.handleCheckout}>Checkout</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        currentItem1: state.currentItem,
        totalItem: state.totalItem,
        totalAmount: state.totalAmount,
        result1: state.result,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeResult: () => { dispatch(currentResult()) }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));