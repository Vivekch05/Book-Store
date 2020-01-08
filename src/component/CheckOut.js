import React, { Component } from 'react';
import './CheckOut.css';
class CheckOut extends Component {
    
    render() {
        return (
            <div>
                <h1>Checkout</h1>
                <h3>Checkout</h3>
                <p>Total Amount:{}</p>
                <p>Total Items:{}</p><br />
                <form className="formHandler">
                    <label>Full Name:<input type="text" name="name" onChange={this.handleChange} /></label>
                    <label>Address:<textarea type="text" name="address" onChange={this.handleChange} /></label>
                    <label>Phone:<input type="number" name="phone" onChange={this.handleChange}/>
                    <button>Place Order</button></label>
                </form>
            </div>
        )
    }
}
export default CheckOut;