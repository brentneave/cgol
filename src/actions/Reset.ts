import { Action, State } from '/types'

import cellsCreate from '/utils/cellsCreate'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

const Reset = (
  state: State
): Action =>
  effectAdd(
    updateCanvas,
    {
      ...state,
      machine: {
        ...state.machine,
        ...cellsCreate({
          chance: 0,
          width: state.machine.cells.length,
          height: state.machine.cells[0].length,
        })
      }
    }
  )

export default Reset
