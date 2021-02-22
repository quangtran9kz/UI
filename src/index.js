import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Welcome from'./components/welcome';
import Test from './components/test';
ReactDOM.render(
  <div>
  <Welcome age="18" name="TNVQ" gender="nam">quangtran9kz</Welcome>
  <Test number1={1} number2={3}></Test>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
