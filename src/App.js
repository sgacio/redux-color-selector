import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { useSelector, useDispatch } from 'react-redux'

import { HueAction } from './actions/index'
const dispatch = useDispatch()
const hueState = useSelector(state => state.Hue)

class App extends Component {
  render() {
    return (
      <>
        <input
          type="range"
          min="0"
          max="360"
          value={hueState}
          onChange={e => dispatch(HueAction)}
        />
        <HelloWorld />
      </>
    )
  }
}

export default App
