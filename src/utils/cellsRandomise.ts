import { Grid } from '/types'

import cellsMap from './cellsMap'

type f = (
  cells:Grid,
  chance:number
) => Grid

const cellsRandomise:f = (
  cells = [[]],
  chance = 1/10,
) =>
  cellsMap(
    cells,
    () => Math.random() < chance
  )

export default cellsRandomise
