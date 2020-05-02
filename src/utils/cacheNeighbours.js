import cellsMap from "./cellsMap";
import getCellNeighbours from "./getCellNeighbours";

const cacheNeighbours = state => ({
  ...state,
  neighbours: cellsMap({
    cells: state.cells,
    f: ({ cells, cell, x, y }) => 
      getCellNeighbours({ cells, x, y })
  })
})

export default cacheNeighbours