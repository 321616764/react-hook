import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router} from 'react-router-dom'
import * as Echarts from 'echarts'
import {Provider} from 'react-redux'

React.echarts = Echarts;
React.getNum = function(num){
	return Number(num)*2
}
ReactDOM.render(
	// <Provider>
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	// </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
