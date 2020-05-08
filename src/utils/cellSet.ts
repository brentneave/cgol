import { Grid, Cell } from '/types'

import getCellNeighbours from './getCellNeighbours';

const cellSet = (cells: Grid, x: number, y: number, alive: boolean): Cell => {
  if (cells[x][y].alive === alive)
    return cells[x][y]
  cells[x][y].alive = alive
  getCellNeighbours(cells, x, y).forEach(
    coord => cells[coord.x][coord.y].nextNeighbours += alive ? 1 : -1)
  return cells[x][y]
}

export default cellSet
