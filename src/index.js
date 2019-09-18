import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HueReducer } from './reducers/HueReducer'

const store = createStore(
  HueReducer,
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
