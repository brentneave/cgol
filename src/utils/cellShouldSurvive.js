import getNumberOfLiveNeighbours from './getNumberOfLiveNeighbours'

const shouldSurvive = n => n === 2 || n === 3

const cellShouldSurvive = (cells, neighbours, x, y) => 
  cells[x][y]
    ? shouldSurvive(
        getNumberOfLiveNeighbours(cells, neighbours, x, y)
      )
    : false
  
export default cellShouldSurvive