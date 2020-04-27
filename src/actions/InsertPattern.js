import updateCanvas from '/effects/updateCanvas'
import effectAdd from '/utils/effectAdd'
import cellsPatternInsert from '/utils/cellsPatternInsert'


const InsertPattern = (
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
      cells: cellsPatternInsert({
        cells: state.cells,
        pattern,
        xOffset,
        yOffset,
      })
    }
  })

export default InsertPattern