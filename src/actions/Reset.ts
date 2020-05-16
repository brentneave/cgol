import {Action} from 'hyperapp'
import {State} from '/types'

import cellsCreate from '/utils/cellsCreate'
import updateCanvas from '/effects/updateCanvas'

const Reset: Action<State> = (state) => {
  const newState = {
    ...state,
    machine: {
      ...state.machine,
      ...cellsCreate({
        chance: 0,
        width: state.machine.cells.length,
        height: state.machine.cells[0].length,
      }),
    },
  }
  return [
    newState,
    [updateCanvas, newState],
  ]
}

export default Reset
