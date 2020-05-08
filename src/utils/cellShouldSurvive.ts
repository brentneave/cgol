import { Cell } from '/types'

const cellShouldSurvive = (cell: Cell): boolean =>
  cell.neighbours === 2 || cell.neighbours === 3

export default cellShouldSurvive
