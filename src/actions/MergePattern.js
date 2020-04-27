import updateCanvas from '/effects/updateCanvas'
import cellShouldSurvive from '/utils/cellShouldSurvive'

const MergePattern = (
  state,
  { 
    pattern = [[]], /* 2d array of booleans */
    xOffset = 100,
    yOffset = 100,
  } = {} 
) => [
  {
    ...state,
    cells: state.cells.map(
      (column, x) => (
        column.map(
          (cell, y) => 
            x > xOffset &&
            y > yOffset &&
            x-xOffset < pattern.length && 
            y-yOffset < pattern[x-xOffset].length
              ? !!pattern[x-xOffset][y-yOffset]
              : cell
        )
      )
    )
  },
  [[updateCanvas, state]]
]

export default MergePattern