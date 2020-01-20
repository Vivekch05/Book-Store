import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './BookStore.css';

class ManageOrders extends Component {
    handleEdit =() =>{
        this.props.history.push('./OrderDeatails')
    }
    render() {
        return (
            <div>
                <h1>Admin - Orders Admin</h1><br />
                <table className="manage-orders">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th style={{width:"215px"}}>Edit</th>
                    </tr>
                    {
                        this.props.result.map(item => {
                            return (
                                <div>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <span style={{width:"215px"}}><button onClick={this.handleEdit}>Details View</button></span>
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
export default withRouter(connect(mapStateToProps)(ManageOrders));