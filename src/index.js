import React from "react";
import ReactDom from "react-dom";
import App from './App';
import { createStore,applyMiddleware } from 'redux';
import reducer from "./reducers/reducer";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(thunk));
ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));