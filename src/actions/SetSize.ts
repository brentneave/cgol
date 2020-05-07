import { Effect, State } from '/types';
import cellsCreate from '/utils/cellsCreate'
import cellsMerge from '/utils/cellsMerge'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

type f = (
  state: State,
  {
    width,
    height,
  }:{
    width:number,
    height:number,
  }
) => [
  State,
  [[Effect, State]]
]

const SetSize:f = (state, {
  width = 480,
  height = 320,
}) =>
  effectAdd(
    updateCanvas,
    {
      ...state,
      // cellSize: Math.max(3, Math.ceil(width / 384)),
      machine: {
        ...state.machine,
        cells: cellsMerge(
          cellsCreate({
            chance: 0,
            width: Math.ceil(width / state.machine.cellSize),
            height: Math.ceil(height / state.machine.cellSize),
          }).cells,
          state.machine.cells,
          Math.round(
            ((width / state.machine.cellSize) - state.machine.cells.length) / 2
          ),
          Math.round(
            ((height / state.machine.cellSize) - state.machine.cells[0].length) / 2
          ),
        ),
        neighbours: cellsCreate({
          chance: 0,
          width: Math.ceil(width / state.machine.cellSize),
          height: Math.ceil(height / state.machine.cellSize),
        }).neighbours
      }
    }
  )

export default SetSize
