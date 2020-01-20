import React, { Component } from 'react';
import './BookStore.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class ManageBooks extends Component {
    handleEdit = (item) =>{
        console.log("item------",item.id);

        this.props.history.push(`/AdminBookEdit/${item.id}`);
    }
    handleCreate =()=>{
        this.props.history.push("./AdminBookCreate");
    }
    render() {
        return (
            <div>
                <h1>Admin-Manage Books</h1>
                <div className="manage-books-create"><button onClick={this.handleCreate}>Create Book</button></div>
                <table className="manage-books">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th style={{width:"250px"}}>Edit</th>
                    </tr>
                    {
                        this.props.result.map(item => {
                            return (
                                <div>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <span  style={{width:"250px"}}>
                                            <button onClick={() =>this.handleEdit(item)}>Edit</button>
                                            <button>Delete</button>
                                        </span>
                                    </tr>
                                </div>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        result: state.result
    }
}
export default withRouter(connect(mapStateToProps)(ManageBooks));