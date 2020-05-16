import { Action } from 'hyperapp'
import { Effect, State } from '/types'

import cellsCreate from '../utils/cellsCreate'
import updateCanvas from '/effects/updateCanvas'


const Randomise:Action<
  State,
  { chance: number }
> = (
  state,
  { chance }
) => {
  const newState:State = {
    ...state,
    machine: {
      ...state.machine,
      ...cellsCreate({ chance: 0.2 })
    }
  }
  return [ 
    newState, 
    [updateCanvas, newState]
  ]
}

export default Randomise
