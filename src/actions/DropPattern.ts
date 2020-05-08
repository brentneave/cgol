import { Action, State } from '/types'

import updateCanvas from '/effects/updateCanvas'
import effectAdd from '/utils/effectAdd'
import cellsMerge from '../utils/cellsMerge'

const DropPattern = (
  state: State,
  {
    xOffset = 0,
    yOffset = 0,
  }
): Action =>
  effectAdd(
    updateCanvas,
    {
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
          : state.machine.cells
      }
    }
  )

export default DropPattern
