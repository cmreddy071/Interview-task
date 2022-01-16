import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css';
import MainPage from './components/MainPage';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<MainPage />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
