import React, { Component } from 'react';
import './ManageBooks.css';
class ManageBooks extends Component {
    render() {
        return (
            <div>
                <h1>Admin-Manage Books</h1>
                <button>Create Book</button>
                <table className="manage-books">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Edit</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Vivek</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default ManageBooks;