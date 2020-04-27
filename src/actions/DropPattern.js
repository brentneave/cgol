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
      debug: console.log(xOffset, yOffset, pattern),
      cells: cellsPatternInsert({
        cells: state.cells,
        pattern,
        xOffset,
        yOffset,
      })
    }
  })

export default DropPattern