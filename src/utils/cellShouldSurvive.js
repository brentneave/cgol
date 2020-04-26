// @ts-nocheck
import getNumberOfLiveNeighbours from './getNumberOfLiveNeighbours'

const THRESHOLD_FOR_SURVIVAL = 2;

const cellShouldSurvive = ({ cells, x, y }) => 
  cells[x][y] && getNumberOfLiveNeighbours({ cells, x, y }) >= THRESHOLD_FOR_SURVIVAL
  
export default cellShouldSurvive