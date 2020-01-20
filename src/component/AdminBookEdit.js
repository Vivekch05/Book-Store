import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './BookStore.css';
import { adminBookEdit } from '../actions/action';

class AdminBookEdit extends Component {
    state = {
        name: "",
        price: 0,
        pages: 0,
        category: "",
        author: ""
    }
    componentDidMount() {
        console.log(this.props)
        const { match: { params }, result } = this.props;
        result.map(item => {
            let editItem = item.id === params.id ?
                this.setState({ name: item.name, price: item.price, pages: item.pages, category: item.category, author: item.author }) : ""
            return editItem
        })

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.adminBookEdit1(this.state);
        this.props.history.push('./ManageBokks');

    }
    render() {
        return (
            <div>
                <h1>Admin-Edit Book Details</h1>
                <div className="admin-book-head"><h1>Edit-Book</h1>
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
const mapStateToProps = (state) => {
    return {
        result: state.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        adminBookEdit1: (state) => { dispatch(adminBookEdit(state)) }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminBookEdit));
