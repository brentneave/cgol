import {Coord, Grid} from '/types'

type fConstrain = (
  cells: Grid,
  x: number,
  y: number
) => Coord

const constrain: fConstrain = (cells, x, y) => ({
  x: x < 0 ? cells.length + x : x % cells.length,
  y: y < 0 ? cells[0].length + y : y % cells[0].length,
})

type fGetCellNeighbours = (
  cells: Grid,
  x: number,
  y: number
) => Coord[]

const getCellNeighbours: fGetCellNeighbours = (cells, x, y) => [
  constrain(cells, x - 1, y - 1),
  constrain(cells, x, y - 1),
  constrain(cells, x + 1, y - 1),
  constrain(cells, x - 1, y),
  constrain(cells, x + 1, y),
  constrain(cells, x - 1, y + 1),
  constrain(cells, x, y + 1),
  constrain(cells, x + 1, y + 1),
]

export default getCellNeighbours
