import React, { Component } from 'react';

class SignUpHandler extends Component {
    // state = {
    //     display: false,
    //     cancle: false

    // }
    // handleDisplay = () => {
    //     this.setState({ display: true });
    // }

    // handleCancle = () => {
    //     this.setState({ cancle: true })
    // }

    render() {
        return (
            <div>
                <h1>Your Responce Is Recorded</h1>
                {/* <p>You Want To See Your Response</p>
                <button onClick={handleDisplay}>Display</button>
                <button onClick={handleCancle}>Cancle</button> */}
                <p>FirstName:{this.props.FirstName}</p>
                <p>LastName:{this.props.LastName}</p>
                <p>Email:{this.props.Email}</p>
                <p>Password:{this.props.Password}</p>
            </div>
        )
    }
}
export default SignUpHandler;