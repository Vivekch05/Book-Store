import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class OrderDetails extends Component {
    render() {
        console.log("hahahahahahahahahahahahahahaha");
        const { checkOutState } = this.props;
        return (
            <div>
                <h1>Order Details</h1>
                <div className="order-details">
                    <p><b>Order Id:</b></p>
                    <p><b>Amount:</b>{this.props.totalAmount}</p>
                    <p><b>Items:</b>{this.props.totalItem}</p>
                </div>
                {
                    [checkOutState].map(item => {
                        return (
                            <div className="order-details-address">
                                <span>{item.fullName},</span>
                                <span>{item.address},</span>
                                <span>{item.phone}</span>
                            </div>
                        )
                    })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state......vk", state)
    return {
        checkOutState: state.checkOutState,
        totalItem: state.totalItem,
        totalAmount: state.totalAmount
    }
}
export default withRouter(connect(mapStateToProps)(OrderDetails)); 
