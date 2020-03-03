import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { productReducer } from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();

const rootReducer = combineReducers({ productReducer })

const store = 
	createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

// const initialState = {};
// if (localStorage.getItem("cartItems")) {

//   initialState.cart = {
//     cartItems: JSON.parse(localStorage.getItem("cartItems"))
//   };
// }

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
