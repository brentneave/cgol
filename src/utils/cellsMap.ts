import { Grid, Cell } from '/types'

import cellsMapT from './cellsMapT'

const cellsMap = (
  cells: Grid,
  f: (cells: Grid, cell: Cell, x: number, y: number) => Cell,
): Grid =>
  cellsMapT<Cell>(cells, f)

export default cellsMap
