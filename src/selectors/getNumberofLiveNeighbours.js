// @ts-nocheck
import getCellNeighbours from "./getCellNeighbours";

const getNumberOfLiveNeighbours = ({ cells, x, y }) => 
  getCellNeighbours({ cells, x, y }).map(
    neighbour => {
      return cells[neighbour.x][neighbour.y] ? 1 : 0
    }
  ).filter(
    cell => cell
  ).length

export default getNumberOfLiveNeighbours