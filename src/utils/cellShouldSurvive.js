import getNumberOfLiveNeighbours from './getNumberOfLiveNeighbours'

const shouldSurvive = n => n === 2 || n === 3

const cellShouldSurvive = ({ cells, x, y }) => 
  cells[x][y]
    ? shouldSurvive(
        getNumberOfLiveNeighbours({ cells, x, y })
      )
    : false
  
export default cellShouldSurvive