import React, { Component } from 'react';
// import Cart from './Cart';
import { connect } from 'react-redux';
import { anotherData, currentData } from '../actions/action';
import './Books.css';
class Books extends Component {

    async componentDidMount() {
        this.props.changeData();
    }

    handleClick = (e) => {
        this.props.currentDataItem(e);
    }

    render() {
        console.log(this.props.mydata);
        return (
            <div>
                <h1>Book</h1><hr />
                <div className="book-box-modifier">
                    {
                        this.props.mydata.map((item, index) => {
                            console.log(item);
                            return (
                                <div className="book-modifier">
                                    <table>
                                        <tr><th>{item.id}</th></tr>
                                        <tr>Price:<td>{item.price}</td></tr>
                                        <tr>Author:<td>{item.title}</td></tr>
                                        <tr>Pages:<td>{item.pages}</td></tr>
                                    </table>
                                    <button id={item.id} onClick={this.handleClick}>Cart+</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        mydata: state.data,
        // currentItem1: state.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeData: () => { dispatch(anotherData()) },
        currentDataItem: (e) => { dispatch(currentData(e)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);