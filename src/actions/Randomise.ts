import { Action } from 'hyperapp'
import { Effect, State } from '/types'

import cellsRandomise from '../utils/cellsRandomise'
import effectAdd from '../utils/effectAdd'
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
      cells: cellsRandomise(state.machine.cells, chance)
    }
  }
  return [ 
    newState, 
    [updateCanvas, newState]
  ]
}

export default Randomise
