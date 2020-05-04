import cellsMap from './cellsMap'
import cellShouldSpawn from './cellShouldSpawn'
import cellShouldSurvive from './cellShouldSurvive'

const cellTick = neighbours => ( cells, cell, x, y ) => 
  cell
    ? cellShouldSurvive({ cells, neighbours, x, y})
    : cellShouldSpawn({ cells, neighbours, x, y})

const cellsTick = ({ cells, neighbours }) => {
  return cellsMap({
    cells,
    f: cellTick(neighbours)
  })
}
export default cellsTick