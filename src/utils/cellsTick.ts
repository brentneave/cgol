import { Grid } from '/types'

import cellSet from './cellSet'
import cellShouldSpawn from './cellShouldSpawn'
import cellShouldSurvive from './cellShouldSurvive'
import cellsMap from './cellsMap'

const cellsTick = (cells: Grid): Grid => {
  const nextCells: Grid = cells.map(
    column =>
      column.map(
        cell => ({
          alive: cell.alive,
          neighbours: cell.nextNeighbours,
          nextNeighbours: cell.nextNeighbours,
        })
      )
  )

  return cellsMap(
    nextCells,
    (cells, cell, x, y) =>
      cellSet(
        cells,
        x,
        y,
        cell.alive
          ? cellShouldSurvive(cell)
          : cellShouldSpawn(cell)
      )
  )
}

export default cellsTick
