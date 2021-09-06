import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router} from 'react-router-dom'
import * as Echarts from 'echarts'
import {Provider} from 'react-redux'
import initStore from './store'
const store = initStore();

export const publicDispatch = store.dispatch

React.echarts = Echarts;
React.getNum = function(num){
	return Number(num)*2
}
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
 //  <React.StrictMode>
	// <App />
 //  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
