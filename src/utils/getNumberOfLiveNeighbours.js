// @ts-nocheck
import getCellNeighbours from "./getCellNeighbours";

const getNumberOfLiveNeighbours = ({ cells, x, y }) => 
  getCellNeighbours({ cells, x, y }).map(
    neighbour => cells[neighbour.x][neighbour.y]
  ).filter(
    cell => cell
  ).length

export default getNumberOfLiveNeighbours