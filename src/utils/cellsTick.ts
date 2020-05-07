import { Grid, Neighbours } from '/types'

import cellsMap from './cellsMap.ts'
import cellTick from './cellTick'

type f = (
  cells: Grid,
  neighbours: Neighbours
) => Grid

const cellsTick:f = (cells, neighbours) =>
  cellsMap(
    cells,
    cellTick(neighbours)
  )

export default cellsTick