import cellShouldSpawn from './cellShouldSpawn'
import cellShouldSurvive from './cellShouldSurvive'

const tickAllCells = ({ cells }) => cells.map(
    (column, x) =>
      column.map(
        (cell, y) => 
          cell
            ? cellShouldSurvive({ cells, x, y})
            : cellShouldSpawn({ cells, x, y})
      )
  )

export default tickAllCells