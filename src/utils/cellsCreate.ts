import { Cell, Grid } from '/types'

import cellsRandomise from '/utils/cellsRandomise.ts'

const cellEmpty = (): Cell => (
  { alive: false, neighbours: 0, nextNeighbours: 0 }
)

const cellsCreate = ({
  chance = 0.2,
  width = 480,
  height = 270,
}): Grid => {
  const cells: Grid =
    [...Array(width)]
      .fill([])
      .map(
        () =>
          [...Array(height)]
            .fill(cellEmpty())
      )
  return chance > 0
    ? cellsRandomise(cells, chance)
    : cells
}

export default cellsCreate
