import {Action} from 'hyperapp'
import {State} from '/types'

import cellsCreate from '/utils/cellsCreate'
import cellsMerge from '/utils/cellsMerge'
import updateCanvas from '/effects/updateCanvas'


const SetSize: Action<
  State,
  {
    width: number;
    height: number;
  }
> = (state, {
  width = 480,
  height = 320,
}) => {
  const newState: State = {
    ...state,
    machine: {
      ...state.machine,
      cells: cellsMerge(
        cellsCreate({
          chance: 0,
          width: Math.ceil(width / state.canvas.scale),
          height: Math.ceil(height / state.canvas.scale),
        }).cells,
        state.machine.cells,
        Math.round(
          ((width / state.canvas.scale) - state.machine.cells.length) / 2
        ),
        Math.round(
          ((height / state.canvas.scale) - state.machine.cells[0].length) / 2
        ),
      ),
      neighbours: cellsCreate({
        chance: 0,
        width: Math.ceil(width / state.canvas.scale),
        height: Math.ceil(height / state.canvas.scale),
      }).neighbours,
    },
  }

  return [
    newState,
    [updateCanvas, newState],
  ]
}

export default SetSize
