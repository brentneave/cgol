import { unique } from '../utils'

const allDeadNeighbours = ({ liveCells, width, height }) => 
  unique(
    liveCells.map(
      ({ x, y }) => [
        {x: (x - 1) % width,  y: (y - 1) % height},
        {x,                   y: (y - 1) % height},
        {x: (x + 1) % width,  y: (y - 1) % height},

        {x: (x - 1) % width,  y},
        {x: (x + 1) % width,  y},

        {x: (x - 1) % width,  y: (y + 1) % height},
        {x,                   y: (y + 1) % height},
        {x: (x + 1) % width,  y: (y + 1) % height},
      ]
    ).flat()
  ).filter(
    deadCell => !liveCells.find(
      liveCell => 
        liveCell.x === deadCell.x && 
        liveCell.y === deadCell.y
    )
  ).map(
    ({ x, y }) => ({
      x: x < 0 ? width + x : x,
      y: y < 0 ? height + y : y,
    })
  )

export default allDeadNeighbours;