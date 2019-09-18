export const LightnessReducer = (state = ' ', { type, payload }) => {
  switch (type) {
    case 'Lightness':
      return (state = payload)
    default:
      return state
  }
}
