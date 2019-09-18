export const LightnessReducer = (state = ' ', { type, payload }) => {
  switch (type) {
    case 'Saturation':
      return (state = payload)
    default:
      return state
  }
}
