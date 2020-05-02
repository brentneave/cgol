// @ts-nocheck
import getCellNeighbours from "./getCellNeighbours";

const getNumberOfLiveNeighbours = ({ cells, x, y }) => {
  var count = 0
  const neighbours = getCellNeighbours({ cells, x, y })
  for(var i = 0; i< neighbours.length; i++) {
    if(cells[neighbours[i].x][neighbours[i].y]) count ++
  }
  return count
}
  // getCellNeighbours({ cells, x, y }).map(
  //   neighbour => cells[neighbour.x][neighbour.y]
  // ).filter(
  //   cell => cell
  // ).length

export default getNumberOfLiveNeighbours