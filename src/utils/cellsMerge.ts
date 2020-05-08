import { Cell, Grid, Stamp } from '/types'

import cellSet from './cellSet'
import cellsMap from './cellsMap'

const toBoolean = (cell: Cell|number) =>
  (typeof cell === "number")
    ? cell > 0
    : cell.alive

const cellsMerge = (
  cells: Grid,
  pattern: Grid|Stamp,
  xOffset: number,
  yOffset: number
): Grid =>
  cellsMap(
    cells,
    (cells, cell, x, y) =>
      x >= xOffset &&
      y >= yOffset &&
      x < xOffset + pattern.length &&
      y < yOffset + pattern[0].length
        ? cellSet(
            cells,
            x,
            y,
            toBoolean(pattern[x - xOffset][y - yOffset])
          )
        : cell
  )

export default cellsMerge
