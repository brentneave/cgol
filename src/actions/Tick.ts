import { Action } from 'hyperapp'
import { State } from '/types'

import cellsTick from '../utils/cellsTick'
import updateCanvas from '/effects/updateCanvas'

const Tick:Action<State> = state => {
  const newState =  {
    ...state,
    machine: {
      ...state.machine,
      cells: cellsTick(
        state.machine.cells,
        state.machine.neighbours
      )
    }
  }

  return [
    newState,
    [ updateCanvas, newState ]
  ]
}

export default Tick
