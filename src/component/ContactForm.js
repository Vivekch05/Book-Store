import React, { Component } from 'react';
import './BookStore.css';
class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) =>{
        e.preventDefault();

    }
    render() {
        return (
            <div className="contact-form-head">
                <h1>Contact Form</h1>
                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <label><b>Name:</b>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label>
                    <label><b>Email:</b>
                        <input name="email" value={this.state.email} onChange={this.handleChange} /></label>
                    <label><b>Subject:</b>
                        <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} /></label>
                    <label><b>Message:</b>
                        <textarea type="text" name="message" value={this.state.message} onChange={this.handleChange} /></label>
                    <span><input type="reset" value="Clear"/>
                    <input type="submit" value="Send Message"/></span>
                </form>
            </div>
        )
    }
}

export default ContactForm;