import React,{Component} from 'react';
import './ContactForm.css';
class ContactForm extends Component {
    state={
        name:"",
        email:"",
        subject:"",
        message:""
    }
    handleChange = (e) =>{
     this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <div className="contact-form">
                <h1>Contact Form</h1>
                <form>
                    <label>Name:<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label><br /><br />
                    <label>Email:<input  name="email"  value={this.state.email} onChange={this.handleChange} /></label><br /><br />
                    <label>Subject:<input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} /></label><br /><br />
                    <label>Message:<textarea type="text" name="message" value={this.state.message} onChange={this.handleChange} /></label><br /><br />
                    <button>Clear</button>
                    <button>Send Message</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;