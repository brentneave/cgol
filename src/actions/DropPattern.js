import updateCanvas from '/effects/updateCanvas'
import effectAdd from '/utils/effectAdd'
import cellsPatternInsert from '/utils/cellsPatternInsert'


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
        ? cellsPatternInsert({
            cells: state.cells,
            pattern: state.draggingPattern,
            xOffset,
            yOffset,
          })
        : state.cells
    }
  })

export default DropPattern