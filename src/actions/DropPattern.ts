import {Action} from 'hyperapp'
import {State} from '/types'

import cellsMerge from '/utils/cellsMerge'
import updateCanvas from '/effects/updateCanvas'

const DropPattern: Action<
  State,
  {
    xOffset: number;
    yOffset: number;
  }
> = (
  state,
  {
    xOffset = 0,
    yOffset = 0,
  }
) => {
  const newState: State = {
    ...state,
    machine: {
      ...state.machine,
      cells: state.stamps.selected
        ? cellsMerge(
          state.machine.cells,
          state.stamps.selected,
          xOffset,
          yOffset,
        )
        : state.machine.cells,
    },
  }

  return [
    newState,
    [updateCanvas, newState],
  ]
}


export default DropPattern
