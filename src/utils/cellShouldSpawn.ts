import {Grid, Neighbours} from '/types'

import getNumberOfLiveNeighbours from './getNumberOfLiveNeighbours'

const shouldSpawn = (n: number): boolean =>
  n === 3

type f = (
  cells: Grid,
  neighbours: Neighbours,
  x: number,
  y: number
) => boolean

const cellShouldSpawn: f = (cells, neighbours, x, y) =>
  cells[x][y]
    ? true
    : shouldSpawn(
      getNumberOfLiveNeighbours(cells, neighbours, x, y)
    )

export default cellShouldSpawn
