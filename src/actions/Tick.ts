import { Effect, State } from '/types'

import cellsTick from '../utils/cellsTick'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

type f = (state:State) => [
  State,
  [[Effect, State]]
]

const Tick:f = state =>
  effectAdd(
    updateCanvas,
    {
      ...state,
      machine: {
        ...state.machine,
        cells: cellsTick(
          state.machine.cells,
          state.machine.neighbours
        )
      }
    }
  )


export default Tick
