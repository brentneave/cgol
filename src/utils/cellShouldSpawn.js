import getNumberOfLiveNeighbours from './getNumberOfLiveNeighbours'

const shouldSpawn = n => n === 3

const cellShouldSpawn = ({ cells, neighbours, x, y }) =>
  cells[x][y] 
    ? true
    : shouldSpawn(
        getNumberOfLiveNeighbours({ cells, neighbours, x, y })
      )

export default cellShouldSpawn