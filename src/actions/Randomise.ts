import { Action, State } from '/types'

import cellsRandomise from '../utils/cellsRandomise'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

const Randomise = (
  state: State,
  { chance }: { chance: number }
): Action =>
  effectAdd(
    updateCanvas,
    {
      ...state,
      machine: {
        ...state.machine,
        cells: cellsRandomise(state.machine.cells, chance)
      }
    }
  )

export default Randomise
