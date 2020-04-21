import {unique} from '../utils'
import liveNeighbours from './liveNeighbours'

const allLiveNeighbours = ({ liveCells }) =>
  unique(
    liveCells.map(
      ({ x, y }) => liveNeighbours({ x, y, liveCells })
    ).filter(
      liveNeighbours => liveNeighbours.length > 0
    ).flat()
  )

export default allLiveNeighbours;