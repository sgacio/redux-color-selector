// import { HueAction } from '../actions'
import { useSelector } from 'react-redux'

const hueState = useSelector(state => state.Hue)

export const ColorReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'Hue':
      return (hueState = payload)
    default:
      return state
  }
}
