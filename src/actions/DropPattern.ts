import { Effect, State } from '/types'

import updateCanvas from '/effects/updateCanvas'
import effectAdd from '/utils/effectAdd'
import cellsMerge from '../utils/cellsMerge'

type f = (
  state:State,
  {
    xOffset,
    yOffset,
  }:{
    xOffset:number,
    yOffset:number,
  }
) => [
  State,
  [[Effect, State]]
]

const DropPattern:f = (
  state,
  { 
    xOffset = 0,
    yOffset = 0,
  }
) => 
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