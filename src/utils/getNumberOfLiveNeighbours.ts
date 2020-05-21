import {Grid, Neighbours} from '/types'

type f = (
  cells: Grid,
  neighbours: Neighbours,
  x: number,
  y: number,
) => number

const getNumberOfLiveNeighbours: f = (cells, neighbours, x, y) =>
{
  let n = 0
  let i = 0
  while (n <= 3 && i < 8) {
    if (cells[neighbours[x][y][i].x][neighbours[x][y][i].y]) n++
    i++
  }
  // for (let i = 0; i < 8; i++) {
  //   if (cells[neighbours[x][y][i].x][neighbours[x][y][i].y]) n++
  // }
  return n
}

export default getNumberOfLiveNeighbours
