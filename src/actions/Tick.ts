import { Action, State } from '/types'

import cellsTick from '../utils/cellsTick'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

const Tick = (state: State): Action =>
  effectAdd(
    updateCanvas,
    {
      ...state,
      machine: {
        ...state.machine,
        cells: cellsTick(
          state.machine.cells
        )
      }
    }
  )

export default Tick
