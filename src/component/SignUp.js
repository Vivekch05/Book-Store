import React, { Component } from 'react';
import './SignUp.css';
import SignUpHandler from './SignUpHandler';
class SignUp extends Component {
    state = {
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        dispResponce:false
    }

    handleChange = (e) => {
         this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e) =>{
        this.setState({dispResponce:true});
        e.preventDefault();
    }
    render() {
        const responce= this.state.dispResponce===true? <SignUpHandler FirstName={this.state.firstname}
        LastName={this.state.lastname} Email={this.state.email} Password={this.state.password} /> : "";
        return (
            <div>
            <form className="form-modifier" onSubmit={this.handleSubmit}>
                <h1>Welcome in SignUp Page</h1>
                <label>First Name: <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}/></label><br /><br />
                <label>Last Name: <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}/></label><br /><br />
                <label>Email Id: <input name="email" value={this.state.email} onChange={this.handleChange}/></label><br /><br />
                <label>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></label><br /><br />
                <input type="submit" value="Submit" />
            </form><br/>
            {responce}
            </div>
        )
    }
}
export default SignUp;  