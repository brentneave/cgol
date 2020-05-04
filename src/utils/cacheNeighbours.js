import cellsMap from "./cellsMap";
import getCellNeighbours from "./getCellNeighbours";

const cacheNeighbours = state => ({
  ...state,
  neighbours: cellsMap(
    state.cells,
    ( cells, cell, x, y ) => 
      getCellNeighbours({ cells, x, y })
  )
})

export default cacheNeighbours