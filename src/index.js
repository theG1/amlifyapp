import React from 'react';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reducer from './reducer/index';
import App from './component/App'
import './index.css';

const store = configureStore(reducer,{
	"todos" : [
		{"id":1, "todo":"빨래하기", "complete":false},
		{"id":2, "todo":"청소하기", "complete":false},
		{"id":3, "todo":"공부하기", "complete":false}
	]
});

const render = () => {
  ReactDOM.render(
  	<Provider store={store}>
	    <App/>
    </Provider>,
    document.getElementById('root')
  )
};

store.subscribe(render);
render();



//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
