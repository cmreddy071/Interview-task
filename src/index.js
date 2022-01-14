import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import HomePage from './components/HomePage';
import Report from './components/Report';
import { store } from './store/store';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/report">
					<Report />
				</Route>
				<Redirect to="/" />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
