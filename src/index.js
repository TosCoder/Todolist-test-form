import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'moment/locale/th'
import App from './App';
import 'antd/dist/antd.css' 
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './store'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
)
