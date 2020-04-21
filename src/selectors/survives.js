import liveNeighbourCount from './liveNeighbourCount'

const survives = ({ x, y, liveCells }) => 
  (
    n => n === 2 || n === 3
  )(liveNeighbourCount({ x, y, liveCells }))

export default survives