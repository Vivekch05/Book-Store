import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './BookStore.css';
import { adminBookCreate } from '../actions/action';

class AdminBookCreate extends Component {
    state = {
        name: "",
        price: 0,
        pages: 0,
        category: "",
        author: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.adminBookCreate1(this.state);
        //this.props.history.push('./ManageBooks');
        console.log("stateeeeeeeeeeee", this.state);
    }
    render() {
        return (
            <div>
                <h1>Admin-Create Book Details</h1>
                <div className="admin-book-head"><h1>Create-Book</h1>
                    <form className="admin-book" onSubmit={this.handleSubmit}>
                        <label>Name:<input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name" /></label>
                        <label>Price:<input type="number" name="price" onChange={this.handleChange} value={this.state.price} placeholder="Price" /></label>
                        <label>Pages:<input type="number" name="pages" onChange={this.handleChange} value={this.state.pages} placeholder="Pages" /></label>
                        <label>Category:
                    <select name="category" onchange={this.handleChange} value={this.state.category} >
                                <option selected value="technical">Technical</option>
                                <option value="children">Children</option>
                                <option value="academic">Academic</option>
                                <option value="others">Others</option>
                            </select></label>
                        <label>Author:<input type="text" name="author" onChange={this.handleChange} value={this.state.author} placeholder="Author" /></label>
                        <span><input type="submit" value="Save Books" /></span>
                    </form>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        adminBookCreate1: (state) => { dispatch(adminBookCreate(state)) }
    }
}
export default withRouter(connect(null, mapDispatchToProps)(AdminBookCreate));
