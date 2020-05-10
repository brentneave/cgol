import { Grid, Neighbours } from '/types'

import cellsMap from '/utils/cellsMap.ts'
import getCellNeighbours from '/utils/getCellNeighbours'

type fAddNeighbours = (
  cells:Grid
) => ({
  cells:Grid,
  neighbours:Neighbours
})

const addNeighbours:fAddNeighbours = cells => ({
  cells,
  neighbours: cellsMap(
    cells,
    (cells, cell, x, y) =>
      getCellNeighbours(cells, x, y)
  ),
})

type fCellsCreate = ({
  chance,
  width,
  height,
}: {
  chance?:number,
  width?:number,
  height?:number,
}) => ({
  cells:Grid,
  neighbours:Neighbours
})

const cellsCreate:fCellsCreate = ({
  chance = 0.2,
  width = 480,
  height = 270,
}) =>
  addNeighbours(
    [...Array(width)]
      .fill([])
      .map(
        () =>
          [...Array(height)]
            .fill(false)
            .map(
              () => Math.random() < chance
            )
      )
  )

export default cellsCreate