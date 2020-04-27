import updateCanvas from '/effects/updateCanvas'
import cellsPatternInsert from '/utils/cellsPatternInsert'

const InsertPattern = (
  state,
  { 
    pattern = [[]],
    xOffset = 0,
    yOffset = 0,
  } = {} 
) => [
  {
    ...state,
    cells: cellsPatternInsert({
      cells: state.cells,
      pattern,
      xOffset,
      yOffset,
    })
  },
  [[updateCanvas, state]]
]

export default InsertPattern