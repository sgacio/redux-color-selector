import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { allReducers } from './reducers/index'

const store = createStore(
  allReducers,
  {
    Hue: Math.ceil(Math.random() * 360),
    Saturation: Math.ceil(Math.random() * 100),
    Lightness: Math.ceil(Math.random() * 100)
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
