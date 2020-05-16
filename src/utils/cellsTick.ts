import {Cell, Grid, Neighbours} from '/types'
import cellTick from './cellTick'
import cellsMap from './cellsMap'

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
