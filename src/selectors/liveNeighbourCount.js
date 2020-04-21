import liveNeighbours from './liveNeighbours'

const liveNeighbourCount = ({ x, y, liveCells }) => 
  liveNeighbours({ x, y, liveCells }).length

export default liveNeighbourCount