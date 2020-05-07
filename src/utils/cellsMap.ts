import { Grid, Cell } from '/types'

type f = (
  cells:Grid,
  f: (
    cells:Grid,
    cell:Cell,
    x:number,
    y:number
  ) => any
) => any[][]

const cellsMap:f = (
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
