import {Action} from 'hyperapp'
import {State} from '/types'

import cellsCreate from '../utils/cellsCreate'
import updateCanvas from '/effects/updateCanvas'


const Randomise: Action<
  State,
  { chance?: number }
> = (
  state,
  {chance = 0.2} = {}
) => {
  const newState: State = {
    ...state,
    machine: {
      ...state.machine,
      ...cellsCreate({
        chance,
        height: state.machine.cells[0].length,
        width: state.machine.cells.length,
      }),
    },
  }
  return [
    newState,
    [updateCanvas, newState],
  ]
}

export default Randomise
