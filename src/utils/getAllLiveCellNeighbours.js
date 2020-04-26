// @ts-nocheck
import getAllLiveCells from './getAllLiveCells';
import getCellNeighbours from './getCellNeighbours';

const getAllLiveCellNeighbours = ({ cells }) =>
  getAllLiveCells({ 
    cells
  }).map(
    ({ x, y }) => getCellNeighbours({ cells, x, y })
  ).flat()

export default getAllLiveCellNeighbours