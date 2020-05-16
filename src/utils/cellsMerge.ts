import { Grid } from '/types'

import cellsMap from './cellsMap'


type f = (
  cells: Grid,
  pattern: Grid,
  xOffset: number,
  yOffset: number,
) => Grid


const cellsMerge: f = (
  cells = [[]],
  pattern = [[]],
  xOffset = 0,
  yOffset = 0,
) =>
  cellsMap(
    cells,
    (cells, cell, x, y) =>
      x >= xOffset &&
      y >= yOffset &&
      x < xOffset + pattern.length &&
      y < yOffset + pattern[0].length
        ? pattern[x - xOffset][y - yOffset]
        : cell
  )

export default cellsMerge
