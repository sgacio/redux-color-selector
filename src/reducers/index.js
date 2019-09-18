import { combineReducers } from 'redux'
import { HueReducer } from './HueReducer'
import { SaturationReducer } from './SaturationReducer'
import { LightnessReducer } from './LightnessReducer'

export const allReducers = combineReducers({
  Hue: HueReducer,
  Saturation: SaturationReducer,
  Lightness: LightnessReducer
})
