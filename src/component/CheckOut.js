import React, { Component } from 'react';
import './BookStore.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkOutForm } from '../actions/action';
class CheckOut extends Component {
    state = {
        fullName: "",
        address: "",
        phone: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.checkOutFormResult(this.state);
        this.props.history.push('./OrderDeatails')
    }
    render() {
        return (
            <div>
                <div className="checkout">
                    <h1>Checkout</h1>
                    <p><b>Checkout</b></p>
                    <span><b>Total Amount:</b>{this.props.totalAmount}</span><br/><br/>
                    <span><b>Total Items:</b>{this.props.totalItem}</span><br /><br/>
                </div>
                <form className="formHandler" onSubmit={this.handleSubmit}>
                    <label><b>Full Name:</b><input type="text" value={this.state.fullName} name="fullName" onChange={this.handleChange} placeholder="FullName"/></label>
                    <label><b>Address:</b><textarea type="text" value={this.state.address} name="address" onChange={this.handleChange} placeholder="Address" /></label>
                    <label><b>Phone No:</b><input type="number" value={this.state.phone} name="phone" onChange={this.handleChange} placeholder="+91-0123456789" /></label>
                    <span><input type="submit" value="Place Order" /></span>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        totalItem: state.totalItem,
        totalAmount: state.totalAmount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkOutFormResult: (state) => { dispatch(checkOutForm(state)) }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckOut));