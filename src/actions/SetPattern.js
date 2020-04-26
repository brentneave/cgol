import updateCanvas from '/effects/updateCanvas'

const SetPattern = (
  state,
  { pattern } /* 2d array of booleans */
) => [
  {
    ...state,
    debug: console.log(pattern),
    cells: state.cells.map(
      (column, x) => (
        column.map(
          (row, y) => 
            x < pattern.length && y < pattern.length
              ? !!pattern[x][y]
              : false
        )
      )
    )
  },
  [[updateCanvas, state]]
]

export default SetPattern