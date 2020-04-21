import { cellsAreEqual, unique } from '../utils'

const allDeadNeighbours = ({ liveCells, width, height }) => 
  unique(
    liveCells.map(
      ({ x, y }) => [
        {x: x - 1,  y: y - 1},
        {x,         y: y - 1},
        {x: x + 1,  y: y - 1},

        {x: x - 1,  y},
        {x: x + 1,  y},

        {x: x - 1,  y: y + 1},
        {x,         y: y + 1},
        {x: x + 1,  y: y + 1},
      ]
    ).flat()
  ).filter(
    deadCell => 
      !liveCells.find(liveCell => cellsAreEqual(liveCell, deadCell)) &&
      deadCell.x > 0 &&
      deadCell.y > 0 &&
      deadCell.x < width &&
      deadCell.y < height
  )

export default allDeadNeighbours;