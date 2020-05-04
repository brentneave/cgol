const cellsMap = (
  cells,
  f,
) =>
  cells.map(
    (column, x) =>
      column.map(
        (cell, y) =>
          f(cells, cell, x, y)
      )
  )

export default cellsMap