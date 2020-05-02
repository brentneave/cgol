import updateCanvas from '/effects/updateCanvas'
import effectAdd from '/utils/effectAdd'
import cellsMerge from '../utils/cellsMerge'


const DropPattern = (
  state,
  { 
    pattern = [[]],
    xOffset = 0,
    yOffset = 0,
  } = {} 
) => 
  effectAdd({
    effect: updateCanvas,
    state: {
      ...state,
      cells: state.draggingPattern
        ? cellsMerge({
            cells: state.cells,
            pattern: state.draggingPattern,
            xOffset,
            yOffset,
          })
        : state.cells
    }
  })

export default DropPattern