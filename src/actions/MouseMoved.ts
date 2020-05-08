import { State } from '/types'

const MouseMoved = (
  state: State,
  { clientX = 0, clientY = 0 }
): State => ({
  ...state,
  mouse: {
    ...state.mouse,
    position: {
      x: clientX,
      y: clientY,
    }
  }
})

export default MouseMoved
