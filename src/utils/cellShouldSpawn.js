// @ts-nocheck
import getNumberOfLiveNeighbours from './getNumberOfLiveNeighbours'

const MIN_THRESHOLD_FOR_SPAWN = 2;
const MAX_THRESHOLD_FOR_SPAWN = 3;

const should = n => 
  n === MIN_THRESHOLD_FOR_SPAWN ||
  n === MAX_THRESHOLD_FOR_SPAWN

const cellShouldSpawn = ({ cells, x, y }) =>
  !cells[x][y] && should(getNumberOfLiveNeighbours({ cells, x, y }))

export default cellShouldSpawn