import { Grid, Cell } from '/types'

const cellsMapT = <T>(
  cells: Grid,
  f: (cells: Grid, cell: Cell, x: number, y: number) => T,
): T[][] =>
  cells.map(
    (column, x) =>
      column.map(
        (cell, y) =>
          f(cells, cell, x, y)
      )
  )

export default cellsMapT
