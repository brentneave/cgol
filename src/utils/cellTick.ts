import {Grid, Neighbours} from '/types'

import cellShouldSpawn from './cellShouldSpawn'
import cellShouldSurvive from './cellShouldSurvive'


type f = (
  neighbours: Neighbours
) => (
  cells: Grid,
  cell: boolean,
  x: number,
  y: number
) => boolean

const cellTick = (neighbours: Neighbours) =>
  (cells: Grid, cell: boolean, x: number, y: number): boolean =>
    cell
      ? cellShouldSurvive(cells, neighbours, x, y)
      : cellShouldSpawn(cells, neighbours, x, y)

export default cellTick
