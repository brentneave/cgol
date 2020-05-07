import { Effect, State } from '/types'

import cellsCreate from '/utils/cellsCreate'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

type f = (state:State) => [
  State,
  [[Effect, State]]
]

const Reset:f = (
  state
) =>
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
