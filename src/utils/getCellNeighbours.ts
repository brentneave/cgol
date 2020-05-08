import { Coord, Grid } from '/types'

const constrain = (cells: Grid, x: number, y: number): Coord => ({
  x: x < 0 ? cells.length + x : x % cells.length,
  y: y < 0 ? cells[0].length + y : y % cells[0].length,
})

const getCellNeighbours = (cells: Grid, x: number, y: number): Coord[] => [
  constrain(cells, x - 1, y - 1 ),
  constrain(cells, x,     y - 1 ),
  constrain(cells, x + 1, y - 1 ),
  constrain(cells, x - 1, y     ),
  constrain(cells, x + 1, y     ),
  constrain(cells, x - 1, y + 1 ),
  constrain(cells, x,     y + 1 ),
  constrain(cells, x + 1, y + 1 ),
]

export default getCellNeighbours
