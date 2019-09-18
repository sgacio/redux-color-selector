export const HueReducer = (state = ' ', { type, payload }) => {
  switch (type) {
    case 'Hue':
      return (state = payload)
    default:
      return state
  }
}
