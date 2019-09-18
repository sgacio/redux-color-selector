import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import { useSelector, useDispatch } from 'react-redux'

import { HueAction, SaturationAction, LightnessAction } from './actions/index'

const App = () => {
  const dispatch = useDispatch()
  const hueState = useSelector(state => state.Hue)
  const saturationState = useSelector(state => state.Saturation)
  const lightnessState = useSelector(state => state.Lightness)

  return (
    <main
      className="whole-screen"
      style={{
        backgroundColor: `hsl(${hueState}, ${saturationState}%, ${lightnessState}%)`
      }}
    >
      <p>Hue</p>
      <input
        type="range"
        min="0"
        max="360"
        value={hueState}
        onChange={e => dispatch(HueAction(e))}
      />
      <p>Saturation</p>
      <input
        type="range"
        min="0"
        max="100"
        value={saturationState}
        onChange={e => dispatch(SaturationAction(e))}
      />
      <p>Lightness</p>
      <input
        type="range"
        min="0"
        max="100"
        value={lightnessState}
        onChange={e => dispatch(LightnessAction(e))}
      />
      <HelloWorld />
    </main>
  )
}

export default App
