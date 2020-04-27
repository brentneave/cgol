import cellsMap from './cellsMap'

const cellsPatternInsert = ({ 
  cells = [[]],
  pattern = [[]],
  xOffset = 0,
  yOffset = 0,
} = {}) => 
  cellsMap({
    cells,
    f: ({ cell, x, y }) => 
      x > xOffset &&
      y > yOffset &&
      x < xOffset + pattern.length && 
      y < yOffset + pattern[0].length
        ? pattern[x - xOffset][y - yOffset]
        : cell
  })

export default cellsPatternInsert