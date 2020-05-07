import { Effect, State } from '/types'

import cellsRandomise from '../utils/cellsRandomise'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

type f = (
  state:State,
  { chance }:{ chance:number }
) => [
  State,
  [[Effect, State]]
]

const Randomise:f = (
  state, 
  { chance }
) => 
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