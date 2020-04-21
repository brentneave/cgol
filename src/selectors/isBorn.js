import liveNeighbourCount from './liveNeighbourCount'

const isBorn = ({ x, y, liveCells }) => 
  liveNeighbourCount({ x, y, liveCells }) >= 3

export default isBorn