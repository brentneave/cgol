import { Grid } from '/types'

import cellSet from './cellSet'
import cellsMap from './cellsMap'

const cellsRandomise = (
  cells: Grid,
  chance: number,
): Grid =>
  cellsMap(
    cells,
    (cells, _, x, y) =>
      cellSet(cells, x, y, Math.random() < chance)
  )

export default cellsRandomise
