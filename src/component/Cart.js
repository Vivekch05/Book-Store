import React, { Component } from 'react';
import './Cart.css';
import { connect } from 'react-redux';
class Cart extends Component {

    render() {
        console.log("++++++++++", this.props);
        const { currentItem1 } = this.props;
        console.log({ currentItem1 })
        const getContent = (currentItem1) => {
            return (
                currentItem1.map((item, index) => {
                    return (
                        item.length !== 0 &&
                        <tr>
                            <td>{item[0].id}</td>
                            <td>{item[0].price}</td>
                            <td>{" "}</td>
                            <td>{item[0].category}</td>
                            <td>{" "}</td>
                            <td>{item[0].price}</td>
                            <td>
                                <button>Remove</button>
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
                    {getContent(currentItem1)}
                </table>
                <h1>Cart Summary</h1>
                <p>Total Amount :</p>
                <p>Total Item</p>
                <button>Checkout</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentItem1: [...state.currentItem]
    }
}

export default connect(mapStateToProps)(Cart);