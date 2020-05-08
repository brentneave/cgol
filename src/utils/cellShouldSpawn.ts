import { Cell } from '/types'

const cellShouldSpawn = (cell: Cell): boolean =>
  cell.neighbours === 3

export default cellShouldSpawn
