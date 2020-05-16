import {Action} from 'hyperapp'
import {State} from '/types'

const MouseMoved: Action<
  State,
  {
    clientX: number;
    clientY: number;
}> = (
  state,
  {clientX, clientY}
) => ({
  ...state,
  mouse: {
    ...state.mouse,
    position: {
      x: clientX,
      y: clientY,
    },
  },
})

export default MouseMoved
