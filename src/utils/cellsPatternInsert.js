const cellsPatternInsert = ({ 
  cells = [[]],
  pattern = [[]],
  xOffset = 0,
  yOffset = 0,
} = {}) => cells.map(
    (column, x) => (
      column.map(
        (cell, y) => 
          x > xOffset &&
          y > yOffset &&
          x - xOffset < pattern.length && 
          y - yOffset < pattern[x - xOffset].length
            ? pattern[x - xOffset][y - yOffset]
            : cell
      )
    )
  )

export default cellsPatternInsert