import cellsMap from './cellsMap'
import cellShouldSpawn from './cellShouldSpawn'
import cellShouldSurvive from './cellShouldSurvive'

const cellTick = ({ cells, cell, x, y }) => cell
  ? cellShouldSurvive({ cells, x, y})
  : cellShouldSpawn({ cells, x, y})

const cellsTick = ({ cells }) => 
  cellsMap({
    cells,
    f: cellTick
  })

export default cellsTick