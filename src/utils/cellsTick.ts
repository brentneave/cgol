import { Cell, Grid, Neighbours } from '/types'

import cellsMap from './cellsMap'
import cellTick from './cellTick'

type f = (
  cells: Grid,
  neighbours: Neighbours
) => Grid

const cellsTick: f = (cells, neighbours) =>
  cellsMap<Cell>(
    cells,
    cellTick(neighbours)
  )

export default cellsTick
