import cellsCreate from '/utils/cellsCreate'
import cellsMerge from '/utils/cellsMerge'
import effectAdd from '../utils/effectAdd'
import updateCanvas from '/effects/updateCanvas'

const SetSize = (state, {
  width = 480,
  height = 320,
} = {}) => 
  effectAdd({
    effect: updateCanvas,
    state: {
      ...state,
      // cellSize: Math.max(3, Math.ceil(width / 384)),
      cells: cellsMerge({ 
        cells: cellsCreate({ 
          width: Math.ceil(width / state.cellSize), 
          height: Math.ceil(height / state.cellSize),
        }),
        pattern: state.cells,
        xOffset: Math.round(
          ((width / state.cellSize) - state.cells.length) / 2
        ),
        yOffset: Math.round(
          ((height / state.cellSize) - state.cells[0].length) / 2
        ),
      })
    }
  })

export default SetSize