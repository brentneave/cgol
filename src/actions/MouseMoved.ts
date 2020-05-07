import { State } from '/types'
import { isTaggedTemplateExpression } from 'typescript'

type f = (
  state:State,
  {
    clientX,
    clientY
  }:{
    clientX:number,
    clientY:number,
  }
) => State

const MouseMoved:f = (
  state,
  { clientX, clientY }
) => ({
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