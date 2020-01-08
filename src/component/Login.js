import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
    render() {
        return (
            <div className="login-modifier">
                <h1>Welcome in Login Page</h1>
                <form>
                    <label>Email:<input name="email" /></label><br /><br />
                    <label>Password:<input type="password" name="password" /></label><br /><br />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
export default Login;  