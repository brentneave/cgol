import getNumberOfLiveNeighbours from './getNumberOfLiveNeighbours'

const shouldSpawn = n => n === 3

const cellShouldSpawn = ({ cells, x, y }) => 
  cells[x][y] 
    ? true
    : shouldSpawn(
        getNumberOfLiveNeighbours({ cells, x, y })
      )

export default cellShouldSpawn