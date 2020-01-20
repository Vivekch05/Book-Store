import React, { Component } from 'react';
// import Cart from './Cart';
import { connect } from 'react-redux';
import { anotherData, currentData } from '../actions/action';
import './BookStore.css';
class Books extends Component {

    componentDidMount() {
        this.props.changeData();
    }
    handleClick = (e) => {
        this.props.currentDataItem(e);
    }

    render() {
        console.log("mydataaaaa", this.props.mydata);
        return (
            <div>
                <h1>Book</h1><hr />
                <div className="book-list">
                    {
                        this.props.mydata.map((item, index) => {
                            console.log("itemmmmm", item);
                            return (
                                <div>
                                    <h3>{item.id}</h3>
                                    <p>Price:<span>{item.price}</span></p>
                                    <p>Author:<span>{item.author}</span></p>
                                    <p>Pages:<span>{item.pages}</span></p>
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
        mydata: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeData: () => { dispatch(anotherData()) },
        currentDataItem: (e) => { dispatch(currentData(e)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);